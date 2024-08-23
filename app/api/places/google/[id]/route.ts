import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const place = await prisma.place.findUnique({
    where: {
      googleId: params.id,
    },
  });

  if (!place) {
    return NextResponse.json({ error: "place not found" }, { status: 404 });
  }

  return NextResponse.json(place);
}
