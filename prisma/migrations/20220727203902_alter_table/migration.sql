/*
  Warnings:

  - You are about to drop the column `type` on the `Type` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Type_type_key` ON `Type`;

-- AlterTable
ALTER TABLE `Type` DROP COLUMN `type`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Type_name_key` ON `Type`(`name`);
