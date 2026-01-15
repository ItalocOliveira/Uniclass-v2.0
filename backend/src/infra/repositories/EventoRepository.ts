import { prisma } from 'src/infra/database/prisma/prisma'
import { IEventoRepository } from 'src/core/repositories/IEventoRepository'
import { EventoDomain } from 'src/core/repositories/dtos/evento/EventoDomain'
import { CreateEventoDto } from 'src/core/repositories/dtos/evento/CreateEventoDto'
import { UpdateEventoDto } from 'src/core/repositories/dtos/evento/UpdateEventoDto'
import { Evento } from '../database/prisma/generated/prisma/client'

export class EventoRepository implements IEventoRepository {
  async findAll(): Promise<EventoDomain[]> {
    const eventos = await prisma.evento.findMany();

    return eventos.map((evento) => this.mapToDomain(evento));
  }

  async findById(id: string): Promise<EventoDomain | null> {
    const evento = await prisma.evento.findUnique({
      where: { evento_id: id },
    })

    if(!evento) return null;

    return this.mapToDomain(evento);
  }

  async create(data: CreateEventoDto): Promise<EventoDomain> {

    const evento = await prisma.evento.create({ 
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

  async updateById(id: string, data: UpdateEventoDto): Promise<EventoDomain> {
    const dataToUpdate = {
        instituicao_id: data.instituicaoId,
        titulo: data.titulo,
        data: data.data,
        tipo: data.tipo,
        descricao: data.descricao,
        local_id: data.localId
    };

    const UpdatedEvento = await prisma.evento.update({
      where: { evento_id: id },
      data: {
        ...dataToUpdate
      }
    });

    return this.mapToDomain(UpdatedEvento);
  }

  async deleteById(id: string): Promise<void> {
    await prisma.evento.delete({
      where: { evento_id: id },
    })
  }


  // Helper para garantir o output correto
    private mapToDomain(evento: Evento): EventoDomain {
        return {
          eventoId: evento.evento_id,
          instituicaoId: evento.instituicao_id,
          titulo: evento.titulo,
          data: evento.data,
          tipo: evento.tipo,
          descricao: evento.descricao,
          localId: evento.local_id
        };
    }
}
