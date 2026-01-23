import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateSugestaoUseCase } from 'src/core/use-cases/sugestao/CreateSugestaoUseCase';
import { DeleteSugestaoUseCase } from 'src/core/use-cases/sugestao/DeleteSugestaoUseCase';
import { FindAllSugestaoUseCase } from 'src/core/use-cases/sugestao/FindAllSugestaoUseCase';
import { FindSugestaoUseCase } from 'src/core/use-cases/sugestao/FindSugestaoUseCase';
import { UpdateSugestaoUseCase } from 'src/core/use-cases/sugestao/UpdateSugestaoUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateSugestaoDto } from 'src/presentation/dtos/sugestao/CreateSugestaoDto';
import { EditSugestaoDto } from 'src/presentation/dtos/sugestao/EditSugestaoDto';

@Controller('sugestoes')
export class SugestoesController {
    constructor(
        private readonly createSugestaoUseCase: CreateSugestaoUseCase,
        private readonly findAllSugestaoUseCase: FindAllSugestaoUseCase,
        private readonly findSugestaoUseCase: FindSugestaoUseCase,
        private readonly updateSugestaoUseCase: UpdateSugestaoUseCase,
        private readonly deleteSugestaoUseCase: DeleteSugestaoUseCase,
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

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async findOne(@Param('id') sugestaoId: string, @CurrentUser() usuario: UserPayload) {
        return this.findSugestaoUseCase.execute(usuario.instituicaoId, sugestaoId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async update(@Param('id') sugestaoId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditSugestaoDto){
        return this.updateSugestaoUseCase.execute(usuario.instituicaoId, sugestaoId, data);
    }

    @Delete('id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async delete(@Param('id') sugestaoId: string, usuario: UserPayload){
        return this.deleteSugestaoUseCase.execute(usuario.instituicaoId, sugestaoId);
    }
}
