import { InstituicaoDomain } from './dtos/instituicao/InstituicaoDomain'
import { CreateInstituicaoDto } from './dtos/instituicao/CreateInstituicaoDto'

export interface IInstituicaoRepository {
  findAll(): Promise<InstituicaoDomain[]>
  findById(id: string): Promise<InstituicaoDomain | null>
  create(data: CreateInstituicaoDto): Promise<InstituicaoDomain>
  updateById(id: string, data: InstituicaoDomain): Promise<InstituicaoDomain>
  deleteById(id: string): Promise<void>
}
