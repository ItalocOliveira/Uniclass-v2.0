import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface UserPayload {
    userId: string;
    email: string;
    nome: string;
    instituicaoId: string;
    role: string;
    curso: string;
}

    export const CurrentUser = createParamDecorator(
    (data: unknown, ctx: ExecutionContext): UserPayload => {
        const request = ctx.switchToHttp().getRequest();
        
        return request.user;
    },
);