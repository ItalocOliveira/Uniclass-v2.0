import { Body, Controller, Post } from '@nestjs/common';
import { CreateInstituicaoUseCase } from 'src/core/use-cases/instituicao/CreateInstituicaoUseCase';
import { CreateInstituicaoDto } from 'src/presentation/dtos/instituicao/CreateInstituicaoDto';

@Controller('instituicoes')
export class InstituicoesController {
    constructor(private readonly createInstituicaoUseCase: CreateInstituicaoUseCase){}

    @Post()
    async create(@Body() body: CreateInstituicaoDto){
        return this.createInstituicaoUseCase.execute({
            nome: body.nome,
            logoUrl: body.logoUrl,
            mapaUrl: body.mapaUrl,
            coordenadas: body.coordenadas 
        });
    }
}
