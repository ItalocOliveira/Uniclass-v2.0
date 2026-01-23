import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
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

@ApiTags('Sugestões')
@ApiBearerAuth()
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
    @ApiOperation({ 
        summary: 'Envia uma nova sugestão ou feedback', 
        description: 'Qualquer usuário autenticado pode enviar uma sugestão vinculada à sua instituição.' 
    })
    @ApiResponse({ status: 201, description: 'Sugestão enviada com sucesso.' })
    @ApiResponse({ status: 401, description: 'Não autenticado.' })
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
    @ApiOperation({ 
        summary: 'Lista todas as sugestões da instituição', 
        description: 'Acesso restrito a Administradores e Professores para gestão de feedbacks.' 
    })
    @ApiResponse({ status: 200, description: 'Lista de sugestões retornada com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (Requer nível superior ao de Aluno).' })
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAllSugestaoUseCase.execute(usuario.instituicaoId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    @ApiOperation({ summary: 'Busca os detalhes de uma sugestão específica' })
    @ApiParam({ name: 'id', description: 'ID da sugestão (UUID)' })
    @ApiResponse({ status: 200, description: 'Sugestão encontrada.' })
    @ApiResponse({ status: 404, description: 'Sugestão não encontrada.' })
    async findOne(@Param('id') sugestaoId: string, @CurrentUser() usuario: UserPayload) {
        return this.findSugestaoUseCase.execute(usuario.instituicaoId, sugestaoId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    @ApiOperation({ 
        summary: 'Atualiza o status ou dados de uma sugestão', 
        description: 'Geralmente utilizado para alterar o status da sugestão (ex: de PENDENTE para EM_ANALISE).' 
    })
    @ApiParam({ name: 'id', description: 'ID da sugestão a ser editada' })
    @ApiResponse({ status: 200, description: 'Sugestão atualizada com sucesso.' })
    async update(@Param('id') sugestaoId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditSugestaoDto){
        return this.updateSugestaoUseCase.execute(usuario.instituicaoId, sugestaoId, data);
    }

    @Delete('id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @ApiOperation({ 
        summary: 'Exclui uma sugestão', 
        description: 'Ação crítica restrita apenas ao Administrador da instituição.' 
    })
    @ApiParam({ name: 'id', description: 'ID da sugestão a ser removida' })
    @ApiResponse({ status: 200, description: 'Sugestão excluída com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (Apenas ADMIN).' })
    async delete(@Param('id') sugestaoId: string, usuario: UserPayload){
        return this.deleteSugestaoUseCase.execute(usuario.instituicaoId, sugestaoId);
    }
}
