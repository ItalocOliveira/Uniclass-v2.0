import { NotFoundException } from "@nestjs/common";
import { ILocalRepository } from "src/core/repositories/ILocalRepository";

export class DeleteLocalUseCase {
    constructor(private localRepository: ILocalRepository){}

    async execute(instituicaoId: string, localId: string){
        const local = this.localRepository.findById(instituicaoId, localId);

        if(!local) throw new NotFoundException('Local não encontrado nesta instituição');

        return this.localRepository.deleteById(instituicaoId, localId);
    }
    
}