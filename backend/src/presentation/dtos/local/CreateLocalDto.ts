import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from "class-validator";
import { localTipos } from "src/infra/database/generated/prisma/enums";

export class CreateLocalDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNotEmpty()
    @IsEnum(localTipos, {message: "Tipo de local inválido."})
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

