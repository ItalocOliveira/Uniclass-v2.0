import { sugestaoStatus, sugestaoTipos } from "@prisma/client";
import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";

class MapCoordinate {
    @IsNotEmpty()
    @IsNumber()
    x: number;

    @IsNotEmpty()
    @IsNumber()
    y: number;
};

export class CreateSugestaoDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsNotEmpty()
    @IsEnum(sugestaoTipos)
    tipo: sugestaoTipos;

    @IsNotEmpty()
    @IsEnum(sugestaoStatus)
    status: sugestaoStatus;

    @IsOptional()
    @IsString()
    descricao?: string;
    
    @IsOptional()
    @IsString()
    fotoUrl?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => MapCoordinate)
    mapaXY?: MapCoordinate;  
}