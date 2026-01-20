import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { LocaisModule } from './presentation/nest-modules/locais/locais.module';
import { AuthModule } from './presentation/nest-modules/auth/auth.module';
import { UsuariosModule } from './presentation/nest-modules/usuarios/usuarios.module';

import { InstituicoesModule } from './presentation/nest-modules/instituicoes/instituicoes.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true,}), 
        DatabaseModule, 
        AuthModule, 
        LocaisModule, 
        UsuariosModule, 
        InstituicoesModule,
    ],
})
export class AppModule {}
