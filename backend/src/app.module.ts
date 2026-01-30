import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { LocaisModule } from './presentation/nest-modules/locais/locais.module';
import { AuthModule } from './presentation/nest-modules/auth/auth.module';
import { UsuariosModule } from './presentation/nest-modules/usuarios/usuarios.module';

import { InstituicoesModule } from './presentation/nest-modules/instituicoes/instituicoes.module';
import { EventosModule } from './presentation/nest-modules/eventos/eventos.module';
import { AvisosModule } from './presentation/nest-modules/avisos/avisos.module';
import { SugestoesModule } from './presentation/nest-modules/sugestoes/sugestoes.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true,}), 
        DatabaseModule, 
        AuthModule, 
        LocaisModule, 
        UsuariosModule, 
        InstituicoesModule, 
        EventosModule, 
        AvisosModule, 
        SugestoesModule,
    ],
})
export class AppModule {}
