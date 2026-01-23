import { TipoAcesso } from "@prisma/client";

export interface UsuarioDomain {
    usuarioId: string;
    instituicaoId: string;
    nome: string;
    email: string;         
    tipoAcesso: TipoAcesso;  
    curso?: string | null;  

    dataCriacao: Date;
    dataAtualizacao: Date;
}