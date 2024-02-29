import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request: NextRequest) {
  const ratings = await prisma.rating.findMany();

  return NextResponse.json(ratings);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  // const validation = schema.safeParse(body);
  // if (!validation.success)
  //   return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({
    where: {
      email: body.userEmail,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const ratingData: any = {
    comment: body.comment,
    rating: parseInt(body.rating),
    type: body.type,
    placeId: body.placeId,
    User: {
      connect: {
        id: user.id,
      },
    },
  };

  if (body.items && body.items.length > 0) {
    ratingData.items = {
      create: body.items.map((item: any) => ({
        name: item.name,
        rating: item.rating,
        type: item.type,
        comment: item.comment,
      })),
    };
  }

  const rating = await prisma.rating.create({
    data: ratingData,
    include: {
      items: true,
    },
  });

  return NextResponse.json(rating, { status: 201 });
}
