import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Max, Min, ValidateNested } from "class-validator";

class GeoCoordinate { 
    @ApiProperty({ 
        example: -23.5505, 
        description: 'Latitude da instituição (entre -90 e 90)',
        minimum: -90,
        maximum: 90 
    })
    @IsNumber()
    @IsNotEmpty()
    @Min(-90) @Max(90)
    latitude: number; 

    @ApiProperty({ 
        example: -46.6333, 
        description: 'Longitude da instituição (entre -180 e 180)',
        minimum: -180,
        maximum: 180 
    })
    @IsNumber()
    @IsNotEmpty()
    @Min(-180) @Max(180)
    longitude: number;
};

export class CreateInstituicaoDto {

    @ApiProperty({ 
        example: 'Universidade Uniclass Central', 
        description: 'Nome oficial da instituição de ensino' 
    })
    @IsString()
    @IsNotEmpty()
    nome: string;

    @ApiProperty({ 
        example: 'https://cdn.uniclass.com/logos/instituicao-1.png', 
        description: 'URL da imagem do logo da instituição' 
    })
    @IsString()
    @IsNotEmpty()
    @IsUrl()
    logoUrl: string;

    @ApiPropertyOptional({ 
        example: 'https://cdn.uniclass.com/maps/planta-baixa.svg', 
        description: 'URL da planta baixa ou mapa estilizado da instituição',
        nullable: true
    })
    @IsString()
    @IsOptional()   
    @IsUrl() 
    mapaUrl?: string | null;
    
    @ApiPropertyOptional({ 
        type: () => GeoCoordinate,
        description: 'Coordenadas GPS centrais da instituição para geolocalização inicial',
        nullable: true
    })
    @IsOptional()
    @ValidateNested()
    @Type(() => GeoCoordinate)
    coordenadas?: GeoCoordinate | null;
}

