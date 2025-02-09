//get review by user id

import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { email: string } }
) {
  const user = await prisma.user.findUnique({
    where: {
      email: params.email,
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const reviews = await prisma.review.findMany({
    where: {
      userId: user.id,
    },
    include: {
      place: true, // this includes the items in the response
    },
  });

  return NextResponse.json(reviews);
}
