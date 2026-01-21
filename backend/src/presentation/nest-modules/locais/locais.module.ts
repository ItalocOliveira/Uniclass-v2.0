import { Module } from '@nestjs/common';
import { CreateLocalUseCase } from 'src/core/use-cases/local/CreateLocalUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { LocaisController } from './locais.controller';
import { AuthModule } from '../auth/auth.module';
import { FindAllLocaisUseCase } from 'src/core/use-cases/local/FindAllLocaisUseCase';

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [LocaisController],
    providers: [{
        provide: CreateLocalUseCase,
        useFactory: (repository) => new CreateLocalUseCase(repository),
        inject: ['ILocalRepository']
        },
        {
        provide: FindAllLocaisUseCase,
        useFactory: (repo) => new FindAllLocaisUseCase(repo),
        inject: ['ILocalRepository']
        }
    ],
})
export class LocaisModule {}
