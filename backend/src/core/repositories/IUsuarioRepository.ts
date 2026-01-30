import { UsuarioDomain } from '../entities/UsuarioDomain'
import { CreateUsuarioDto } from "./dtos/usuario/CreateUsuarioDto"

export interface IUsuarioRepository {
  findAll(instituicaoId: string): Promise<UsuarioDomain[]>
  findById(instituicaoId: string, usuarioId: string): Promise<UsuarioDomain | null>
  create(data: CreateUsuarioDto): Promise<UsuarioDomain>
  updateById(instituicaoId: string, usuarioId: string, data: UsuarioDomain): Promise<UsuarioDomain>
  deleteById(instituicaoId: string, usuarioId: string): Promise<void>

  //usecase
  findByEmail(instituicaoId: string, email: string): Promise<UsuarioDomain | null>
}
