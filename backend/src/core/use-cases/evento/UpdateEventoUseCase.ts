import { NotFoundException } from "@nestjs/common";
import { UpdateEventoDto } from "src/core/repositories/dtos/evento/UpdateEventoDto";
import { IEventoRepository } from "src/core/repositories/IEventoRepository";

export class UpdateEventoUseCase {
    constructor(private eventoRepository: IEventoRepository){}

    /* 
    *   1- Apenas ADMINS podem modificar eventos
    *   2- ADMINS podem moficiar apenas eventos pertencentes a sua instituição
    *   
    */

    async execute(instituicaoId: string, eventoId: string, data: UpdateEventoDto){
        const evento = await this.eventoRepository.findById(instituicaoId, eventoId);

        if(!evento) throw new NotFoundException('Evento não encontrado nesta instituição');

        return await this.eventoRepository.updateById(instituicaoId, eventoId, data);
    }
}