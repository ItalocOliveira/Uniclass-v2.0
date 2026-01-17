import { SugestaoDomain } from '../entities/SugestaoDomain' 
import { CreateSugestaoDto } from './dtos/sugestao/CreateSugestaoDto' 

export interface ISugestaoRepository {
  findAll(instituicaoId: string): Promise<SugestaoDomain[]>
  findById(instituicaoId: string, sugestaoId: string): Promise<SugestaoDomain | null>
  create(data: CreateSugestaoDto): Promise<SugestaoDomain>
  updateById(instituicaoId: string, sugestaoId: string, data: SugestaoDomain): Promise<SugestaoDomain>
  deleteById(instituicaoId: string, sugestaoId: string): Promise<void>
}
