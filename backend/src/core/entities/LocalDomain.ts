export type GeoCoordinate = { 
    latitude: number; 
    longitude: number;
};

export type MapCoordinate = {
    x: number;
    y: number;
};

export interface LocalDomain{
    localId: string;
    instituicaoId: string;
    nome: string;
    tipo?: string | null;
    bloco?: string | null;

    coordenadas?: GeoCoordinate | null;
    mapaXY?: MapCoordinate | null;         
    acessivel: boolean;
}