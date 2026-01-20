import { eventoTipos } from "@prisma/client";

export interface EventoDomain {
    eventoId: string;
    instituicaoId: string;
    titulo: string;
    data: Date;

    tipo: eventoTipos;
    descricao?:string | null;
    localId?:string | null;

    dataCriacao: Date;
    dataAtualizacao: Date;
}