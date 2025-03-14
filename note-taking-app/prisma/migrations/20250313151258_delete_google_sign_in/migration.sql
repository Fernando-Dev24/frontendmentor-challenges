/*
  Warnings:

  - You are about to drop the column `google_oauth_id` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `is_google_authenticated` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "google_oauth_id",
DROP COLUMN "is_google_authenticated";
