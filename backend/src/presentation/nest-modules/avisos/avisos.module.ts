import { Module } from '@nestjs/common';
import { AvisosController } from './avisos.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { CreateAvisoUseCase } from 'src/core/use-cases/aviso/CreateAvisoUseCase';
import { FindAllAvisosByCursoUseCase } from 'src/core/use-cases/aviso/FindAllAvisosByCursoUseCase';
import { FindAvisoUseCase } from 'src/core/use-cases/aviso/FindAvisoUseCase';
import { UpdateAvisoUseCase } from 'src/core/use-cases/aviso/UpdateAvisoUseCase';
import { DeleteAvisoUseCase } from 'src/core/use-cases/aviso/DeleteAvisoUseCase';


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
      provide: FindAllAvisosByCursoUseCase,
      useFactory: (repo) => new FindAllAvisosByCursoUseCase(repo),
      inject: ['IAvisoRepository'],
    },
    {
      provide: FindAvisoUseCase,
      useFactory: (repo) => new FindAvisoUseCase(repo),
      inject: ['IAvisoRepository'],
    },
    {
      provide: UpdateAvisoUseCase,
      useFactory: (repo) => new UpdateAvisoUseCase(repo),
      inject: ['IAvisoRepository'],
    },
    {
      provide: DeleteAvisoUseCase,
      useFactory: (repo) => new DeleteAvisoUseCase(repo),
      inject: ['IAvisoRepository'],
    },
  ],
})
export class AvisosModule {}
