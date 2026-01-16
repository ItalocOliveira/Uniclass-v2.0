import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/infra/auth/auth.service';
import { JwtStrategy } from 'src/infra/auth/strategies/jwtStrategy';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        DatabaseModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'SECRET',
            signOptions: {expiresIn: '24h'},
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
