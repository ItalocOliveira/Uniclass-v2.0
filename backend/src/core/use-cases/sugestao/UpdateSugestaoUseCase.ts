import { NotFoundException } from "@nestjs/common";
import { UpdateSugestaoDto } from "src/core/repositories/dtos/sugestao/UpdateSugestaoDto";
import { ISugestaoRepository } from "src/core/repositories/ISugestaoRepository";

export class UpdateSugestaoUseCase {
    constructor(private sugestaoRepository: ISugestaoRepository){}

    /*
    *  1 - Apenas PROFESSOR e ADMIN podem modificar sugestões
    *  2 - PROFESSOR e ADMIN só podem modificar o campo de status da sugestão
    * 
    */

    async execute(instituicaoId: string, sugestaoId: string, data: UpdateSugestaoDto){
        const sugestao = await this.sugestaoRepository.findById(instituicaoId, sugestaoId);
        
        if(!sugestao) throw new NotFoundException('Sugestão não encontrada nesta instituição');

        return this.sugestaoRepository.updateById(instituicaoId, sugestaoId, data);
    }
}