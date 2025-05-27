-- CreateEnum
CREATE TYPE "VirtualBoxType" AS ENUM ('REACT', 'NODE');

-- CreateTable
CREATE TABLE "VirtualBox" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "VirtualBoxType" NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "VirtualBox_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VirtualBox" ADD CONSTRAINT "VirtualBox_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
