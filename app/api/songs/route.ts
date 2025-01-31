import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client"
import { songSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = songSchema.safeParse(body)
    if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status: 400})

    const newSong = await prisma.song.create({
         data: { title: body.title, text: body.text}
    })

    return NextResponse.json(newSong, { status: 201})
}
