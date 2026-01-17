-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

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

-- CreateTable
CREATE TABLE "instituicoes" (
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "logo_url" TEXT,
    "mapa_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "instituicoes_pkey" PRIMARY KEY ("instituicao_id")
);

-- CreateTable
CREATE TABLE "locais" (
    "local_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" "localTipos" NOT NULL,
    "bloco" TEXT,
    "coordenadas" geometry(Point, 4326),
    "mapa_xy" JSONB,
    "acessivel" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "locais_pkey" PRIMARY KEY ("local_id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "usuario_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha_hash" TEXT NOT NULL,
    "tipo_acesso" "TipoAcesso" NOT NULL,
    "curso" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("usuario_id")
);

-- CreateTable
CREATE TABLE "avisos" (
    "aviso_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "usuario_id" UUID,
    "usuario_nome" TEXT,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT,
    "prioridade" "avisoPrioridade" NOT NULL,
    "curso_alvo" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "avisos_pkey" PRIMARY KEY ("aviso_id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "evento_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "tipo" "eventoTipos" NOT NULL,
    "descricao" TEXT,
    "local_id" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("evento_id")
);

-- CreateTable
CREATE TABLE "sugestoes" (
    "sugestao_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "usuario_id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "tipo" "sugestaoTipos" NOT NULL,
    "status" TEXT NOT NULL,
    "localizacao" geometry(Point, 4326),
    "foto_url" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sugestoes_pkey" PRIMARY KEY ("sugestao_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_instituicao_id_key" ON "usuarios"("email", "instituicao_id");

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais"("local_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sugestoes" ADD CONSTRAINT "sugestoes_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sugestoes" ADD CONSTRAINT "sugestoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;
