import { CreateUsuarioDto } from "src/core/repositories/dtos/usuario/CreateUsuarioDto";
import { UsuarioDomain } from "src/core/entities/UsuarioDomain";
import { IUsuarioRepository } from "src/core/repositories/IUsuarioRepository";
import * as bcrypt from 'bcrypt';

export class CreateUsuarioUseCase {
    constructor(private usuarioRepo: IUsuarioRepository){}

    async execute(input: CreateUsuarioDto): Promise<UsuarioDomain>{
        
        /*
        *   1- Uma instituição não pode ter mais de 1 usuario com o mesmo email
        *   2- O usuário deve ter a senha criptografada
        */

        const exist = await this.usuarioRepo.findByEmail(input.instituicaoId, input.email);

        if(exist) throw new Error('Este email já está em uso por outro usuário nesta instituição.');

        const senhaHash = await bcrypt.hash(input.senha, 10);

        const dataToCreate = {
            ...input,
            senha_hash: senhaHash
        }

        return this.usuarioRepo.create(dataToCreate);
    }
}