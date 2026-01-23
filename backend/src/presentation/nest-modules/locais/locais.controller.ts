import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CreateLocalUseCase } from 'src/core/use-cases/local/CreateLocalUseCase';
import { DeleteLocalUseCase } from 'src/core/use-cases/local/DeleteLocalUseCase';
import { FindAllLocaisUseCase } from 'src/core/use-cases/local/FindAllLocaisUseCase';
import { FindLocalUseCase } from 'src/core/use-cases/local/FindLocalUseCase';
import { UpdateLocalUseCase } from 'src/core/use-cases/local/UpdateLocalUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateLocalDto } from 'src/presentation/dtos/local/CreateLocalDto';
import { EditLocalDto } from 'src/presentation/dtos/local/EditLocalDto';

@Controller('locais')
export class LocaisController {
    constructor(
        private readonly createLocalUseCase: CreateLocalUseCase,
        private readonly findAllLocaisUseCase: FindAllLocaisUseCase,
        private readonly findLocalUseCase: FindLocalUseCase,
        private readonly updateLocalUseCase: UpdateLocalUseCase,
        private readonly deleteLocalUseCase: DeleteLocalUseCase,
    ){}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async create(@Body() body: CreateLocalDto, @CurrentUser() usuario: UserPayload){
        return this.createLocalUseCase.execute({
            ...body,
            instituicaoId: usuario.instituicaoId
        });
    }

    @Get()
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAllLocaisUseCase.execute(usuario.instituicaoId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findOne(@Param('id') localId: string, @CurrentUser() usuario: UserPayload){
        return this.findLocalUseCase.execute(usuario.instituicaoId, localId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async update(@Param('id') localId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditLocalDto){
        return this.updateLocalUseCase.execute(usuario.instituicaoId, localId, data);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async delete(@Param('id') localId: string, @CurrentUser() usuario: UserPayload){
        return this.deleteLocalUseCase.execute(usuario.instituicaoId, localId);
    }
}
