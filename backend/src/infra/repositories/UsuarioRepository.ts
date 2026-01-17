import { IUsuarioRepository } from 'src/core/repositories/IUsuarioRepository'
import { UsuarioDomain } from 'src/core/entities/UsuarioDomain'
import { CreateUsuarioDto } from 'src/core/repositories/dtos/usuario/CreateUsuarioDto'
import { UpdateUsuarioDto } from 'src/core/repositories/dtos/usuario/UpdateUsuarioDto'
import { Usuario } from '../database/generated/prisma/client';
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

@Injectable()
export class UsuarioRepository implements IUsuarioRepository {

  constructor(private prisma: PrismaService){}

  async findAll(): Promise<UsuarioDomain[]> {
    const usuarios = await this.prisma.usuario.findMany();

    return usuarios.map((usuario) => this.mapToDomain(usuario));
  }

  async findById(instituicaoId: string, usuarioId: string): Promise<UsuarioDomain | null> {
    const instituicao = await this.prisma.usuario.findUnique({
      where: { 
        instituicao_id: instituicaoId,
        usuario_id: usuarioId 
      },
    })

    if(!instituicao) return null;

    return this.mapToDomain(instituicao);
  }

  async findByEmail(instituicaoId: string, email: string): Promise<UsuarioDomain | null> {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        instituicao_id: instituicaoId,
        email: email
      }
    });

    if(!usuario) return null;

    return this.mapToDomain(usuario);
  }

  async create(data: CreateUsuarioDto): Promise<UsuarioDomain> {
    const usuario = await this.prisma.usuario.create({
      data: {
        instituicao_id: data.instituicaoId,
        nome: data.nome,
        email: data.email,
        senha_hash: data.senha,
        tipo_acesso: data.tipoAcesso,
        curso: data.curso
      }
    })

    return this.mapToDomain(usuario);
  }

  async updateById(instituicaoId: string, usuarioId: string, data: UpdateUsuarioDto): Promise<UsuarioDomain> {
    const dataToUpdate = {
      instituicao_id: data.instituicaoId,
      nome: data.nome,
      email: data.email,
      tipo_acesso: data.tipoAcesso,
      curso: data.curso
    };

    const updatedUsuario = await this.prisma.usuario.update({
      where: {
        instituicao_id: instituicaoId,
        usuario_id: usuarioId 
      },
      data: { ...dataToUpdate}
    });

    return this.mapToDomain(updatedUsuario);
  }

  async deleteById(instituicaoId: string, usuarioId: string): Promise<void> {
    await this.prisma.usuario.delete({
      where: { 
        instituicao_id: instituicaoId,
        usuario_id: usuarioId
      },
    })
  }


  private mapToDomain(usuario: Usuario): UsuarioDomain{
    return {
      usuarioId: usuario.usuario_id,
      instituicaoId: usuario.instituicao_id,
      nome: usuario.nome,
      email: usuario.email,
      tipoAcesso: usuario.tipo_acesso,
      curso: usuario.curso,
      dataCriacao: usuario.created_at,
      dataAtualizacao: usuario.updated_at
    }
  }
}
