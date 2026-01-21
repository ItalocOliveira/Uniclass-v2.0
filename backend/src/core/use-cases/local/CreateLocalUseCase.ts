import { CreateLocalDto } from "src/core/repositories/dtos/local/CreateLocalDto";
import { LocalDomain } from "src/core/entities/LocalDomain";
import { ILocalRepository } from "src/core/repositories/ILocalRepository";

export class CreateLocalUseCase {
    constructor(private localRepo: ILocalRepository) {}

    async execute(input: CreateLocalDto): Promise<LocalDomain> {

        /* 
        *   1- A instituição não pode ter mais de 1 local com o mesmo nome
        *   
        *   
        */

        // 1 - Nome
        const localMesmoNome = await this.localRepo.findByNome(input.instituicaoId, input.nome);
        if (localMesmoNome) {
            throw new Error("Já existe um local com esse nome nesta instituição.");
        }

        return this.localRepo.create(input);
    }
}
