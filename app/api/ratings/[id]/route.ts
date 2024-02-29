import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const rating = await prisma.rating.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      items: true, // this includes the items in the response
    },
  });

  if (!rating) {
    return NextResponse.json({ error: "Rating not found" }, { status: 404 });
  }

  return NextResponse.json(rating);
}
