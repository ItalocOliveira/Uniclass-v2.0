-- CreateTable
CREATE TABLE "instituicoes" (
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "logo_url" TEXT,
    "mapa_url" TEXT,

    CONSTRAINT "instituicoes_pkey" PRIMARY KEY ("instituicao_id")
);

-- CreateTable
CREATE TABLE "Local" (
    "local_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT,
    "bloco" TEXT,
    "coordenadas" point,
    "mapa_xy" JSONB,
    "acessivel" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Local_pkey" PRIMARY KEY ("local_id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "usuario_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tipo_acesso" TEXT,
    "curso" TEXT,

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
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "prioridade" TEXT,
    "curso_alvo" TEXT[],

    CONSTRAINT "avisos_pkey" PRIMARY KEY ("aviso_id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "evento_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT,
    "descricao" TEXT,
    "local_id" UUID,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("evento_id")
);

-- CreateTable
CREATE TABLE "sugestoes" (
    "sugestao_id" UUID NOT NULL,
    "instituicao_id" UUID NOT NULL,
    "usuario_id" UUID NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "tipo" TEXT,
    "status" TEXT,
    "localizacao" point,
    "foto_url" TEXT,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sugestoes_pkey" PRIMARY KEY ("sugestao_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "Local" ADD CONSTRAINT "Local_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "Local"("local_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sugestoes" ADD CONSTRAINT "sugestoes_instituicao_id_fkey" FOREIGN KEY ("instituicao_id") REFERENCES "instituicoes"("instituicao_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sugestoes" ADD CONSTRAINT "sugestoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;
