import { ILocalRepository } from "src/core/repositories/ILocalRepository";

export class FindAllLocaisUseCase {
    constructor(private localRepository: ILocalRepository){}

    async execute(instituicaoId: string) {
        /* 
        *   1- Buscar apenas locais pertencentes à instituição do usuário
        *   
        *   
        */
        return this.localRepository.findAllByInstituicao(instituicaoId);
    } 
}