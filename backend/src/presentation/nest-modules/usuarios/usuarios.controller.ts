import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUsuarioUseCase } from 'src/core/use-cases/usuario/CreateUsuarioUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateUsuarioDto } from 'src/presentation/dtos/usuario/CreateUsuarioDto';

@ApiTags('Usuários')
@ApiBearerAuth()
@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly createUsuarioUseCase: CreateUsuarioUseCase){}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @ApiOperation({ 
        summary: 'Cadastra um novo usuário', 
        description: 'Cria um novo perfil (Aluno, Professor ou Admin) vinculado à mesma instituição do administrador logado.' 
    })
    @ApiResponse({ status: 201, description: 'Usuário criado com sucesso.' })
    @ApiResponse({ status: 400, description: 'Dados inválidos ou e-mail já cadastrado.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (Requer privilégios de ADMIN).' })
    async create(@Body() body: CreateUsuarioDto, @CurrentUser() usuario: UserPayload){
        return this.createUsuarioUseCase.execute({
            ...body,
            instituicaoId: usuario.instituicaoId
        });
    }

}
