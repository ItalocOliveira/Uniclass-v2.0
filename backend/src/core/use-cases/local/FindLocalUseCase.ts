import { NotFoundException } from "@nestjs/common";
import { ILocalRepository } from "src/core/repositories/ILocalRepository";

export class FindLocalUseCase {
    constructor(private localRepository: ILocalRepository){}

    /* 
    *   1- Buscar local pertencente à instituição do usuário
    *   
    *   
    */

    async execute(instituicaoId: string, localId: string){
        const local = this.localRepository.findById(instituicaoId, localId);

        if (!local) throw new NotFoundException('Local não encontrado nesta instituição');

        return local;
    }

}