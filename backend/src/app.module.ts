import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { AuthService } from './infra/auth/auth.service';
import { LocaisController } from './presentation/nest-modules/locais/locais.controller';
import { LocaisModule } from './presentation/nest-modules/locais/locais.module';
import { AuthController } from './presentation/nest-modules/auth/auth.controller';
import { AuthModule } from './presentation/nest-modules/auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true,}), 
        DatabaseModule, 
        AuthModule, 
        LocaisModule,
    ],
    controllers: [AuthController, LocaisController],
    providers: [PrismaService, AuthService],
})
export class AppModule {}
