import { NotFoundException } from "@nestjs/common";
import { UpdateAvisoDto } from "src/core/repositories/dtos/aviso/UpdateAvisoDto";
import { IAvisoRepository } from "src/core/repositories/IAvisoRepository";

export class UpdateAvisoUseCase{
    constructor(private avisoRepository: IAvisoRepository){}

    /* 
    * 
    * 
    * 
    */

    async execute(instituicaoId: string, avisoId: string, data: UpdateAvisoDto){
        const aviso = await this.avisoRepository.findById(instituicaoId, avisoId);

        if(!aviso) throw new NotFoundException('Aviso não encontrado nesta instituição');

        return await this.avisoRepository.updateById(instituicaoId, avisoId, data);
    }
}