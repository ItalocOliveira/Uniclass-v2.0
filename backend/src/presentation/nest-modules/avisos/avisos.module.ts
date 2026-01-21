import { Module } from '@nestjs/common';
import { AvisosController } from './avisos.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { CreateAvisoUseCase } from 'src/core/use-cases/aviso/CreateAvisoUseCase';
import { FindAvisosByCursoUseCase } from 'src/core/use-cases/aviso/FindAvisosByCursoUseCase';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [AvisosController],
  providers: [
    {
      provide: CreateAvisoUseCase,
      useFactory: (repository) => new CreateAvisoUseCase(repository),
      inject: ['IAvisoRepository'],
    },
    {
      provide: FindAvisosByCursoUseCase,
      useFactory: (repo) => new FindAvisosByCursoUseCase(repo),
      inject: ['IAvisoRepository'],
    },
  ],
})
export class AvisosModule {}
