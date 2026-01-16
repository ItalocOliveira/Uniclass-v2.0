import { UsuarioDomain } from '../entities/UsuarioDomain'
import { CreateUsuarioDto } from "./dtos/usuario/CreateUsuarioDto"

export interface IUsuarioRepository {
  findAll(): Promise<UsuarioDomain[]>
  findById(id: string): Promise<UsuarioDomain | null>
  create(data: CreateUsuarioDto): Promise<UsuarioDomain>
  updateById(id: string, data: UsuarioDomain): Promise<UsuarioDomain>
  deleteById(id: string): Promise<void>

  //usecase
  findByEmail(instituicaoId: string, email: string): Promise<UsuarioDomain | null>
}
