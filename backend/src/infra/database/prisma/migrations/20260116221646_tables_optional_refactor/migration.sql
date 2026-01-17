/*
  Warnings:

  - You are about to drop the column `update_at` on the `avisos` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `coordenadas` on the `locais` table. All the data in the column will be lost.
  - You are about to drop the column `localizacao` on the `sugestoes` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `sugestoes` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `avisos` table without a default value. This is not possible if the table is not empty.
  - Made the column `usuario_id` on table `avisos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `usuario_nome` on table `avisos` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Made the column `logo_url` on table `instituicoes` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updated_at` to the `sugestoes` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `sugestoes` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "sugestaoStatus" AS ENUM ('PENDENTE', 'EM_ATENDIMENTO', 'RESOLVIDO');

-- DropForeignKey
ALTER TABLE "avisos" DROP CONSTRAINT "avisos_usuario_id_fkey";

-- AlterTable
ALTER TABLE "avisos" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "usuario_id" SET NOT NULL,
ALTER COLUMN "usuario_nome" SET NOT NULL;

-- AlterTable
ALTER TABLE "eventos" DROP COLUMN "update_at",
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "instituicoes" ADD COLUMN     "coordenadas" geometry(Point, 4326),
ALTER COLUMN "logo_url" SET NOT NULL;

-- AlterTable
ALTER TABLE "locais" DROP COLUMN "coordenadas",
ALTER COLUMN "acessivel" DROP NOT NULL,
ALTER COLUMN "acessivel" SET DEFAULT true;

-- AlterTable
ALTER TABLE "sugestoes" DROP COLUMN "localizacao",
DROP COLUMN "update_at",
ADD COLUMN     "mapa_xy" JSONB,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "sugestaoStatus" NOT NULL;

-- AddForeignKey
ALTER TABLE "avisos" ADD CONSTRAINT "avisos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("usuario_id") ON DELETE RESTRICT ON UPDATE CASCADE;
