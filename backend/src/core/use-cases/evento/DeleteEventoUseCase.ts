import { NotFoundException } from "@nestjs/common";
import { IEventoRepository } from "src/core/repositories/IEventoRepository";

export class DeleteEventoUseCase {
    constructor(private eventoRepository: IEventoRepository){}

    async execute(instituicaoId: string, eventoId: string){
        const evento = await this.eventoRepository.findById(instituicaoId, eventoId);

        if(!evento) throw new NotFoundException('Evento não encontrado nesta instituição');
        
        return this.eventoRepository.deleteById(instituicaoId, eventoId);
    }
}