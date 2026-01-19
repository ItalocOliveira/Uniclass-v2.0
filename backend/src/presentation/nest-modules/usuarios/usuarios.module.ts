import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UsuariosController } from './UsuariosController';
import { CreateUsuarioDto } from 'src/presentation/dtos/usuario/CreateUsuarioDto';
import { UsuarioRepository } from 'src/infra/repositories/UsuarioRepository';
import { CreateUsuarioUseCase } from 'src/core/use-cases/usuario/CreateUsuarioUseCase';

@Module({
    imports: [DatabaseModule],
    controllers: [UsuariosController],
    providers: [{
        provide: CreateUsuarioDto,
        useFactory: (UsuarioRepository) => {
            return new CreateUsuarioUseCase(UsuarioRepository)
        },
        inject: ['IUsuarioRepository']
    }]
})
export class UsuariosModule {}
