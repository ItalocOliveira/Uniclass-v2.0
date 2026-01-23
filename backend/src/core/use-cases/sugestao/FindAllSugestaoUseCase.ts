import { CreateSugestaoDto } from "src/core/repositories/dtos/sugestao/CreateSugestaoDto";
import { SugestaoDomain } from "src/core/entities/SugestaoDomain";
import { ISugestaoRepository } from "src/core/repositories/ISugestaoRepository";
import { NotFoundException } from "@nestjs/common";

export class FindAllSugestaoUseCase {
    constructor(private sugestaoRepo: ISugestaoRepository){}

    async execute(instituicaoId: string): Promise<SugestaoDomain[]>{

        /*
        *  1 - ADMIN e PROFESSOR podem listar todas as sugestões
        *  2 - ALUNO só pode ver as próprias sugestões
        * 
        */
    
        const sugestao = this.sugestaoRepo.findAll(instituicaoId);
        if (!sugestao) throw new NotFoundException('Sugestão não encontrada');

        return sugestao;
    }   
}