export { default } from 'next-auth/middleware'

export const config = {
    matcher: [
        '/aid-projects/:path*',
        '/worship/:path*'
    ]
}