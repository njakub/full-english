import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const review = await prisma.review.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      items: true, // this includes the items in the response
    },
  });

  if (!review) {
    return NextResponse.json({ error: "review not found" }, { status: 404 });
  }

  return NextResponse.json(review);
}
