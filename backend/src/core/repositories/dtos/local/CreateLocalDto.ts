import { localTipos } from "@prisma/client";
import {MapCoordinate } from "../../../entities/LocalDomain";

export interface CreateLocalDto {
    instituicaoId: string;
    nome: string;
    tipo: localTipos;
    bloco?: string | null;

    mapaXY?: MapCoordinate | null;         
    acessivel?: boolean;
}