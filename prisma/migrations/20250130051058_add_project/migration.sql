-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "accountNumber" INTEGER NOT NULL,
    "accountName" VARCHAR(64) NOT NULL,
    "country" VARCHAR(64) NOT NULL,
    "receiver" VARCHAR(128) NOT NULL,
    "purpose" VARCHAR(512) NOT NULL,
    "decision" VARCHAR(64) NOT NULL,
    "income" INTEGER NOT NULL,
    "expense" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
