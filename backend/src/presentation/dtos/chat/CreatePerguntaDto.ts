import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePerguntaDto {
    @ApiProperty({
        description: 'A pergunta que o aluno deseja fazer à IA',
        example: 'Onde fica a biblioteca?'
    })
    @IsString({ message: 'A pergunta deve ser um texto' })
    @IsNotEmpty({ message: 'A pergunta não pode estar vazia' })
    @MinLength(3, { message: 'A pergunta deve ter pelo menos 3 caracteres' })
    pergunta: string;
}