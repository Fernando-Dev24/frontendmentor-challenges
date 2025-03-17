/*
  Warnings:

  - You are about to drop the column `user_id` on the `Tags` table. All the data in the column will be lost.
  - You are about to drop the `note_edits` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `note_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_notes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tag_id` to the `Notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Notes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_user_id_fkey";

-- DropForeignKey
ALTER TABLE "note_edits" DROP CONSTRAINT "note_edits_note_id_fkey";

-- DropForeignKey
ALTER TABLE "note_edits" DROP CONSTRAINT "note_edits_user_id_fkey";

-- DropForeignKey
ALTER TABLE "note_tags" DROP CONSTRAINT "note_tags_note_id_fkey";

-- DropForeignKey
ALTER TABLE "note_tags" DROP CONSTRAINT "note_tags_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "user_notes" DROP CONSTRAINT "user_notes_note_id_fkey";

-- DropForeignKey
ALTER TABLE "user_notes" DROP CONSTRAINT "user_notes_user_id_fkey";

-- AlterTable
ALTER TABLE "Notes" ADD COLUMN     "tag_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tags" DROP COLUMN "user_id";

-- DropTable
DROP TABLE "note_edits";

-- DropTable
DROP TABLE "note_tags";

-- DropTable
DROP TABLE "user_notes";

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "Tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
