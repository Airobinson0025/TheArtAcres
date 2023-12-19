/*
  Warnings:

  - You are about to drop the `Art` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Art" DROP CONSTRAINT "Art_ownerId_fkey";

-- DropTable
DROP TABLE "Art";
