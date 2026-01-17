import { eventoTipos } from "src/infra/database/generated/prisma/enums";

export interface CreateEventoDto {
    instituicaoId: string;
    titulo: string;
    data: string; 
    tipo: eventoTipos;
    descricao?: string;
    localId?: string;
}

