import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/infra/auth/auth.service';
import type { LoginDto } from 'src/presentation/dtos/LoginDto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async login(@Body() req: LoginDto) {
        const usuario = await this.authService.validateUser(req.instituicaoId, req.email, req.senha);

        if (!usuario) throw new UnauthorizedException('Credenciais inválidas ou instituição incorreta.');

        return this.authService.login(usuario);
    }
}
