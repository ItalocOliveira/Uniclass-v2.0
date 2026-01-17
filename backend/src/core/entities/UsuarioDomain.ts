import { TipoAcesso } from "src/infra/database/generated/prisma/enums";

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