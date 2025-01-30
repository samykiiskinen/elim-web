import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client"
import { createProjectSchema } from "../../validationSchemas";

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = createProjectSchema.safeParse(body)
    if (!validation.success) 
        return NextResponse.json(validation.error.errors, {status: 400})

    const newProject = await prisma.project.create({
         data: { date: body.date, 
            accountNumber: body.accountNumber, 
            accountName: body.accountName, 
            country: body.country, 
            receiver: body.receiver, 
            purpose: body.purpose, 
            decision: body.decision, 
            income: body.income, 
            expense: body.expense}
    })

    return NextResponse.json(newProject, { status: 201})
}