import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(configService: ConfigService){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') || 'SEGREDO_SECRETO',
    });
  }

  async validate(payload: any){
    return {
      userId: payload.sub,
      email: payload.email,
      nome: payload.nome,
      instituicaoId: payload.instituicaoId,
      role: payload.role,
      curso: payload.curso
    }
  }
}