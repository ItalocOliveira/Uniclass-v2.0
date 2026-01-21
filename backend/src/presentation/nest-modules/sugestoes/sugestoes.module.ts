import { Module } from '@nestjs/common';
import { SugestoesController } from './sugestoes.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { CreateSugestaoUseCase } from 'src/core/use-cases/sugestao/CreateSugestaoUseCase';
import { FindAllSugestaoUseCase } from 'src/core/use-cases/sugestao/FindAllSugestaoUseCase';

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [SugestoesController],
    providers: [
        {
        provide: CreateSugestaoUseCase,
        useFactory: (repository) => new CreateSugestaoUseCase(repository),
        inject: ['ISugestaoRepository']
        },
        {
        provide: FindAllSugestaoUseCase,
        useFactory: (repository) => new FindAllSugestaoUseCase(repository),
        inject: ['ISugestaoRepository']
        }
    ]
})
export class SugestoesModule {}
