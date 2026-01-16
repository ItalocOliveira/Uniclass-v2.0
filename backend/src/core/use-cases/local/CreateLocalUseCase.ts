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
        const localMesmoNome = await this.localRepo.findByName(input.instituicaoId, input.nome);
        if (localMesmoNome) {
            throw new Error("Já existe um local com esse nome nesta instituição.");
        }

        // // 2 - Coordenadas geográficas
        // if (input.coordenadas) {
        //     const { latitude, longitude } = input.coordenadas;
        //     const localMesmasCoordenadasGeo = await this.localRepo.findByGeoCoords(
        //         input.instituicaoId,
        //         latitude,
        //         longitude
        //     );
        //     if (localMesmasCoordenadasGeo) {
        //         throw new Error("Já existe um local com essas coordenadas geográficas nesta instituição.");
        //     }
        // }

        // // 3 - Coordenadas XY
        // if (input.mapaXY) {
        //     const { x, y } = input.mapaXY;
        //     const localMesmasCoordenadasXY = await this.localRepo.findByXYCoords(
        //         input.instituicaoId,
        //         x,
        //         y
        //     );
        //     if (localMesmasCoordenadasXY) {
        //         throw new Error("Já existe um local com essas coordenadas XY nesta instituição.");
        //     }
        // }


        return this.localRepo.create(input);
    }
}
