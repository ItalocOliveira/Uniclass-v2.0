import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateUsuarioUseCase } from 'src/core/use-cases/usuario/CreateUsuarioUseCase';
import { AuthModule } from '../auth/auth.module';
import { UsuariosController } from './usuarios.controller';

@Module({
    imports: [DatabaseModule, AuthModule],
    controllers: [UsuariosController],
    providers: [{
        provide: CreateUsuarioUseCase,
        useFactory: (repository) => new CreateUsuarioUseCase(repository),
        inject: ['IUsuarioRepository']
    }]
})
export class UsuariosModule {}
