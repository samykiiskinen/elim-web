import { NextRequest, NextResponse } from "next/server";
import { z } from "zod"
import { prisma } from "@/prisma/client"

const createSongSchema = z.object({
    title: z.string().min(1, 'Ange sångtitel').max(255),
    text: z.string().min(1, 'Sångtexten är tom'),
})

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = createSongSchema.safeParse(body)
    if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status: 400})

    const newSong = await prisma.song.create({
         data: { title: body.title, text: body.text}
    })

    return NextResponse.json(newSong, { status: 201})
}
