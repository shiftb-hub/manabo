-- CreateTable
CREATE TABLE "public"."learning_styles" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "characteristics" TEXT[],
    "recommendations" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "learning_styles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."user_learning_styles" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "learning_style_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_learning_styles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "learning_styles_type_key" ON "public"."learning_styles"("type");

-- CreateIndex
CREATE UNIQUE INDEX "user_learning_styles_user_id_key" ON "public"."user_learning_styles"("user_id");

-- AddForeignKey
ALTER TABLE "public"."user_learning_styles" ADD CONSTRAINT "user_learning_styles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."user_learning_styles" ADD CONSTRAINT "user_learning_styles_learning_style_id_fkey" FOREIGN KEY ("learning_style_id") REFERENCES "public"."learning_styles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
