import { IAvisoRepository } from "src/core/repositories/IAvisoRepository";

export class FindAvisosByCursoUseCase {
    constructor(private avisoRepository: IAvisoRepository){}

    async execute(instituicaoId: string, curso: string){
        return this.avisoRepository.findAllByCurso(instituicaoId, curso);
    }
}