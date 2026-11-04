/*
  Warnings:

  - A unique constraint covering the columns `[CNPJ]` on the table `Client` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "CPF" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Client_CNPJ_key" ON "Client"("CNPJ");
