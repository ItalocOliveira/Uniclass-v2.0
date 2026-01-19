import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, Max, Min, ValidateNested } from "class-validator";

export class CreateInstituicaoDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    logoUrl: string;

    @IsString()
    @IsOptional()   
    @IsUrl() 
    mapaUrl?: string | null;
    
    @IsOptional()
    @ValidateNested()
    @Type(() => GeoCoordinate)
    coordenadas?: GeoCoordinate | null;
}

class GeoCoordinate { 
    @IsNumber()
    @IsNotEmpty()
    @Min(-90) @Max(90)
    latitude: number; 

    @IsNumber()
    @IsNotEmpty()
    @Min(-180) @Max(180)
    longitude: number;
};