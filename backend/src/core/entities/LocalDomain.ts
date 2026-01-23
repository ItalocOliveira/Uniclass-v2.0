import { localTipos } from "@prisma/client";

export type MapCoordinate = {
    x: number;
    y: number;
};

export interface LocalDomain{
    localId: string;
    instituicaoId: string;
    nome: string;
    tipo: localTipos;
    acessivel: boolean;

    bloco?: string | null;
    mapaXY?: MapCoordinate | null;         
    
}