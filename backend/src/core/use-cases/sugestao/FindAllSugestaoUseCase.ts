import { CreateSugestaoDto } from "src/core/repositories/dtos/sugestao/CreateSugestaoDto";
import { SugestaoDomain } from "src/core/entities/SugestaoDomain";
import { ISugestaoRepository } from "src/core/repositories/ISugestaoRepository";

export class FindAllSugestaoUseCase {
    constructor(private sugestaoRepo: ISugestaoRepository){}

    async execute(instituicaoId: string): Promise<SugestaoDomain[]>{

        /*
        *  
        * 
        * 
        */
    
        return this.sugestaoRepo.findAll(instituicaoId);
    }   
}