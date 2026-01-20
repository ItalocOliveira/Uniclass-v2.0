import { avisoPrioridade } from "@prisma/client";

export interface CreateAvisoDto {
    instituicaoId: string;
    usuarioId: string;
    usuarioNome: string;
    titulo: string;
    prioridade: avisoPrioridade;

    cursoAlvo: string[];

    mensagem?: string | null;
    
}