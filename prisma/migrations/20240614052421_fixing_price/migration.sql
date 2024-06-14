/*
  Warnings:

  - You are about to alter the column `price` on the `Sale` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Decimal`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer_name" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "price" DECIMAL NOT NULL
);
INSERT INTO "new_Sale" ("customer_name", "id", "price", "product") SELECT "customer_name", "id", "price", "product" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
