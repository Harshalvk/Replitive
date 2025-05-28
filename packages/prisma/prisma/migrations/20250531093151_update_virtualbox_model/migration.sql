/*
  Warnings:

  - Added the required column `visibility` to the `VirtualBox` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `type` on the `VirtualBox` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "VirtualBoxTypeEnum" AS ENUM ('REACT', 'NODE');

-- CreateEnum
CREATE TYPE "VirtualBoxVisibilityEnum" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "VirtualBox" ADD COLUMN     "visibility" "VirtualBoxVisibilityEnum" NOT NULL,
DROP COLUMN "type",
ADD COLUMN     "type" "VirtualBoxTypeEnum" NOT NULL;

-- DropEnum
DROP TYPE "VirtualBoxType";
