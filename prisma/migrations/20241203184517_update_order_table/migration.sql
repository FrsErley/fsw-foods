/*
  Warnings:

  - You are about to drop the column `deliveryFree` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `subTotalPrice` on the `Order` table. All the data in the column will be lost.
  - Added the required column `deliveryFee` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subtotalPrice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deliveryFree",
DROP COLUMN "subTotalPrice",
ADD COLUMN     "deliveryFee" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "subtotalPrice" DECIMAL(10,2) NOT NULL;
