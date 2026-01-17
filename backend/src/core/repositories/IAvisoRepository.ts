import { AvisoDomain } from '../entities/AvisoDomain'
import { CreateAvisoDto } from './dtos/aviso/CreateAvisoDto'
import { UpdateAvisoDto } from './dtos/aviso/UpdateAvisoDto'

export interface IAvisoRepository {
  findAll(instituicaoId: string): Promise<AvisoDomain[]>
  findById(instituicaoId: string, avisoId: string): Promise<AvisoDomain | null>
  create(data: CreateAvisoDto): Promise<AvisoDomain>
  updateById(instituicaoId: string, avisoId: string, data: UpdateAvisoDto): Promise<AvisoDomain>
  deleteById(instituicaoId: string, avisoId: string): Promise<void>

  // UseCase
  findByTitulo(instituicaoId: string, title: string): Promise<AvisoDomain | null>
}
