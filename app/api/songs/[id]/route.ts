import { songSchema } from "@/app/validationSchemas";
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
    request: NextRequest, 
    { params }: { params: { id: string }}) {
        const body = await request.json()
        const validation = songSchema.safeParse(body)
        if (!validation.success)
            return NextResponse.json(validation.error.format(), { status: 400 })

        const song = await prisma.song.findUnique({
            where: { id: parseInt(params.id)}
        })
        if (!song) 
            return NextResponse.json({error: 'Invalid song'}, { status: 404})

        const updatedSong = await prisma.song.update({
            where: { id: song.id },
            data: {
                title: body.title,
                text: body.text
            }
        })

        return NextResponse.json(updatedSong)
    }

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string }}) {
        const song = await prisma.song.findUnique({
            where: { id: parseInt(params.id)}
        })
        if (!song) 
            return NextResponse.json({error: 'Invalid song'}, { status: 404})

        await prisma.song.delete({
            where: { id: song.id }
        })

        return NextResponse.json({})
    }
