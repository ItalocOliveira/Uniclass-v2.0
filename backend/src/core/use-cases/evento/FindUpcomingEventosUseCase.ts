import { IEventoRepository } from "src/core/repositories/IEventoRepository";

export class FindUpcomingEventosUseCase {
    constructor(private eventoRepository: IEventoRepository) {}

    async execute(instituicaoId: string) {
        return this.eventoRepository.findAllUpcoming(instituicaoId);
    }
}