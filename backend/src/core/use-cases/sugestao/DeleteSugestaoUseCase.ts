import { NotFoundException } from "@nestjs/common";
import { ISugestaoRepository } from "src/core/repositories/ISugestaoRepository";

export class DeleteSugestaoUseCase {
    constructor(private sugestaoRepository: ISugestaoRepository){}

    /*
    *  
    *
    * 
    */

    async execute(instituicaoId: string, sugestaoId: string){
        const sugestao = await this.sugestaoRepository.findById(instituicaoId, sugestaoId);

        if(!sugestao) throw new NotFoundException('Sugestão não encontrada nesta instituição');
        
        return this.sugestaoRepository.deleteById(instituicaoId, sugestaoId);
    }
}