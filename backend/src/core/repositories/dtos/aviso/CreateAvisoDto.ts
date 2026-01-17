import { avisoPrioridade } from "src/infra/database/generated/prisma/enums";

export interface CreateAvisoDto {
    instituicaoId: string;
    usuarioId: string;
    usuarioNome: string;
    titulo: string;
    prioridade: avisoPrioridade;

    cursoAlvo: string[];

    mensagem?: string | null;
    
}