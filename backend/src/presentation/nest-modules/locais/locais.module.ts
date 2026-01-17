import { Module } from '@nestjs/common';
import { CreateLocalUseCase } from 'src/core/use-cases/local/CreateLocalUseCase';
import { DatabaseModule } from 'src/infra/database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [{
        provide: CreateLocalUseCase,
        useFactory: (localRepo) => {
            return new CreateLocalUseCase(localRepo);
        },
        inject: ['ILocalRepository']
    }],
    exports: []
})
export class LocaisModule {}
