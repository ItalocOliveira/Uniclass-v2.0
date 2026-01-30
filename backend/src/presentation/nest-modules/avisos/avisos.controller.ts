import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateAvisoUseCase } from 'src/core/use-cases/aviso/CreateAvisoUseCase';
import { FindAvisoUseCase } from 'src/core/use-cases/aviso/FindAvisoUseCase';
import { FindAllAvisosByCursoUseCase } from 'src/core/use-cases/aviso/FindAllAvisosByCursoUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateAvisoDto } from 'src/presentation/dtos/aviso/CreateAvisoDto';
import { UpdateAvisoUseCase } from 'src/core/use-cases/aviso/UpdateAvisoUseCase';
import { EditAvisoDto } from 'src/presentation/dtos/aviso/EditAvisoDto';
import { DeleteAvisoUseCase } from 'src/core/use-cases/aviso/DeleteAvisoUseCase';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Avisos')
@ApiBearerAuth()
@Controller('avisos')
export class AvisosController {
    constructor(
        private readonly createAvisoUseCase: CreateAvisoUseCase,
        private readonly findAllAvisosByCursoUseCase: FindAllAvisosByCursoUseCase,
        private readonly findAvisosUseCase: FindAvisoUseCase,
        private readonly updateAvisoUseCase: UpdateAvisoUseCase,
        private readonly deleteAvisoUseCase: DeleteAvisoUseCase,
    ){}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    @ApiOperation({ 
        summary: 'Cria um novo aviso', 
        description: 'Permite que administradores e professores enviem avisos para cursos específicos. O nome do autor é extraído automaticamente do token.' 
    })
    @ApiResponse({ status: 201, description: 'Aviso criado e disparado com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (Apenas ADMIN ou PROFESSOR).' })
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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ 
        summary: 'Lista avisos pertinentes ao usuário', 
        description: 'Retorna os avisos da instituição que correspondem ao curso do usuário logado.' 
    })
    @ApiResponse({ status: 200, description: 'Lista de avisos filtrada por curso retornada com sucesso.' })
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAllAvisosByCursoUseCase.execute(usuario.instituicaoId, usuario.curso);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Busca os detalhes de um aviso específico' })
    @ApiParam({ name: 'id', description: 'ID do aviso (UUID)' })
    @ApiResponse({ status: 200, description: 'Aviso encontrado.' })
    @ApiResponse({ status: 404, description: 'Aviso não encontrado.' })
    async findOne(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload){
        return this.findAvisosUseCase.execute(usuario.instituicaoId, avisoId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    @ApiOperation({ summary: 'Edita um aviso existente', description: 'Restrito a administradores e professores.' })
    @ApiParam({ name: 'id', description: 'ID do aviso a ser editado' })
    @ApiResponse({ status: 200, description: 'Aviso atualizado com sucesso.' })
    async update(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditAvisoDto){
        return this.updateAvisoUseCase.execute(usuario.instituicaoId, avisoId, data)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    @ApiOperation({ summary: 'Remove um aviso', description: 'Ação irreversível. Restrito a administradores e professores.' })
    @ApiParam({ name: 'id', description: 'ID do aviso a ser removido' })
    @ApiResponse({ status: 200, description: 'Aviso deletado com sucesso.' })
    async delete(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload){
        return this.deleteAvisoUseCase.execute(usuario.instituicaoId, avisoId)
    }
}
