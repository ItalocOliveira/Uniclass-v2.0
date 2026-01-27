import { AvisoDomain } from './dtos/aviso/AvisoDomain'
import { CreateAvisoDto } from './dtos/aviso/CreateAvisoDto'
import { UpdateAvisoDto } from './dtos/aviso/UpdateAvisoDto'

export interface IAvisoRepository {
  findAll(): Promise<AvisoDomain[]>
  findById(id: string): Promise<AvisoDomain | null>
  create(data: CreateAvisoDto): Promise<AvisoDomain>
  updateById(id: string, data: UpdateAvisoDto): Promise<AvisoDomain>
  deleteById(id: string): Promise<void>

  // UseCase
  findByTitulo(instituicaoId: string, title: string): Promise<AvisoDomain | null>
}
