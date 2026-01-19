export interface CreateSugestaoDto {
  instituicaoId: string
  usuarioId: string
  titulo: string

  descricao?: string | null
  tipo?: string | null
  status?: string | null
  fotoUrl?: string | null

  localizacao?: {
    latitude: number;
    longitude: number;
  } | null;
}
