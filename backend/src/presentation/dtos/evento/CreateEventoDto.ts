import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { eventoTipos } from "@prisma/client";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateEventoDto {
    @ApiProperty({ 
        example: 'Palestra de Abertura: Futuro da IA', 
        description: 'Nome ou título do evento' 
    })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ 
        example: '2026-05-20T19:00:00.000Z', 
        description: 'Data e hora de início no formato ISO8601' 
    })
    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    data: Date; 

    @ApiProperty({ 
        enum: eventoTipos,
        description: 'Categoria do evento (Ex: PALESTRA, WORKSHOP, HACKATON)' 
    })
    @IsNotEmpty()
    @IsEnum(eventoTipos)
    tipo: eventoTipos;

    @ApiPropertyOptional({ 
        example: 'Uma palestra sobre como a IA transformará o mercado de trabalho.',
        description: 'Detalhes adicionais sobre a programação ou requisitos'
    })
    @IsString()
    @IsOptional()
    descricao?: string;

    @ApiPropertyOptional({ 
        example: '550e8400-e29b-41d4-a716-446655440000',
        description: 'ID do Local (UUID) onde o evento ocorrerá. Deve existir na tabela de locais.'
    })
    @IsString()
    @IsOptional()
    @IsUUID()
    localId?: string;
}