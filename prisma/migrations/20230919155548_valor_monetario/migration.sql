/*
  Warnings:

  - You are about to alter the column `valor` on the `Transacao` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "Transacao" ALTER COLUMN "valor" SET DATA TYPE DECIMAL(10,2);
