import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEventoUseCase } from 'src/core/use-cases/evento/CreateEventoUseCase';
import { DeleteEventoUseCase } from 'src/core/use-cases/evento/DeleteEventoUseCase';
import { FindEventoUseCase } from 'src/core/use-cases/evento/FindEventoUseCase';
import { FindUpcomingEventosUseCase } from 'src/core/use-cases/evento/FindUpcomingEventosUseCase';
import { UpdateEventoUseCase } from 'src/core/use-cases/evento/UpdateEventoUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateEventoDto } from 'src/presentation/dtos/evento/CreateEventoDto';
import { EditEventoDto } from 'src/presentation/dtos/evento/EditEventoDto';

@ApiTags('Eventos')
@ApiBearerAuth()
@Controller('eventos')
export class EventosController {
    constructor(
        private readonly createEventoUseCase: CreateEventoUseCase,
        private readonly findUpcomingEventosUseCase: FindUpcomingEventosUseCase,
        private readonly findEventoUseCase: FindEventoUseCase,
        private readonly updateEventoUseCase: UpdateEventoUseCase,
        private readonly deleteEventoUseCase: DeleteEventoUseCase,
    ){}

    @Post()
    @ApiOperation({ 
        summary: 'Cria um novo evento',
        description: 'Endpoint restrito a administradores. Cria um evento vinculado à instituição do usuário logado.' 
    })
    @ApiResponse({ status: 201, description: 'Evento criado com sucesso.' })
    @ApiResponse({ status: 401, description: 'Não autenticado.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (apenas ADMIN).' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async create(@Body() body: CreateEventoDto, @CurrentUser() usuario: UserPayload){
        return this.createEventoUseCase.execute({
            titulo: body.titulo,
            tipo: body.tipo,
            descricao: body.descricao,
            localId: body.localId,
            data: body.data,
            instituicaoId: usuario.instituicaoId
        });
    }
    
    @Get()
    @ApiOperation({ 
        summary: 'Busca eventos futuros da instituição',
        description: 'Retorna uma lista de todos os eventos que ainda não ocorreram na instituição do usuário.' 
    })
    @ApiResponse({ status: 200, description: 'Lista de eventos retornada com sucesso.' })
    @ApiResponse({ status: 401, description: 'Não autenticado.' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findUpcomingEventosUseCase.execute(usuario.instituicaoId);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Busca um evento específico pelo ID' })
    @ApiParam({ name: 'id', description: 'ID único do evento (UUID)', example: '550e8400-e29b-41d4-a716-446655440000' })
    @ApiResponse({ status: 200, description: 'Evento encontrado.' }) 
    @ApiResponse({ status: 404, description: 'Evento não encontrado.' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOne(@Param('id') eventoId: string, @CurrentUser() usuario: UserPayload){
        return this.findEventoUseCase.execute(usuario.instituicaoId, eventoId);
    }

    @Patch(':id')
    @ApiOperation({ 
        summary: 'Atualiza dados de um evento',
        description: 'Endpoint restrito a administradores.' 
    })
    @ApiParam({ name: 'id', description: 'ID do evento a ser editado' })
    @ApiResponse({ status: 200, description: 'Evento atualizado com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (apenas ADMIN).' })
    @ApiResponse({ status: 404, description: 'Evento não encontrado.' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async update(@Param('id') eventoId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditEventoDto){
        return this.updateEventoUseCase.execute(usuario.instituicaoId, eventoId, data);
    }

    @Delete(':id')
    @ApiOperation({ 
        summary: 'Remove um evento',
        description: 'Endpoint restrito a Administradores e Professores.' 
    })
    @ApiParam({ name: 'id', description: 'ID do evento a ser deletado' })
    @ApiResponse({ status: 200, description: 'Evento deletado com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (Requer nível ADMIN ou PROFESSOR).' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async delete(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload){
        return this.deleteEventoUseCase.execute(usuario.instituicaoId, avisoId)
    }
}
