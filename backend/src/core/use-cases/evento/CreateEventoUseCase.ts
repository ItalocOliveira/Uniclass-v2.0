import { IEventoRepository } from 'src/core/repositories/IEventoRepository';
import { CreateEventoDto } from 'src/core/repositories/dtos/evento/CreateEventoDto';
import { EventoDomain } from 'src/core/entities/EventoDomain';

export class CreateEventoUseCase {
    constructor(private eventoRepo: IEventoRepository) {}

    async execute(input: CreateEventoDto): Promise<EventoDomain> {


        const eventoMesmoTitulo = await this.eventoRepo.findByTitulo(input.instituicaoId, input.titulo);
        if (eventoMesmoTitulo) {
            throw new Error('Já existe um evento com esse título nesta instituição.');
        }


        const eventoMesmoHorario = input.localId
            ? await this.eventoRepo.findByLocalAndData(input.localId, input.data)
            : null;

        if (eventoMesmoHorario) {
            throw new Error('Já existe um evento nesse local e horário nesta instituição.');
        }

        return this.eventoRepo.create(input);
    }
}
