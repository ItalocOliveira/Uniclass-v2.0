import { TipoAcesso } from "@prisma/client";

export interface CreateUsuarioDto {
  instituicaoId: string;
  nome: string;
  email: string;
  senha: string;
  tipoAcesso: TipoAcesso;
  curso?: string | null;
}
