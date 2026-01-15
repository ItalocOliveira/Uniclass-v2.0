export interface CreateUsuarioDto {
  instituicaoId: string
  nome: string
  email: string
  tipoAcesso?: string | null;
  curso?: string | null;
}
