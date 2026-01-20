import { Injectable } from '@nestjs/common';
import { ILocalRepository } from 'src/core/repositories/ILocalRepository';
import { LocalDomain, MapCoordinate } from 'src/core/entities/LocalDomain';
import { CreateLocalDto } from 'src/core/repositories/dtos/local/CreateLocalDto';
import { UpdateLocalDto } from 'src/core/repositories/dtos/local/UpdateLocalDto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class LocalRepository implements ILocalRepository {

  constructor(private prisma: PrismaService){}

  async findAll(instituicaoId: string): Promise<LocalDomain[]> {
    const locais = await this.prisma.local.findMany({
      where: {instituicao_id: instituicaoId},
      orderBy: {
        nome: "asc",
      }
    });

    return locais.map((local) => this.mapToDomain(local));
  }

  async findById(instituicaoId: string, localId: string): Promise<LocalDomain | null> {
    const local = await this.prisma.local.findUnique({
      where: { 
        instituicao_id: instituicaoId,
        local_id: localId
      }
    });
    
    if(!local) return null;

    return this.mapToDomain(local);
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
    const local = await this.prisma.local.create({
      data: {
        instituicao_id: data.instituicaoId,
        nome: data.nome,
        tipo: data.tipo, 
        bloco: data.bloco ?? null,
        acessivel: data.acessivel, 

        mapa_xy: data.mapaXY ? (data.mapaXY as Prisma.InputJsonValue) : Prisma.JsonNull,
      },
    });

    return this.mapToDomain(local);
  }

  async updateById(instituicaoId: string, localId: string, data: UpdateLocalDto): Promise<LocalDomain> {
    const dataToUpdate = {
      nome: data.nome,
      tipo: data.tipo,
      bloco: data.bloco,
      mapaXY: data.mapaXY,
      acessivel: data.acessivel
    };

    const updatedLocal = await this.prisma.local.update({
      where: { 
        instituicao_id: instituicaoId,
        local_id: localId
      },
      data: {
        ...dataToUpdate,

      }
    });

    return this.mapToDomain(updatedLocal);
  }

  async deleteById(instituicaoId: string, localId: string): Promise<void> {
    await this.prisma.local.delete({
      where: { 
        instituicao_id: instituicaoId,
        local_id: localId,
      },
    });
  }

  private mapToDomain(local: any): LocalDomain {
    return {
      localId: local.local_id,
      instituicaoId: local.instituicao_id,
      nome: local.nome,
      tipo: local.tipo,
      bloco: local.bloco,
      acessivel: local.acessivel ?? false,
      
      mapaXY: local.mapa_xy ? (local.mapa_xy as MapCoordinate) : null,
    };
  }
}