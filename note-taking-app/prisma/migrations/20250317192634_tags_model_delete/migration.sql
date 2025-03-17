/*
  Warnings:

  - You are about to drop the column `tag_id` on the `Notes` table. All the data in the column will be lost.
  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Notes" DROP CONSTRAINT "Notes_tag_id_fkey";

-- AlterTable
ALTER TABLE "Notes" DROP COLUMN "tag_id",
ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "Tags";
