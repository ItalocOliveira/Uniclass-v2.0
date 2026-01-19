import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateUsuarioUseCase } from "src/core/use-cases/usuario/CreateUsuarioUseCase";
import { CurrentUser } from "src/infra/auth/decorators/CurrentUserDecorator";
import type { UserPayload } from "src/infra/auth/decorators/CurrentUserDecorator";
import { Roles } from "src/infra/auth/decorators/RolesDecorator";
import { Role } from "src/infra/auth/enums/RoleEnum";
import { JwtAuthGuard } from "src/infra/auth/guards/JwtAuthGuard";
import { RolesGuard } from "src/infra/auth/guards/RolesGuard";
import { CreateUsuarioDto } from "src/presentation/dtos/usuario/CreateUsuarioDto";

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly createUsuarioUseCase: CreateUsuarioUseCase) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.ADMIN)
    async create(@Body() body: CreateUsuarioDto, @CurrentUser() user: UserPayload) {
        return this.createUsuarioUseCase.execute({
            ...body,
            instituicaoId: user.instituicaoId
        });
        
    }

}
