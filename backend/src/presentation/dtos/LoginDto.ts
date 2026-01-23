import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsUUID } from "class-validator";

export class LoginDto {
    @ApiProperty({ 
        example: 'usuario@email.com', 
        description: 'E-mail cadastrado no sistema' 
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ 
        example: 'senha123', 
        description: 'Senha de acesso do usuário',
        format: 'password'
    })
    @IsString()
    @IsNotEmpty()
    senha: string;

    @ApiProperty({ 
        example: '550e8400-e29b-41d4-a716-446655440000', 
        description: 'ID da instituição à qual o usuário pertence (formato UUID)' 
    })
    @IsUUID()
    @IsNotEmpty()
    instituicaoId: string;
}