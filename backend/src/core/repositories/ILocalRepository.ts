import { LocalDomain } from './dtos/local/LocalDomain'
import { CreateLocalDto } from './dtos/local/CreateLocalDto'

export interface ILocalRepository {
    findAll(): Promise<LocalDomain[]>
    findById(id: string): Promise<LocalDomain | null>
    create(data: CreateLocalDto): Promise<LocalDomain>
    updateById(id: string, data: LocalDomain): Promise<LocalDomain>
    deleteById(id: string): Promise<void>

    //UseCase
    findByName(instituicaoId: string, name: string): Promise<LocalDomain | null>;
    // findByGeoCoords(instituicaoId: string, latitude: number, longitude: number): Promise<LocalDomain | null>;
    // findByXYCoords(instituicaoId: string, x: number, y: number): Promise<LocalDomain | null>;


}
