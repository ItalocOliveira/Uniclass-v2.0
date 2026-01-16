import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { AuthService } from './infra/auth/auth.service';
import { AuthController } from './presentation/nest-modules/auth/auth.controller';
import { AuthModule } from './presentation/nest-modules/auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
    }), DatabaseModule, AuthModule],
    controllers: [AuthController],
    providers: [PrismaService, AuthService],
})
export class AppModule {}
