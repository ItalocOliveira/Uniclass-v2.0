import { IEventoRepository } from 'src/core/repositories/IEventoRepository';
import { CreateEventoDto } from 'src/core/repositories/dtos/evento/CreateEventoDto';
import { EventoDomain } from 'src/core/entities/EventoDomain';

export class CreateEventoUseCase {
    constructor(private eventoRepo: IEventoRepository) {}

    async execute(input: CreateEventoDto): Promise<EventoDomain> {

        if (input.data < new Date()) {
            throw new Error("Não é possível criar eventos no passado.");
        }

        const eventoMesmoTitulo = input.titulo ? await this.eventoRepo.findByTitulo(input.instituicaoId, input.titulo) : null;
        if (eventoMesmoTitulo) {
            throw new Error('Já existe um evento com esse título na instituição.');
        }

        const eventoMesmoHorario = input.localId ? await this.eventoRepo.findByLocalAndData(input.instituicaoId, input.localId, input.data) : null;
        if (eventoMesmoHorario) {
            throw new Error('Já existe um evento nesse local e horário nesta instituição.');
        }

        return this.eventoRepo.create(input);
    }
}
