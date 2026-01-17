import { TipoAcesso } from "src/infra/database/generated/prisma/enums";

export interface CreateUsuarioDto {
  instituicaoId: string;
  nome: string;
  email: string;
  senha: string;
  tipoAcesso: TipoAcesso;
  curso?: string | null;
}
