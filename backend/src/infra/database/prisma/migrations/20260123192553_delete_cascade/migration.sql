-- DropForeignKey
ALTER TABLE "avisos" DROP CONSTRAINT "avisos_instituicao_id_fkey";

-- DropForeignKey
ALTER TABLE "avisos" DROP CONSTRAINT "avisos_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "eventos" DROP CONSTRAINT "eventos_instituicao_id_fkey";

-- DropForeignKey
ALTER TABLE "locais" DROP CONSTRAINT "locais_instituicao_id_fkey";

-- DropForeignKey
ALTER TABLE "sugestoes" DROP CONSTRAINT "sugestoes_instituicao_id_fkey";

-- DropForeignKey
ALTER TABLE "sugestoes" DROP CONSTRAINT "sugestoes_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_instituicao_id_fkey";

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sugestoes" ADD CONSTRAINT "sugestoes_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sugestoes" ADD CONSTRAINT "sugestoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE CASCADE ON UPDATE CASCADE;
