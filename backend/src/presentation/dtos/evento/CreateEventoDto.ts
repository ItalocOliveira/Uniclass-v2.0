import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from "class-validator";
import { eventoTipos } from "src/infra/database/generated/prisma/enums";

export class CreateEventoDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsDate()
    @IsNotEmpty()
    @Type(() => Date)
    data: Date; 

    @IsNotEmpty()
    @IsEnum(eventoTipos)
    tipo: eventoTipos;

    @IsString()
    @IsOptional()
    descricao?: string;

    @IsString()
    @IsOptional()
    @IsUUID()
    localId?: string;
}