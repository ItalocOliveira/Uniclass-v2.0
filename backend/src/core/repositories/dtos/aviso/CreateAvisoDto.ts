export interface CreateAvisoDto {
    instituicaoId: string;
    titulo: string;
    
    cursoAlvo: string[];

    usuarioId?: string | null;
    usuarioNome?: string | null;
    mensagem?: string | null;
    prioridade?: string | null;
}