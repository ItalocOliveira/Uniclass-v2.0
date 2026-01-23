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
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAllAvisosByCursoUseCase.execute(usuario.instituicaoId, usuario.curso);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOne(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload){
        return this.findAvisosUseCase.execute(usuario.instituicaoId, avisoId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async update(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditAvisoDto){
        return this.updateAvisoUseCase.execute(usuario.instituicaoId, avisoId, data)
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN, Role.PROFESSOR)
    async delete(@Param('id') avisoId: string, @CurrentUser() usuario: UserPayload){
        return this.deleteAvisoUseCase.execute(usuario.instituicaoId, avisoId)
    }
}
