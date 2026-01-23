import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
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
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findUpcomingEventosUseCase.execute(usuario.instituicaoId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOne(@Param('id') eventoId: string, @CurrentUser() usuario: UserPayload){
        return this.findEventoUseCase.execute(usuario.instituicaoId, eventoId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async update(@Param('id') eventoId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditEventoDto){
        return this.updateEventoUseCase.execute(usuario.instituicaoId, eventoId, data);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async delete(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload){
        return this.deleteEventoUseCase.execute(usuario.instituicaoId, avisoId)
    }
}
