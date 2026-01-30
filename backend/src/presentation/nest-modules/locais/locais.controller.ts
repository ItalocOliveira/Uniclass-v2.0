import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
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

@ApiTags('Locais')
@ApiBearerAuth()
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
    @ApiOperation({ 
        summary: 'Cadastra um novo local', 
        description: 'Permite criar salas, auditórios ou laboratórios. Restrito a administradores.' 
    })
    @ApiResponse({ status: 201, description: 'Local criado com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado (Requer Role ADMIN).' })
    async create(@Body() body: CreateLocalDto, @CurrentUser() usuario: UserPayload){
        return this.createLocalUseCase.execute({
            ...body,
            instituicaoId: usuario.instituicaoId
        });
    }

    @Get()
    @ApiOperation({ 
        summary: 'Lista todos os locais da instituição', 
        description: 'Retorna os locais vinculados à instituição do usuário autenticado.' 
    })
    @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
    @UseGuards(JwtAuthGuard, RolesGuard)
    async findAll(@CurrentUser() usuario: UserPayload){
        return this.findAllLocaisUseCase.execute(usuario.instituicaoId);
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiOperation({ summary: 'Busca um local específico pelo ID' })
    @ApiParam({ name: 'id', description: 'ID do local (UUID)' })
    @ApiResponse({ status: 200, description: 'Local encontrado.' })
    @ApiResponse({ status: 404, description: 'Local não encontrado na instituição.' })
    async findOne(@Param('id') localId: string, @CurrentUser() usuario: UserPayload){
        return this.findLocalUseCase.execute(usuario.instituicaoId, localId);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @ApiOperation({ summary: 'Atualiza dados de um local', description: 'Restrito a administradores.' })
    @ApiParam({ name: 'id', description: 'ID do local a ser editado' })
    @ApiResponse({ status: 200, description: 'Local atualizado com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado.' })
    async update(@Param('id') localId: string, @CurrentUser() usuario: UserPayload, @Body() data: EditLocalDto){
        return this.updateLocalUseCase.execute(usuario.instituicaoId, localId, data);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    @ApiOperation({ summary: 'Remove um local', description: 'Restrito a administradores.' })
    @ApiParam({ name: 'id', description: 'ID do local a ser removido' })
    @ApiResponse({ status: 200, description: 'Local removido com sucesso.' })
    @ApiResponse({ status: 403, description: 'Acesso negado.' })
    async delete(@Param('id') localId: string, @CurrentUser() usuario: UserPayload){
        return this.deleteLocalUseCase.execute(usuario.instituicaoId, localId);
    }
}
