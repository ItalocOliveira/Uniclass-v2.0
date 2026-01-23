import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateInstituicaoUseCase } from 'src/core/use-cases/instituicao/CreateInstituicaoUseCase';
import { CreateInstituicaoDto } from 'src/presentation/dtos/instituicao/CreateInstituicaoDto';

@Controller('instituicoes')
export class InstituicoesController {
    constructor(private readonly createInstituicaoUseCase: CreateInstituicaoUseCase){}

    @Post()
    @ApiOperation({ 
        summary: 'Cadastra uma nova instituição',
        description: 'Cria o perfil mestre de uma instituição, incluindo logotipo e coordenadas geográficas globais para geolocalização.' 
    })
    @ApiResponse({ 
        status: 201, 
        description: 'Instituição cadastrada com sucesso.' 
    })
    @ApiResponse({ 
        status: 400, 
        description: 'Dados inválidos (ex: URL de logo malformada ou coordenadas fora do limite).' 
    })
    async create(@Body() body: CreateInstituicaoDto){
        return this.createInstituicaoUseCase.execute({
            nome: body.nome,
            logoUrl: body.logoUrl,
            mapaUrl: body.mapaUrl,
            coordenadas: body.coordenadas 
        });
    }
}
