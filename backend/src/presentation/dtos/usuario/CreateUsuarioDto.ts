import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { TipoAcesso } from "src/infra/database/generated/prisma/client";

export class CreateUsuarioDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail({}, { message: 'O email informado é inválido.' })
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    senha: string;

    @IsNotEmpty()
    @IsEnum(TipoAcesso, { message: 'Tipo de acesso inválido.' })
    tipoAcesso: TipoAcesso;

    @IsString()
    @IsOptional()
    curso?: string | null;
}