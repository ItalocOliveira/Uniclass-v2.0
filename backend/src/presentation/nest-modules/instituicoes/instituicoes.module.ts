import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { InstituicoesController } from './instituicoes.controller';
import { CreateInstituicaoUseCase } from 'src/core/use-cases/instituicao/CreateInstituicaoUseCase';

@Module({
    imports: [DatabaseModule],
    controllers: [InstituicoesController],
    providers: [{
        provide: CreateInstituicaoUseCase,
        useFactory: (repository) => new CreateInstituicaoUseCase(repository),
        inject: ['IInstituicaoRepository']
    }],

})
export class InstituicoesModule {}
