import { prisma } from 'src/infra/database/prisma/prisma'
import { IUsuarioRepository } from 'src/core/repositories/IUsuarioRepository'
import { UsuarioDomain } from 'src/core/repositories/dtos/usuario/UsuarioDomain'
import { CreateUsuarioDto } from 'src/core/repositories/dtos/usuario/CreateUsuarioDto'
import { UpdateUsuarioDto } from 'src/core/repositories/dtos/usuario/UpdateUsuarioDto'
import { Usuario } from '../database/generated/prisma/client';

export class UsuarioRepository implements IUsuarioRepository {
  async findAll(): Promise<UsuarioDomain[]> {
    const usuarios = await prisma.usuario.findMany();

    return usuarios.map((usuario) => this.mapToDomain(usuario));
  }

  async findById(id: string): Promise<UsuarioDomain | null> {
    const instituicao = await prisma.usuario.findUnique({
      where: { usuario_id: id },
    })

    if(!instituicao) return null;

    return this.mapToDomain(instituicao);
  }

  async create(data: CreateUsuarioDto): Promise<UsuarioDomain> {
    const usuario = await prisma.usuario.create({
      data: {
        instituicao_id: data.instituicaoId,
        nome: data.nome,
        email: data.email,
        tipo_acesso: data.tipoAcesso,
        curso: data.curso
      }
    })

    return this.mapToDomain(usuario);
  }

  async updateById(id: string, data: UpdateUsuarioDto): Promise<UsuarioDomain> {
    const dataToUpdate = {
      instituicao_id: data.instituicaoId,
      nome: data.nome,
      email: data.email,
      tipo_acesso: data.tipoAcesso,
      curso: data.curso
    };

    const updatedUsuario = await prisma.usuario.update({
      where: { usuario_id: id },
      data: { ...dataToUpdate}
    });

    return this.mapToDomain(updatedUsuario);
  }

  async deleteById(id: string): Promise<void> {
    await prisma.usuario.delete({
      where: { usuario_id: id },
    })
  }


  private mapToDomain(usuario: Usuario): UsuarioDomain{
    return {
      usuarioId: usuario.usuario_id,
      instituicaoId: usuario.instituicao_id,
      nome: usuario.nome,
      email: usuario.email,
      tipoAcesso: usuario.tipo_acesso,
      curso: usuario.curso
    }
  }
}
