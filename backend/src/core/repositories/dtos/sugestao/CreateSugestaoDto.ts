import { MapCoordinate } from 'src/core/entities/SugestaoDomain';
import { sugestaoTipos, sugestaoStatus } from 'src/infra/database/generated/prisma/enums';

export interface CreateSugestaoDto {
  instituicaoId: string
  usuarioId: string
  titulo: string
  tipo: sugestaoTipos;
  status: sugestaoStatus;

  descricao?: string | null
  fotoUrl?: string | null

  mapaXY?: MapCoordinate | null;  
}

