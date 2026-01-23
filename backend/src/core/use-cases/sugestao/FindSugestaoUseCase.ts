import { NotFoundException } from "@nestjs/common";
import { SugestaoDomain } from "src/core/entities/SugestaoDomain";
import { ISugestaoRepository } from "src/core/repositories/ISugestaoRepository";

export class FindSugestaoUseCase {
    constructor(private sugestaoRepo: ISugestaoRepository){}

    /*
    * 
    * 
    * 
    */

    async execute(instituicaoId: string, sugestaoId: string): Promise<SugestaoDomain>{
        const sugestao = await this.sugestaoRepo.findById(instituicaoId, sugestaoId);
        if(!sugestao) throw new NotFoundException('Sugestão não encontrada');
        
        return sugestao;
    }
}