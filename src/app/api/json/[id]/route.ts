import prisma from '@/lib/db'
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: {
    params: {
        id: string
    }
}) {

    const { id } = params;

    try {
        const json = await prisma.jsonData.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                content: true,
                createdAt: true,
            },
        });
        return NextResponse.json(json);
    } catch (error) {
        console.error("Error saving Json Data", error);
        return NextResponse.json({ error: "Error saving Json Data" }, { status: 400 });
    }
}