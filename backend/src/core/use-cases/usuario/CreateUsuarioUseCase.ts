import { CreateUsuarioDto } from "src/core/repositories/dtos/usuario/CreateUsuarioDto";
import { UsuarioDomain } from "src/core/entities/UsuarioDomain";
import { IUsuarioRepository } from "src/core/repositories/IUsuarioRepository";

export class CreateUsuarioUseCase {
    constructor(private usuarioRepo: IUsuarioRepository){}

    async execute(input: CreateUsuarioDto): Promise<UsuarioDomain>{
        
        /*
        *   1- Uma instituição não pode ter mais de 1 usuario com o mesmo email
        */

        const exist = await this.usuarioRepo.findByEmail(input.instituicaoId, input.email);

        if(exist) throw new Error('Este email já está em uso nesta instituição.');

        return this.usuarioRepo.create(input);
    }
}