import { Module } from '@nestjs/common';
import { CreateLocalUseCase } from 'src/core/use-cases/local/CreateLocalUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';
import { LocaisController } from './locais.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [DatabaseModule, AuthModule],
    providers: [{
        provide: CreateLocalUseCase,
        useFactory: (repository) => new CreateLocalUseCase(repository),
        inject: ['ILocalRepository']
    }],
    controllers: [LocaisController],
    exports: []
})
export class LocaisModule {}
