/*
  Warnings:

  - You are about to drop the column `description` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `product` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer_name" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "price" REAL NOT NULL
);
INSERT INTO "new_Sale" ("customer_name", "id", "price") SELECT "customer_name", "id", "price" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
