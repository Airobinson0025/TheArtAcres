/*
  Warnings:

  - You are about to drop the `ActivatToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActivatToken" DROP CONSTRAINT "ActivatToken_userId_fkey";

-- DropTable
DROP TABLE "ActivatToken";
