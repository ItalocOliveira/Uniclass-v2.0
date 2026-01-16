import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from '../enums/roleEnum';
import { ROLES_KEY } from '../decorators/rolesDecorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector){}
    
        canActivate(context: ExecutionContext): boolean {
            const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if(!requiredRoles) return true;

        const { usuario } = context.switchToHttp().getRequest();

        return requiredRoles.some((role) => usuario.role === role);
    }
}