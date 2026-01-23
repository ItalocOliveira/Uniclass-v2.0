import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { EventosController } from './eventos.controller';
import { CreateEventoUseCase } from 'src/core/use-cases/evento/CreateEventoUseCase';
import { FindUpcomingEventosUseCase } from 'src/core/use-cases/evento/FindUpcomingEventosUseCase';
import { FindEventoUseCase } from 'src/core/use-cases/evento/FindEventoUseCase';
import { UpdateEventoUseCase } from 'src/core/use-cases/evento/UpdateEventoUseCase';
import { DeleteEventoUseCase } from 'src/core/use-cases/evento/DeleteEventoUseCase';

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [EventosController],
    providers: [
        {
            provide: CreateEventoUseCase,
            useFactory: (repository) => new CreateEventoUseCase(repository),
            inject: ['IEventoRepository'],
        },
        {
            provide: FindUpcomingEventosUseCase,
            useFactory: (repository) => new FindUpcomingEventosUseCase(repository),
            inject: ['IEventoRepository'],
        },
        {
            provide: FindEventoUseCase,
            useFactory: (repository) => new FindEventoUseCase(repository),
            inject: ['IEventoRepository'],
        },
        {
            provide: UpdateEventoUseCase,
            useFactory: (repository) => new UpdateEventoUseCase(repository),
            inject: ['IEventoRepository'],
        },
        {
            provide: DeleteEventoUseCase,
            useFactory: (repository) => new DeleteEventoUseCase(repository),
            inject: ['IEventoRepository'],
        },
    ],
})
export class EventosModule {}
