import { GeoCoordinate, MapCoordinate } from "./LocalDomain";

export interface CreateLocalDto {
    instituicaoId: string;
    nome: string;
    tipo?: string | null;
    bloco?: string | null;

    coordenadas?: GeoCoordinate | null;
    mapaXY?: MapCoordinate | null;         
    acessivel: boolean;
}