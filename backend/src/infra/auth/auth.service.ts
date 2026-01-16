import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {}

    // Validar credenciais  
    async validateUser(instituicaoId: string, email: string, password: string, ): Promise<any> {
        const usuario = await this.prisma.usuario.findFirst({
            where: {
                instituicao_id: instituicaoId,
                email: email
            }
        });

        if(usuario && (await bcrypt.compare(password, usuario.senha_hash))) {
            const {senha_hash, ...result} = usuario;
            return result;
        }

        return null;
    }

    // Gerar token
    async login(usuario: any) {
        const payload = {
            sub: usuario.usuario_id,
            email: usuario.email,
            instituicaoId: usuario.instituicao_id,
            role: usuario.tipo_acesso
        };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
