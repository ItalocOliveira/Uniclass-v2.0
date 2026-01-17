import { eventoTipos } from "src/infra/database/generated/prisma/enums";

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