import { IEventoRepository } from 'src/core/repositories/IEventoRepository'
import { EventoDomain } from 'src/core/entities/EventoDomain'
import { CreateEventoDto } from 'src/core/repositories/dtos/evento/CreateEventoDto'
import { UpdateEventoDto } from 'src/core/repositories/dtos/evento/UpdateEventoDto'
import { Evento } from '@prisma/client'
import { PrismaService } from '../database/prisma/prisma.service'
import { Injectable } from '@nestjs/common';

@Injectable()
export class EventoRepository implements IEventoRepository {

  constructor(private prisma: PrismaService){}

  async findAll(instituicaoId: string): Promise<EventoDomain[]> {
    const eventos = await this.prisma.evento.findMany({
      where: { instituicao_id: instituicaoId },
      include: { local: true }
    });

    return eventos.map((evento) => this.mapToDomain(evento));
  }

  async findById(instituicaoId: string, eventoId: string): Promise<EventoDomain | null> {
    const evento = await this.prisma.evento.findUnique({
      where: { 
        evento_id_instituicao_id: {
          evento_id: eventoId,
          instituicao_id: instituicaoId
        }
      },
      include: {local: true}
    })

    if(!evento) return null;

    return this.mapToDomain(evento);
  }

  async findByTitulo(instituicaoId: string, titulo: string): Promise<EventoDomain | null> {
      const evento = await this.prisma.evento.findFirst({
          where: { instituicao_id: instituicaoId, titulo }
      });

      if (!evento) return null;

      return this.mapToDomain(evento);
  }

  async findByLocalAndData(instituicaoId: string, localId: string, data: Date | string): Promise<EventoDomain | null> {
      const dataObj = typeof data === 'string' ? new Date(data) : data;

      const evento = await this.prisma.evento.findFirst({
          where: { 
              instituicao_id: instituicaoId,
              local_id: localId, 
              data: dataObj
          }
      });

      if (!evento) return null;
      return this.mapToDomain(evento);
  }

  async findAllUpcoming(instituicaoId: string): Promise<EventoDomain[]> {
    const eventos = await this.prisma.evento.findMany({
      where: {
        instituicao_id: instituicaoId,
        data: { gte: new Date() },
      },
      orderBy: { data: 'asc' },
      include: { local: true },
    });

    return eventos.map((evento) => this.mapToDomain(evento));
  }

  async create(data: CreateEventoDto): Promise<EventoDomain> {

    const evento = await this.prisma.evento.create({ 
      data: {
        instituicao_id: data.instituicaoId,
        titulo: data.titulo,
        data: data.data,
        tipo: data.tipo,
        descricao: data.descricao,
        local_id: data.localId
      }  
    });

    return this.mapToDomain(evento);
  }

  async updateById(instituicaoId: string, eventoId: string, data: UpdateEventoDto): Promise<EventoDomain> {
    const eventoExiste = await this.prisma.evento.findFirst({
      where: { evento_id: eventoId, instituicao_id: instituicaoId }
    });

    if (!eventoExiste) throw new Error('Evento não encontrado ou acesso negado');
    
    const dataToUpdate = {
        titulo: data.titulo,
        data: data.data,
        tipo: data.tipo,
        descricao: data.descricao,
        local_id: data.localId
    };

    const UpdatedEvento = await this.prisma.evento.update({
      where: { 
        evento_id_instituicao_id: {
          instituicao_id: instituicaoId,
          evento_id: eventoId
        }
      },
      data: {
        ...dataToUpdate
      }
    });

    return this.mapToDomain(UpdatedEvento);
  }

  async deleteById(instituicaoId: string, eventoId: string): Promise<void> {
    await this.prisma.evento.delete({
      where: {
        evento_id_instituicao_id: {
          evento_id: eventoId,
          instituicao_id: instituicaoId,
        },
      },
    });
  }

  // Helper para garantir o output correto
  private mapToDomain(evento: any): EventoDomain {
      return {
        eventoId: evento.evento_id,
        instituicaoId: evento.instituicao_id,
        titulo: evento.titulo,
        data: evento.data,
        tipo: evento.tipo,
        descricao: evento.descricao,
        localId: evento.local_id,
        localNome: evento.local?.nome,
        dataCriacao: evento.created_at,
        dataAtualizacao: evento.updated_at

      };
  }
}
