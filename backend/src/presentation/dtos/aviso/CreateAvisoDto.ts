import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { avisoPrioridade } from "@prisma/client";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateAvisoDto {
    @ApiProperty({ 
        example: 'Manutenção no Bloco C', 
        description: 'Título curto e direto do aviso' 
    })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ 
        enum: avisoPrioridade, 
        example: avisoPrioridade.MODERADO,
        description: 'Nível de urgência do aviso (afeta a cor/ícone no app)' 
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(avisoPrioridade, { message: "Tipo de prioridade inválido." })
    prioridade: avisoPrioridade;

    @ApiProperty({ 
        example: ['Análise e Desenvolvimento de Sistemas', 'Ciências da Computação'],
        description: 'Lista de cursos que devem visualizar este aviso. Use ["Todos"] para alcance geral.',
        type: [String]
    })
    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    cursoAlvo: string[];

    @ApiPropertyOptional({ 
        example: 'O elevador do bloco C estará em manutenção das 14h às 17h.',
        nullable: true,
        description: 'Corpo detalhado da mensagem de aviso'
    })
    @IsString()
    @IsOptional()
    mensagem?: string | null;
}