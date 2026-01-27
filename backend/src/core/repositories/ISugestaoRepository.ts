import { SugestaoDomain } from './dtos/sugestao/SugestaoDomain' 
import { CreateSugestaoDto } from './dtos/sugestao/CreateSugestaoDto' 

export interface ISugestaoRepository {
  findAll(): Promise<SugestaoDomain[]>
  findById(id: string): Promise<SugestaoDomain | null>
  create(data: CreateSugestaoDto): Promise<SugestaoDomain>
  updateById(id: string, data: SugestaoDomain): Promise<SugestaoDomain>
  deleteById(id: string): Promise<void>
}
