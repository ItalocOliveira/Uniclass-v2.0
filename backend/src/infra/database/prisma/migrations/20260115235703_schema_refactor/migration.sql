/*
  Warnings:

  - You are about to drop the column `data_criacao` on the `avisos` table. All the data in the column will be lost.
  - You are about to drop the column `data_criacao` on the `sugestoes` table. All the data in the column will be lost.
  - You are about to drop the `Local` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email,instituicao_id]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `update_at` to the `avisos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prioridade` to the `avisos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `instituicoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_at` to the `sugestoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `sugestoes` table without a default value. This is not possible if the table is not empty.
  - Made the column `status` on table `sugestoes` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `senha_hash` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo_acesso` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoAcesso" AS ENUM ('ADMIN', 'PROFESSOR', 'ALUNO');

-- CreateEnum
CREATE TYPE "localTipos" AS ENUM ('BLOCO', 'COMERCIO', 'BIBLIOTECA', 'REITORIA', 'COORDENACAO', 'PRACA', 'AUDITORIO');

-- CreateEnum
CREATE TYPE "sugestaoTipos" AS ENUM ('CONSERTO', 'REPOSICAO_MATERIAL', 'INSTALACAO', 'ATUALIZACAO', 'SUPORTE_TECNICO');

-- CreateEnum
CREATE TYPE "eventoTipos" AS ENUM ('PALESTRA', 'FEIRA', 'MOCHILAO', 'WORKSHOP', 'SEMINARIO', 'MEETUP', 'HACKATON');

-- CreateEnum
CREATE TYPE "avisoPrioridade" AS ENUM ('LEVE', 'MODERADO', 'IMPORTANTE', 'URGENTE');

-- DropForeignKey
ALTER TABLE "Local" DROP CONSTRAINT "Local_instituicao_id_fkey";

-- DropForeignKey
ALTER TABLE "eventos" DROP CONSTRAINT "eventos_local_id_fkey";

-- DropIndex
DROP INDEX "usuarios_email_key";

-- AlterTable
ALTER TABLE "avisos" DROP COLUMN "data_criacao",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "prioridade",
ADD COLUMN     "prioridade" "avisoPrioridade" NOT NULL;

-- AlterTable
ALTER TABLE "eventos" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "eventoTipos" NOT NULL;

-- AlterTable
ALTER TABLE "instituicoes" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "sugestoes" DROP COLUMN "data_criacao",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "tipo",
ADD COLUMN     "tipo" "sugestaoTipos" NOT NULL,
ALTER COLUMN "status" SET NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "senha_hash" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "tipo_acesso",
ADD COLUMN     "tipo_acesso" "TipoAcesso" NOT NULL;

-- DropTable
DROP TABLE "Local";

-- CreateTable
CREATE TABLE "locais" (
    "local_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "localTipos" NOT NULL,
    "bloco" TEXT NOT NULL,
    "coordenadas" geometry(Point, 4326),
    "mapa_xy" JSONB,
    "acessivel" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "locais_pkey" PRIMARY KEY ("local_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_instituicao_id_key" ON "usuarios"("email", "instituicao_id");

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais"("local_id") ON DELETE SET NULL ON UPDATE CASCADE;
