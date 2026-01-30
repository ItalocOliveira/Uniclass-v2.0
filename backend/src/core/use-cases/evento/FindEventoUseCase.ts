import { IEventoRepository } from "src/core/repositories/IEventoRepository";

export class FindEventoUseCase {
    constructor(private eventoRepository: IEventoRepository){}

    async execute(instituicaoId: string, eventoId: string){
        return this.eventoRepository.findById(instituicaoId, eventoId);
    }
}