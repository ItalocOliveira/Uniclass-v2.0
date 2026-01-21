import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateLocalUseCase } from 'src/core/use-cases/local/CreateLocalUseCase';
import { CurrentUser } from 'src/infra/auth/decorators/CurrentUserDecorator';
import type { UserPayload } from 'src/infra/auth/decorators/CurrentUserDecorator';
import { Roles } from 'src/infra/auth/decorators/RolesDecorator';
import { Role } from 'src/infra/auth/enums/RoleEnum';
import { JwtAuthGuard } from 'src/infra/auth/guards/JwtAuthGuard';
import { RolesGuard } from 'src/infra/auth/guards/RolesGuard';
import { CreateLocalDto } from 'src/presentation/dtos/local/CreateLocalDto';

@Controller('locais')
export class LocaisController {
    constructor(private readonly createLocalUseCase: CreateLocalUseCase){}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async create(@Body() body: CreateLocalDto, @CurrentUser() usuario: UserPayload){
        return this.createLocalUseCase.execute({
            ...body,
            instituicaoId: usuario.instituicaoId
        });
    }
}
