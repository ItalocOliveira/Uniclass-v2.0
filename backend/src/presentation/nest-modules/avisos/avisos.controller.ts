import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateAvisoUseCase } from 'src/core/use-cases/aviso/CreateAvisoUseCase';
import { FindAvisosByCursoUseCase } from 'src/core/use-cases/aviso/FindAvisosByCursoUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateAvisoDto } from 'src/presentation/dtos/aviso/CreateAvisoDto';

@Controller('avisos')
export class AvisosController {
    constructor(
        private readonly createAvisoUseCase: CreateAvisoUseCase,
        private readonly findAvisosByCursoUseCase: FindAvisosByCursoUseCase
    ){}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async create(@Body() body: CreateAvisoDto, @CurrentUser() usuario: UserPayload){
        return this.createAvisoUseCase.execute({
            titulo: body.titulo,
            prioridade: body.prioridade,
            cursoAlvo: body.cursoAlvo,
            mensagem: body.mensagem,

            instituicaoId: usuario.instituicaoId, 
            usuarioId: usuario.userId, 
            usuarioNome: usuario.nome
        });
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAvisosByCursoUseCase.execute(usuario.instituicaoId, usuario.curso);
    }
}
