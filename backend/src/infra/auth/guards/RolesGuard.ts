import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/RoleEnum';
import { ROLES_KEY } from '../decorators/RolesDecorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector){}
    
        canActivate(context: ExecutionContext): boolean {
            const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if(!requiredRoles) return true;

        const request = context.switchToHttp().getRequest();
        const usuario = request.user;
        if (!usuario) {
            console.error('RolesGuard: Usuário não encontrado na requisição. Verifique se o @UseGuards(JwtAuthGuard) está antes do RolesGuard.');
            return false;
        }  

        const hasPermission = requiredRoles.some((role) => usuario.role === role);
        if (!hasPermission) {
            console.warn(`Acesso Negado: Usuário ${usuario.email} com role '${usuario.role}' tentou acessar rota que exige [${requiredRoles}]`);
        }

        return hasPermission;
    }
}