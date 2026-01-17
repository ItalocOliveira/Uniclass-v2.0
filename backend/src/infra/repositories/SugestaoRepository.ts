import { ISugestaoRepository } from 'src/core/repositories/ISugestaoRepository' 
import { MapCoordinate, SugestaoDomain } from 'src/core/entities/SugestaoDomain' 
import { CreateSugestaoDto } from 'src/core/repositories/dtos/sugestao/CreateSugestaoDto' 
import { UpdateSugestaoDto } from 'src/core/repositories/dtos/sugestao/UpdateSugestaoDto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { Prisma } from '../database/generated/prisma/client'

@Injectable()
export class SugestaoRepository implements ISugestaoRepository {

  constructor(private prisma: PrismaService){}

  async findAll(instituicaoId: string): Promise<SugestaoDomain[]> {
    // 1. Prisma nativo substitui o queryRaw
    const sugestoes = await this.prisma.sugestao.findMany({
      where: {
        instituicao_id: instituicaoId
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    return sugestoes.map((sugestao) => this.mapToDomain(sugestao));
  }

  async findById(instituicaoId: string, sugestaoId: string): Promise<SugestaoDomain | null> {
    const sugestao = await this.prisma.sugestao.findUnique({
      where: { 
        instituicao_id: instituicaoId,
        sugestao_id: sugestaoId 
      },
    });

    if (!sugestao) return null;

    return this.mapToDomain(sugestao);
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

        mapa_xy: data.mapaXY ? (data.mapaXY as Prisma.InputJsonValue) : Prisma.JsonNull,
      },
    });

    return this.mapToDomain(novaSugestao);
  }

  async updateById(instituicaoId: string, sugestaoId: string, data: UpdateSugestaoDto): Promise<SugestaoDomain> {
    // 3. Update simples, sem executeRaw
    const sugestaoAtualizada = await this.prisma.sugestao.update({
      where: {
        instituicao_id: instituicaoId,
        sugestao_id: sugestaoId 
      },
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        tipo: data.tipo,
        status: data.status,
        foto_url: data.fotoUrl,
        
        // Se undefined, o Prisma ignora. Se tiver valor, atualiza o JSON.
        mapa_xy: data.mapaXY ? (data.mapaXY as Prisma.InputJsonValue) : undefined,
      },
    });

    return this.mapToDomain(sugestaoAtualizada);
  }

  async deleteById(instituicaoId: string, sugestaoId: string): Promise<void> {
    await this.prisma.sugestao.delete({
      where: { 
        instituicao_id: instituicaoId,
        sugestao_id: sugestaoId 
      },
    })
  }


  private mapToDomain(raw: any): SugestaoDomain {
    return {
      sugestaoId: raw.sugestao_id,
      instituicaoId: raw.instituicao_id,
      usuarioId: raw.usuario_id,
      titulo: raw.titulo,
      descricao: raw.descricao,
      tipo: raw.tipo,
      status: raw.status,
      fotoUrl: raw.foto_url,
      
      dataCriacao: raw.created_at,
      dataAtualizacao: raw.updated_at,
      
      mapaXY: raw.mapa_xy ? (raw.mapa_xy as MapCoordinate) : null,
    };
  }
}
