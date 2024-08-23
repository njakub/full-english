import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request: NextRequest) {
  const [places] = await prisma.place.findMany();

  return NextResponse.json(places);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const placeData: any = {
    googleId: body.googleId,
    name: body.name,
    address: body.address,
    googleRating: body.googleRating,
    image: body.image,
  };

  const place = await prisma.place.create({
    data: placeData,
  });

  return NextResponse.json(place, { status: 201 });
}
