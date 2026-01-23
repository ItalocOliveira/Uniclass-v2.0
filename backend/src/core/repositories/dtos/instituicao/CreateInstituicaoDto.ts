import { GeoCoordinate } from "src/core/entities/InstituicaoDomain";

export interface CreateInstituicaoDto {
    nome: string;
    logoUrl: string;
    mapaUrl?: string | null;
    coordenadas?: GeoCoordinate | null;
}