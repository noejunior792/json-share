import prisma from '@/lib/db'
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
  const { name, content } = await request.json();

  try {
    const json = await prisma.jsonData.create({
      data: {
        name,
        content,
      }
    });
    return NextResponse.json(json);
  } catch (error) {
    console.error("Error saving JsonData", error);
    return NextResponse.json({ error: "Error saving Json" }, { status: 400 });
  }
}

export async function GET() {

  try {
    const json = await prisma.jsonData.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        name: true,
        content: true,
        createdAt: true,
      },
    });
    return NextResponse.json(json);
  } catch (error) {
    console.error("Error saving JsonData", error);
    return NextResponse.json({ error: "Error saving Json" }, { status: 400 });
  }
}