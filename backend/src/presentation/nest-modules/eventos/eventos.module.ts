import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { EventosController } from './eventos.controller';
import { CreateEventoUseCase } from 'src/core/use-cases/evento/CreateEventoUseCase';
import { FindUpcomingEventosUseCase } from 'src/core/use-cases/evento/FindUpcomingEventosUseCase';

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
    ],
})
export class EventosModule {}
