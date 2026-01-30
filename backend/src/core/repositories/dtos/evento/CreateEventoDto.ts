import { eventoTipos } from "@prisma/client";

export interface CreateEventoDto {
    instituicaoId: string;
    titulo: string;
    data: Date; 
    tipo: eventoTipos;
    descricao?: string;
    localId?: string;
}

