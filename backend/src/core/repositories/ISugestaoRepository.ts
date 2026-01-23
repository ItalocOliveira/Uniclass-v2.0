import { SugestaoDomain } from '../entities/SugestaoDomain' 
import { CreateSugestaoDto } from './dtos/sugestao/CreateSugestaoDto' 
import { UpdateSugestaoDto } from './dtos/sugestao/UpdateSugestaoDto'

export interface ISugestaoRepository {
  findAll(instituicaoId: string): Promise<SugestaoDomain[]>
  findById(instituicaoId: string, sugestaoId: string): Promise<SugestaoDomain | null>
  create(data: CreateSugestaoDto): Promise<SugestaoDomain>
  updateById(instituicaoId: string, sugestaoId: string, data: UpdateSugestaoDto): Promise<SugestaoDomain>
  deleteById(instituicaoId: string, sugestaoId: string): Promise<void>
}
