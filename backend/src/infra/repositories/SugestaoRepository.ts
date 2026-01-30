import { ISugestaoRepository } from 'src/core/repositories/ISugestaoRepository' 
import { MapCoordinate, SugestaoDomain } from 'src/core/entities/SugestaoDomain' 
import { CreateSugestaoDto } from 'src/core/repositories/dtos/sugestao/CreateSugestaoDto' 
import { UpdateSugestaoDto } from 'src/core/repositories/dtos/sugestao/UpdateSugestaoDto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { Sugestao } from '@prisma/client'

@Injectable()
export class SugestaoRepository implements ISugestaoRepository {

  constructor(private prisma: PrismaService){}

  async findAll(instituicaoId: string): Promise<SugestaoDomain[]> {
    const sugestoes = await this.prisma.sugestao.findMany({
      where: { instituicao_id: instituicaoId },
      orderBy: { created_at: 'desc' },
    });
    return sugestoes.map((sugestao) => this.mapToDomain(sugestao));
  }

  async findById(instituicaoId: string, sugestaoId: string): Promise<SugestaoDomain | null> {
    const sugestao = await this.prisma.sugestao.findUnique({
      where: {
        sugestao_id_instituicao_id: {
          sugestao_id: sugestaoId,
          instituicao_id: instituicaoId,
        },
      },
    });
    return sugestao ? this.mapToDomain(sugestao) : null;
  }

  async create(data: CreateSugestaoDto): Promise<SugestaoDomain> {
    const novaSugestao = await this.prisma.sugestao.create({
      data: {
        instituicao_id: data.instituicaoId,
        usuario_id: data.usuarioId,
        titulo: data.titulo,
        descricao: data.descricao,
        tipo: data.tipo,
        status: data.status,
        foto_url: data.fotoUrl,
        mapa_xy: data.mapaXY as any,
      },
    });
    return this.mapToDomain(novaSugestao);
  }

  async updateById(instituicaoId: string, sugestaoId: string, data: UpdateSugestaoDto): Promise<SugestaoDomain> {
    const sugestaoAtualizada = await this.prisma.sugestao.update({
      where: {
        sugestao_id_instituicao_id: {
          sugestao_id: sugestaoId,
          instituicao_id: instituicaoId,
        },
      },
      data: {
        status: data.status,
      },
    });

    return this.mapToDomain(sugestaoAtualizada);
  }

  async deleteById(instituicaoId: string, sugestaoId: string): Promise<void> {
    await this.prisma.sugestao.delete({
      where: {
        sugestao_id_instituicao_id: {
          sugestao_id: sugestaoId,
          instituicao_id: instituicaoId,
        },
      },
    });
  }

  private mapToDomain(sugestao: Sugestao): SugestaoDomain {
    return {
      sugestaoId: sugestao.sugestao_id,
      instituicaoId: sugestao.instituicao_id,
      usuarioId: sugestao.usuario_id,
      titulo: sugestao.titulo,
      descricao: sugestao.descricao,
      tipo: sugestao.tipo,
      status: sugestao.status,
      fotoUrl: sugestao.foto_url,
      
      dataCriacao: sugestao.created_at,
      dataAtualizacao: sugestao.updated_at,
      
      mapaXY: sugestao.mapa_xy as MapCoordinate
    };
  }
}
