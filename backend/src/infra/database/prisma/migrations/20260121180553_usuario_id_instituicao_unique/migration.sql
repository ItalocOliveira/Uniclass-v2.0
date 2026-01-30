/*
  Warnings:

  - A unique constraint covering the columns `[usuario_id,instituicao_id]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "usuarios_email_instituicao_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_usuario_id_instituicao_id_key" ON "usuarios"("usuario_id", "instituicao_id");
