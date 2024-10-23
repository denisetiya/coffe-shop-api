/*
  Warnings:

  - You are about to drop the column `recomended` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "recomended",
ADD COLUMN     "recommended" BOOLEAN NOT NULL DEFAULT false;
