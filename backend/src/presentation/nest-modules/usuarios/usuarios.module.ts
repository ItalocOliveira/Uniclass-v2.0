import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UsuariosController } from './UsuariosController';
import { CreateUsuarioUseCase } from 'src/core/use-cases/usuario/CreateUsuarioUseCase';

@Module({
    imports: [DatabaseModule],
    controllers: [UsuariosController],
    providers: [{
        provide: CreateUsuarioUseCase,
        useFactory: (UsuarioRepository) => {
            return new CreateUsuarioUseCase(UsuarioRepository)
        },
        inject: ['IUsuarioRepository']
    }]
})
export class UsuariosModule {}
