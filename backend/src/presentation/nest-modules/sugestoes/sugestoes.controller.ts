import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateSugestaoUseCase } from 'src/core/use-cases/sugestao/CreateSugestaoUseCase';
import { FindAllSugestaoUseCase } from 'src/core/use-cases/sugestao/FindAllSugestaoUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateSugestaoDto } from 'src/presentation/dtos/sugestao/CreateSugestaoDto';

@Controller('sugestoes')
export class SugestoesController {
    constructor(
        private readonly createSugestaoUseCase: CreateSugestaoUseCase,
        private readonly findAllSugestaoUseCase: FindAllSugestaoUseCase
    ){}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.ALUNO, Role.PROFESSOR)
    async create(@Body() body: CreateSugestaoDto, @CurrentUser() usuario: UserPayload){
        return this.createSugestaoUseCase.execute({
            ...body,
            instituicaoId: usuario.instituicaoId,
            usuarioId: usuario.userId,
        });
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAllSugestaoUseCase.execute(usuario.instituicaoId);
    }
}
