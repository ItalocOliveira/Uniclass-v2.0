import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/infra/auth/auth.service';
import { LoginDto } from 'src/presentation/dtos/LoginDto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @ApiOperation({ 
    summary: 'Realiza o login e retorna o Token JWT', 
    description: 'Valida as credenciais e o vínculo com a instituição.'
  })
  async login(@Body() body: LoginDto) {
    const usuario = await this.authService.validateUser(
      body.instituicaoId,
      body.email,
      body.senha
    );

    if (!usuario) {
      throw new UnauthorizedException('Credenciais inválidas ou instituição incorreta.');
    }

    return this.authService.login(usuario);
  }
}
