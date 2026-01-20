import { MapCoordinate } from 'src/core/entities/SugestaoDomain';
import { sugestaoTipos, sugestaoStatus } from '@prisma/client'

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

