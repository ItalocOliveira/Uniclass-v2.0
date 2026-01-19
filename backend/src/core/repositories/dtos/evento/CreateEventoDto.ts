import { eventoTipos } from "src/infra/database/generated/prisma/enums";

export interface CreateEventoDto {
    instituicaoId: string;
    titulo: string;
    data: Date; 
    tipo: eventoTipos;
    descricao?: string;
    localId?: string;
}

