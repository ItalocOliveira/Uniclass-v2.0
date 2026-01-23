-- DropForeignKey
ALTER TABLE "locais" DROP CONSTRAINT "locais_instituicao_id_fkey";

-- DropForeignKey
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_instituicao_id_fkey";

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE CASCADE ON UPDATE CASCADE;
