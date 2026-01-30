import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { sugestaoStatus, sugestaoTipos } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

class MapCoordinate {
    @ApiProperty({ example: 150.5, description: 'Posição relativa no eixo X' })
    @IsNotEmpty()
    @IsNumber()
    x: number;

    @ApiProperty({ example: 300.2, description: 'Posição relativa no eixo Y' })
    @IsNotEmpty()
    @IsNumber()
    y: number;
};

export class CreateSugestaoDto {
    @ApiProperty({ 
        example: 'Ar-condicionado quebrado', 
        description: 'Breve resumo da sugestão ou problema' 
    })
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @ApiProperty({ 
        enum: sugestaoTipos, 
        description: 'Define se é uma CONSERTO, INSTALACAO, ou REPOSICAO_MATERIAL' 
    })
    @IsNotEmpty()
    @IsEnum(sugestaoTipos)
    tipo: sugestaoTipos;

    @ApiProperty({ 
        enum: sugestaoStatus, 
        default: sugestaoStatus.PENDENTE,
        description: 'Estado atual da análise da sugestão' 
    })
    @IsNotEmpty()
    @IsEnum(sugestaoStatus)
    status: sugestaoStatus;

    @ApiPropertyOptional({ 
        example: 'O ar-condicionado da sala 202 não está gelando desde segunda-feira.',
        description: 'Detalhamento opcional da sugestão'
    })
    @IsOptional()
    @IsString()
    descricao?: string;
    
    @ApiPropertyOptional({ 
        example: 'https://storage.googleapis.com/uniclass/foto123.jpg',
        description: 'Link da imagem enviada pelo usuário (armazenada em bucket)'
    })
    @IsOptional()
    @IsString()
    fotoUrl?: string;

    @ApiPropertyOptional({ 
        type: () => MapCoordinate,
        description: 'Coordenadas opcionais caso a sugestão seja ligada a um ponto específico no mapa'
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => MapCoordinate)
    mapaXY?: MapCoordinate;
}