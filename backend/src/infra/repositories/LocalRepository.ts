import { Injectable } from '@nestjs/common';
import { ILocalRepository } from 'src/core/repositories/ILocalRepository';
import { LocalDomain } from 'src/core/repositories/dtos/local/LocalDomain';
import { CreateLocalDto } from 'src/core/repositories/dtos/local/CreateLocalDto';
import { UpdateLocalDto } from 'src/core/repositories/dtos/local/UpdateLocalDto';
import { Prisma } from '../database/generated/prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class PrismaLocalRepository implements ILocalRepository {

  constructor(private prisma: PrismaService){}

  async findAll(): Promise<LocalDomain[]> {
    const result = await this.prisma.$queryRaw<any[]>`
      SELECT 
        l.*,
        ST_X(coordenadas::geometry) as longitude,
        ST_Y(coordenadas::geometry) as latitude
      FROM "locais" l
      ORDER BY l.nome ASC
    `;

    return result.map((row) => {
      const coords = (row.latitude && row.longitude) 
        ? { latitude: row.latitude, longitude: row.longitude } 
        : null;

      return this.mapToDomain(row, coords);
    });
  }

  async findById(id: string): Promise<LocalDomain | null> {
    const result = await this.prisma.$queryRaw<any[]>`
      SELECT 
        l.*,
        ST_X(coordenadas::geometry) as longitude,
        ST_Y(coordenadas::geometry) as latitude
      FROM "locais" l
      WHERE l.local_id = ${id}::uuid
      LIMIT 1
    `;

    if (!result.length) return null;
    const raw = result[0];

    const coords = (raw.latitude && raw.longitude)
      ? { latitude: raw.latitude, longitude: raw.longitude }
      : null;

    return this.mapToDomain(raw, coords);
  }

  async findByName(instituicaoId: string, name: string): Promise<LocalDomain | null> {
      const local = await this.prisma.local.findFirst({
        where: { 
          instituicao_id: instituicaoId,
          nome: name
        }
      });

      if(!local) return null;

      return this.mapToDomain(local);
  }

  async create(data: CreateLocalDto): Promise<LocalDomain> {
    const localCriado = await this.prisma.$transaction(async (tx) => {
      const novoLocal = await tx.local.create({
        data: {
          instituicao_id: data.instituicaoId,
          nome: data.nome,
          tipo: data.tipo ?? null,
          bloco: data.bloco ?? null,
          acessivel: data.acessivel ?? false,

          mapa_xy: data.mapaXY ? (data.mapaXY as any) : Prisma.JsonNull, 
          
        },
      });

      if (data.coordenadas) {
        const { latitude, longitude } = data.coordenadas;
        await tx.$executeRaw`
          UPDATE "locais"
          SET coordenadas = ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)
          WHERE local_id = ${novoLocal.local_id}::uuid
        `;
      }

      return novoLocal;
    });

    return this.mapToDomain(localCriado, data.coordenadas);
  }

  async updateById(id: string, data: UpdateLocalDto): Promise<LocalDomain> {
    const localAtualizado = await this.prisma.$transaction(async (tx) => {
      const updated = await tx.local.update({
        where: { local_id: id },
        data: {
          nome: data.nome,
          tipo: data.tipo,
          bloco: data.bloco,
          acessivel: data.acessivel,
          mapa_xy: data.mapaXY ? (data.mapaXY as any) : undefined,
        },
      });

      if (data.coordenadas) {
        await tx.$executeRaw`
          UPDATE "locais"
          SET coordenadas = ST_SetSRID(ST_MakePoint(${data.coordenadas.longitude}, ${data.coordenadas.latitude}), 4326)
          WHERE local_id = ${id}::uuid
        `;
      }

      return updated;
    });

    return this.mapToDomain(localAtualizado, data.coordenadas);
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.local.delete({
      where: { local_id: id },
    });
  }

  private mapToDomain(local: any, coordenadasOverride?: {latitude: number; longitude: number} | null): LocalDomain {
    return {
      localId: local.local_id,
      instituicaoId: local.instituicao_id,
      nome: local.nome,
      tipo: local.tipo,
      bloco: local.bloco,
      acessivel: local.acessivel,
      
      mapaXY: local.mapa_xy, 

      coordenadas: coordenadasOverride ?? (local.latitude ? { latitude: local.latitude, longitude: local.longitude } : null)
    };
  }
}