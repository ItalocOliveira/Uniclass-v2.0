import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateEventoUseCase } from 'src/core/use-cases/evento/CreateEventoUseCase';
import { FindUpcomingEventosUseCase } from 'src/core/use-cases/evento/FindUpcomingEventosUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateEventoDto } from 'src/presentation/dtos/evento/CreateEventoDto';

@Controller('eventos')
export class EventosController {
    constructor(
        private readonly createEventoUseCase: CreateEventoUseCase,
        private readonly findUpcomingEventosUseCase: FindUpcomingEventosUseCase
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
    @UseGuards(JwtAuthGuard)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findUpcomingEventosUseCase.execute(usuario.instituicaoId);
    }
}
