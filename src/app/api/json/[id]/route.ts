import prisma from "@/lib/db";
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
        createdAt: true
      }
    });
    return NextResponse.json(json);
  } catch(error) {
    console.error('Error fetching JSON data:', error);
    return NextResponse.json({ error: 'Error fetching JSON data'}, { status: 500 })
  }
}