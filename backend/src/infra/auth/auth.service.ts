import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
  ) {}

  async validateUser(instituicaoId: string | null, email: string, password: string): Promise<any> {
    
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        email: email
      }
    });

    if (!usuario) return null;

    if (instituicaoId && usuario.instituicao_id !== instituicaoId) {
      throw new UnauthorizedException('Instituição inválida para este usuário');
    }

    const senhaValida = await bcrypt.compare(password, usuario.senha_hash);

    if (!senhaValida) return null;

    const { senha_hash, ...result } = usuario;
    return result;
  }

  async login(usuario: any) {
    const payload = {
      sub: usuario.usuario_id,
      email: usuario.email,
      nome: usuario.nome,
      instituicaoId: usuario.instituicao_id,
      role: usuario.tipo_acesso,
      curso: usuario.curso
    };

    return {
      access_token: this.jwtService.sign(payload),
      usuario: {
        id: usuario.usuario_id,
        nome: usuario.nome,
        email: usuario.email,
        instituicaoId: usuario.instituicao_id,
        role: usuario.tipo_acesso,
        curso: usuario.curso
      }
    };
  }
}
