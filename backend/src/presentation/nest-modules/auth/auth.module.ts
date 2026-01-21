import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/infra/auth/auth.service';
import { JwtStrategy } from 'src/infra/auth/strategies/jwtStrategy';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        DatabaseModule,
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: process.env.JWT_SECRET || 'SEGREDO_SUPER_SECRETO',
                signOptions: {expiresIn: '24h'},
            }),
            inject: [ConfigService],
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService, PassportModule, JwtModule],
})
export class AuthModule {}
