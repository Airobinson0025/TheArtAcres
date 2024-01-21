/*
  Warnings:

  - Added the required column `address` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthday` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Account" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "birthday" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ActivatToken" (
    "id" SERIAL NOT NULL,
    "token" TEXT NOT NULL,
    "activatedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ActivatToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActivatToken_token_key" ON "ActivatToken"("token");

-- AddForeignKey
ALTER TABLE "ActivatToken" ADD CONSTRAINT "ActivatToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
