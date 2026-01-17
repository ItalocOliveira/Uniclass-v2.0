import { CreateSugestaoDto } from "src/core/repositories/dtos/sugestao/CreateSugestaoDto";
import { SugestaoDomain } from "src/core/entities/SugestaoDomain";
import { ISugestaoRepository } from "src/core/repositories/ISugestaoRepository";

export class CreateSugestaoUseCase {
    constructor(private sugestaoRepo: ISugestaoRepository){}

    async execute(input: CreateSugestaoDto): Promise<SugestaoDomain>{

        /*
        * 
        * 
        * 
        */
    
        return this.sugestaoRepo.create(input);
    }
}