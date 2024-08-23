/*
  Warnings:

  - You are about to drop the column `ratingId` on the `Item` table. All the data in the column will be lost.
  - Added the required column `reviewId` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `placeId` on the `Review` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_ratingId_fkey";

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "ratingId",
ADD COLUMN     "reviewId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "placeId",
ADD COLUMN     "placeId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Place" (
    "id" SERIAL NOT NULL,
    "googleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "googleRating" DOUBLE PRECISION NOT NULL,
    "image" TEXT,

    CONSTRAINT "Place_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Place_googleId_key" ON "Place"("googleId");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_placeId_fkey" FOREIGN KEY ("placeId") REFERENCES "Place"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
