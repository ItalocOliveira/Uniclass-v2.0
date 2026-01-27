import { CreateInstituicaoDto } from "src/core/repositories/dtos/instituicao/CreateInstituicaoDto";
import { IInstituicaoRepository } from "src/core/repositories/IInstituicaoRepository";

export class CreateInstituicaoUseCase {
    constructor(private instituicaoRepo: IInstituicaoRepository){}

    async execute(input: CreateInstituicaoDto){
        /*
        *   1- Não pode haver mais de 1 instituição com o mesmo nome
        *   
        * 
        */

        const exist = await this.instituicaoRepo.findByNome(input.nome);

        if(exist) throw new Error('Esta instituição já está cadastrada no Uniclass.');

        return this.instituicaoRepo.create(input);
    }
}