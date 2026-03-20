-- CreateTable
CREATE TABLE "student_hrd_tb" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "student_hrd_tb_id_key" ON "student_hrd_tb"("id");
