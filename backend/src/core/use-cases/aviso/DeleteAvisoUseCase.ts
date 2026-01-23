import { NotFoundException } from "@nestjs/common";
import { IAvisoRepository } from "src/core/repositories/IAvisoRepository";

export class DeleteAvisoUseCase {
    constructor(private avisoRepository: IAvisoRepository){}

    /* 
    * 
    * 
    * 
    */

    async execute(instituicaoId: string, avisoId: string){
        const aviso = await this.avisoRepository.findById(instituicaoId, avisoId);

        if(!aviso) throw new NotFoundException('Aviso não encontrado nesta instituição');

        return this.avisoRepository.deleteById(instituicaoId, avisoId)
    }
}