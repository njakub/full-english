import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const place = await prisma.place.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!place) {
    return NextResponse.json({ error: "place not found" }, { status: 404 });
  }

  return NextResponse.json(place);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const placeData: any = {
    id: Number(params.id),
    googleId: body.googleId,
    name: body.name,
    address: body.address,
    googleRating: body.googleRating,
    image: body.image,
  };

  const place = await prisma.place.update({
    where: {
      id: Number(params.id),
    },
    data: placeData,
  });

  return NextResponse.json(place);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await prisma.place.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({ success: true });
}
