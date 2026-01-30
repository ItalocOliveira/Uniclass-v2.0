import { avisoPrioridade } from "@prisma/client";

export interface AvisoDomain {
    titulo: string;

    avisoId: string;     
    instituicaoId: string;
    
    cursoAlvo: string[];

    usuarioId: string;
    usuarioNome: string;
    mensagem?: string | null;
    prioridade: avisoPrioridade;

    dataCriacao: Date;
    dataAtualizacao: Date;
}