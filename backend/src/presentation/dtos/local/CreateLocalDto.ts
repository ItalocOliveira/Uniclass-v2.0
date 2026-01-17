import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { localTipos } from "src/infra/database/generated/prisma/enums";

export class CreateLocalDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    tipo: localTipos;

    @IsString()
    @IsOptional()
    bloco?: string | null;

    @IsBoolean()
    @IsOptional()
    acessivel?: boolean;

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

