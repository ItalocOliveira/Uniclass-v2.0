import { InstituicaoDomain } from '../entities/InstituicaoDomain'
import { CreateInstituicaoDto } from './dtos/instituicao/CreateInstituicaoDto'

export interface IInstituicaoRepository {
  findAll(instituicaoId: string): Promise<InstituicaoDomain[]>
  findById(instituicaoId: string): Promise<InstituicaoDomain | null>
  create(data: CreateInstituicaoDto): Promise<InstituicaoDomain>
  updateById(instituicaoId: string, data: InstituicaoDomain): Promise<InstituicaoDomain>
  deleteById(instituicaoId: string): Promise<void>

  // UseCase
  findByNome(name: string): Promise<InstituicaoDomain | null>
}
