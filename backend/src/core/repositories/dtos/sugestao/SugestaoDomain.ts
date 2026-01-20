export interface SugestaoDomain {
  sugestaoId: string
  instituicaoId: string
  usuarioId: string
  titulo: string
  descricao?: string | null
  tipo?: string | null
  status?: string | null
  localizacao?: any | null
  fotoUrl?: string | null
  dataCriacao: Date
}
