import { IAvisoRepository } from "src/core/repositories/IAvisoRepository";


export class FindAvisoUseCase {
    constructor(private avisoRepository: IAvisoRepository){}

    /* 
    * 
    * 
    * 
    */

    async execute(instituicaoId: string, avisoId: string){
        return this.avisoRepository.findById(instituicaoId, avisoId);
    }
}