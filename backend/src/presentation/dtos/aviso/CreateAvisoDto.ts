import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { avisoPrioridade } from "@prisma/client";

export class CreateAvisoDto {
    @IsString()
    @IsNotEmpty()
    titulo: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(avisoPrioridade, {message: "Tipo de prioridade inválido."})
    prioridade: avisoPrioridade;

    @IsArray()
    @IsString({ each: true })
    @IsNotEmpty()
    cursoAlvo: string[];

    @IsString()
    @IsOptional()
    mensagem?: string | null;
}