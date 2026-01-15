import { AvisoDomain } from "src/core/repositories/dtos/aviso/AvisoDomain";
import { CreateAvisoDto } from "src/core/repositories/dtos/aviso/CreateAvisoDto";
import { IAvisoRepository } from "src/core/repositories/IAvisoRepository";

export class CreateAvisoUseCase {
    constructor(private avisoRepo: IAvisoRepository){}

    async execute(input: CreateAvisoDto): Promise<AvisoDomain>{

        /* 
        *   1- Uma instituição não ter mais de 1 aviso com o mesmo titulo
        * 
        * 
        */

        const exist = await this.avisoRepo.findByTitulo(input.instituicaoId, input.titulo);

        if(exist) throw new Error('Um aviso com este titulo já foi publicado.');

        return this.avisoRepo.create(input);
    }
}