import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class LoginDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsUUID()
    @IsNotEmpty()
    instituicaoId: string;
}