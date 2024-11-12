import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { userId } = auth();
  if(!userId) {
    return NextResponse.json({ error: 'Unauthorized'}, { status: 401 })
  }

  const { name, content } = await request.json();

  try {
    const json = await prisma.jsonData.create({
      data: {
        name,
        content,
        userId
      }
    });
    return NextResponse.json(json);
  } catch(error) {
    console.error('Error saving JSON:', error);
    return NextResponse.json({ error: 'Error saving JSON'}, { status: 500 })
  }
}

export async function GET() {
  const { userId } = auth();
  if(!userId) {
    return NextResponse.json({ error: 'Unauthorized'}, { status: 401 })
  }

  try {
    const json = await prisma.jsonData.findMany({
      where: { userId},
      orderBy: { createdAt: 'desc'},
      select: {
        id: true,
        name: true,
        createdAt: true
      }
    });
    return NextResponse.json(json);
  } catch(error) {
    console.error('Error fetching JSON list:', error);
    return NextResponse.json({ error: 'Error fetching JSON list'}, { status: 500 })
  }
}