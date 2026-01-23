import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { TipoAcesso } from "@prisma/client";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateUsuarioDto {
    @ApiProperty({ 
        example: 'João da Silva', 
        description: 'Nome completo do usuário' 
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ 
        example: 'joao.silva@universidade.edu.br', 
        description: 'E-mail acadêmico ou pessoal (usado para login)' 
    })
    @IsEmail({}, { message: 'O email informado é inválido.' })
    @IsNotEmpty()
    email: string;

    @ApiProperty({ 
        example: '*******', 
        description: 'Senha de acesso (mínimo 6 caracteres)',
        format: 'password',
        minLength: 6
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
    senha: string;

    @ApiProperty({ 
        enum: TipoAcesso, 
        description: 'Nível de permissão no sistema (Ex: ALUNO, PROFESSOR, ADMIN)',
        example: TipoAcesso.ALUNO 
    })
    @IsNotEmpty()
    @IsEnum(TipoAcesso, { message: 'Tipo de acesso inválido.' })
    tipoAcesso: TipoAcesso;

    @ApiPropertyOptional({ 
        example: 'Análise e Desenvolvimento de Sistemas', 
        nullable: true,
        description: 'Curso ao qual o usuário está vinculado (opcional para ADMIN)' 
    })
    @IsString()
    @IsOptional()
    curso?: string | null;
}