import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { localTipos } from "@prisma/client";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class CreateLocalDto {
    @ApiProperty({ 
        example: 'Auditório A', 
        description: 'Nome identificador do local dentro da instituição' 
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ 
        enum: localTipos, 
        description: 'Categoria do local (Ex: BLOCO, AUDITORIO, REITORIA)' 
    })
    @IsNotEmpty()
    @IsEnum(localTipos, {message: "Tipo de local inválido."})
    tipo: localTipos;

    @ApiPropertyOptional({ 
        example: 'Bloco A', 
        nullable: true,
        description: 'Identificação do bloco ou edifício'
    })
    @IsString()
    @IsOptional()
    bloco?: string | null;

    @ApiPropertyOptional({ 
        default: false,
        description: 'Indica se o local possui infraestrutura de acessibilidade'
    })
    @IsBoolean()
    @IsOptional()
    acessivel?: boolean;

    @ApiPropertyOptional({ 
        type: () => MapCoordinate,
        description: 'Coordenadas cartesianas para renderização no mapa interno',
        example: { x: 10, y: 20 }
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => MapCoordinate)
    mapaXY?: MapCoordinate | null;    
}

class MapCoordinate {
    @IsNumber()
    @IsNotEmpty()
    x: number;

    @IsNumber()
    @IsNotEmpty()
    y: number;
};

