import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export async function GET(request: NextRequest) {
  const reviews = await prisma.review.findMany();

  return NextResponse.json(reviews);
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

  const reviewData: any = {
    comment: body.comment,
    rating: parseFloat(body.rating),
    type: body.type,
    User: {
      connect: {
        id: user.id,
      },
    },
    place: {
      connect: {
        id: body.placeId, // replace this with the actual place ID
      },
    },
    ...(body.imageId && { imageId: body.imageId }),
  };

  if (body.items && body.items.length > 0) {
    reviewData.items = {
      create: body.items.map((item: any) => ({
        name: item.name,
        rating: item.rating,
        type: item.type,
        comment: item.comment,
      })),
    };
  }

  const review = await prisma.review.create({
    data: reviewData,
    include: {
      items: true,
    },
  });

  return NextResponse.json(review, { status: 201 });
}
