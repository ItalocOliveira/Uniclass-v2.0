import { ISugestaoRepository } from 'src/core/repositories/ISugestaoRepository' 
import { SugestaoDomain } from 'src/core/repositories/dtos/sugestao/SugestaoDomain' 
import { CreateSugestaoDto } from 'src/core/repositories/dtos/sugestao/CreateSugestaoDto' 
import { UpdateSugestaoDto } from 'src/core/repositories/dtos/sugestao/UpdateSugestaoDto'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'

@Injectable()
export class SugestaoRepository implements ISugestaoRepository {

  constructor(private prisma: PrismaService){}

  async findAll(): Promise<SugestaoDomain[]> {
    const result = await this.prisma.$queryRaw<any[]>`
      SELECT 
        s.*,
        ST_X(localizacao::geometry) as longitude,
        ST_Y(localizacao::geometry) as latitude
      FROM "sugestoes" s
      ORDER BY s.data_criacao DESC
    `;

    return result.map((row) => {
      const coords = (row.latitude && row.longitude) 
        ? { latitude: row.latitude, longitude: row.longitude } 
        : null;

      return this.mapToDomain(row, coords);
    });
}

  async findById(id: string): Promise<SugestaoDomain | null> {
    const result = await this.prisma.$queryRaw<any[]>`
    SELECT 
      s.*, 
      ST_X(localizacao::geometry) as longitude, 
      ST_Y(localizacao::geometry) as latitude 
    FROM "sugestoes" s
    WHERE s.sugestao_id = ${id}::uuid
    LIMIT 1
  `;

    if(!result.length) return null;
    const raw = result[0];

    const coords = raw.latitude && raw.longitude ? { latitude: raw.latitude, longitude: raw.longitude }: null;

    return this.mapToDomain(raw, coords);
  }

  async create(data: CreateSugestaoDto): Promise<SugestaoDomain> {
    const sugestao = await this.prisma.$transaction(async (tx) => {
      const newSugestao = await tx.sugestao.create({
        data: {
          instituicao_id: data.instituicaoId,
          usuario_id: data.usuarioId,
          titulo: data.titulo,
          descricao: data.descricao,
          tipo: data.tipo,
          status: data.status ?? 'pendente',
          foto_url: data.fotoUrl,
        }
      });

      if(data.localizacao) {
        const { latitude, longitude } = data.localizacao;

        await tx.$executeRaw`
            UPDATE "sugestoes"
            SET localizacao = ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)
            WHERE sugestao_id = ${newSugestao.sugestao_id}::uuid
          `;
      }

      return newSugestao;
    });

    return this.mapToDomain(sugestao, data.localizacao);
  }

  async updateById(id: string, data: UpdateSugestaoDto): Promise<SugestaoDomain> {
    const sugestaoAtualizada = await this.prisma.$transaction(async (tx) => {
        const updated = await tx.sugestao.update({
            where: { sugestao_id: id },
            data: {
                titulo: data.titulo,
                descricao: data.descricao,
                tipo: data.tipo,
                status: data.status,
                foto_url: data.fotoUrl,
            }
        });

        if (data.localizacao) {
            await tx.$executeRaw`
                UPDATE "sugestoes"
                SET localizacao = ST_SetSRID(ST_MakePoint(${data.localizacao.longitude}, ${data.localizacao.latitude}), 4326)
                WHERE sugestao_id = ${id}::uuid
            `;
        }

        return updated;
    });

    return this.mapToDomain(sugestaoAtualizada, data.localizacao);
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.sugestao.delete({
      where: { sugestao_id: id },
    })
  }


  private mapToDomain(sugestao: any, coordenadas?: {latitude: number; longitude: number} | null): SugestaoDomain{
    return {
      sugestaoId: sugestao.sugestao_id,
      instituicaoId: sugestao.instituicao_id,
      usuarioId: sugestao.usuario_id,
      titulo: sugestao.titulo,
      descricao: sugestao.descricao,
      tipo: sugestao.tipo,
      status: sugestao.status,
      fotoUrl: sugestao.foto_url,
      dataCriacao: sugestao.data_criacao,

      localizacao: coordenadas ?? (sugestao.latitude ? { latitude: sugestao.latitude, longitude: sugestao.longitude } : null)
    };
  }
}
