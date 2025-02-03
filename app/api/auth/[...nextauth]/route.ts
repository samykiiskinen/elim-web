import NextAuth, { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from '@/prisma/client'
import CredentialsProvider from 'next-auth/providers/credentials'
import argon2 from 'argon2'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: { label: 'Användarnamn', type: 'text'},
                password: { label: 'Lösenord', type: 'password' }
            },
            async authorize(credentials, req) {
                if (!credentials?.name || !credentials.password) return null
                const user = await prisma.user.findUnique({ where: { name: credentials.name }})            

            if (!user) return null
            const isPasswordValid = await argon2.verify(user.hashedPassword, credentials.password);
            if (!isPasswordValid) return null;             
            return { id: user.id, name: user.name };
            }
        })
    ],
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }