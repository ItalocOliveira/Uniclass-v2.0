import { sugestaoTipos, sugestaoStatus} from "@prisma/client"

export interface SugestaoDomain {
  sugestaoId: string;
  instituicaoId: string;
  usuarioId: string;
  titulo: string;
  tipo: sugestaoTipos;
  status: sugestaoStatus

  descricao?: string | null;
  mapaXY?: MapCoordinate | null;
  fotoUrl?: string | null;

  dataCriacao: Date;
  dataAtualizacao: Date;
}

export type MapCoordinate = {
  x: number;
  y: number;
};
