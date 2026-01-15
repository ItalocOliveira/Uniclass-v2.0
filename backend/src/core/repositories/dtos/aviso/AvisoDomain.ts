export interface AvisoDomain {
    titulo: string | null;

    avisoId: string;     
    instituicaoId: string;
    
    cursoAlvo: string[];

    usuarioId?: string | null;
    usuarioNome?: string | null;
    mensagem?: string | null;
    prioridade?: string | null;

    dataCriacao: Date;
}