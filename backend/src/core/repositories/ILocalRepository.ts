import { LocalDomain } from '../entities/LocalDomain'
import { CreateLocalDto } from './dtos/local/CreateLocalDto'

export interface ILocalRepository {
    findAll(instituicaoId: string): Promise<LocalDomain[]>
    findById(instituicaoId: string, localId: string): Promise<LocalDomain | null>
    create(data: CreateLocalDto): Promise<LocalDomain>
    updateById(instituicaoId: string, LocalId: string, data: LocalDomain): Promise<LocalDomain>
    deleteById(instituicaoId: string, LocalId: string): Promise<void>

    //UseCase
    findByNome(instituicaoId: string, name: string): Promise<LocalDomain | null>;
    findAllByInstituicao(instituicaoId: string): Promise<LocalDomain[]>;


}
