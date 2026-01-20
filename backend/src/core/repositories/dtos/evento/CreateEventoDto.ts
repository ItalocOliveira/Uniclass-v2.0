export interface CreateEventoDto {
    instituicaoId: string;
    titulo: string;
    data: Date;

    tipo?: string | null;
    descricao?:string | null;
    localId?:string | null;
}