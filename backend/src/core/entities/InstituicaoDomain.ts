export interface InstituicaoDomain {
    instituicaoId: string;
    nome: string;
    logoUrl: string;
    mapaUrl?: string | null;
    coordenadas?: GeoCoordinate | null;
}

export type GeoCoordinate = { 
    latitude: number; 
    longitude: number;
};