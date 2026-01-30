import { NotFoundException } from "@nestjs/common";
import { localTipos } from "@prisma/client";
import { MapCoordinate } from "src/core/entities/LocalDomain";
import { ILocalRepository } from "src/core/repositories/ILocalRepository";

export interface EditLocalInput {
    nome?: string;
    tipo?: localTipos;
    bloco?: string | null;
    mapaXY?: MapCoordinate | null;         
    acessivel?: boolean;
}

export class UpdateLocalUseCase {
    constructor(private localRepository: ILocalRepository){}

    /* 
    *   1- Apenas ADMINS podem modificar locais
    *   2- ADMINS podem moficiar apenas locais pertencentes a sua instituição
    *   
    */

    async execute(instituicaoId: string, localId: string, data: EditLocalInput){
        const localExiste = await this.localRepository.findById(instituicaoId,localId);
        if(!localExiste) throw new NotFoundException('Local não encontrado nesta instituição');

        return this.localRepository.updateById(instituicaoId, localId, data)
    }
}