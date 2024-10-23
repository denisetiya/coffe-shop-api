-- CreateTable
CREATE TABLE "User" (
    "id" STRING NOT NULL,
    "username" STRING NOT NULL,
    "email" STRING NOT NULL,
    "password" STRING NOT NULL,
    "picture" STRING,
    "refreshToken" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "picture" STRING,
    "price" INT4 NOT NULL,
    "star" FLOAT8,
    "category" STRING NOT NULL,
    "discount" FLOAT8,
    "recommended" BOOL NOT NULL DEFAULT false,
    "description" STRING,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
