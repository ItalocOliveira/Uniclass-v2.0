export interface UsuarioDomain {
    usuarioId: string;
    instituicaoId: string;
    nome: string;
    email: string;           
    tipoAcesso?: string | null;  
    curso?: string | null;  
}