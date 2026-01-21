import { EventoDomain } from '../entities/EventoDomain';
import { CreateEventoDto } from './dtos/evento/CreateEventoDto';
import { UpdateEventoDto } from './dtos/evento/UpdateEventoDto';

export interface IEventoRepository {
  findAll(instituicaoId: string): Promise<EventoDomain[]>;
  findById(instituicaoId: string, EventoId: string): Promise<EventoDomain | null>;
  create(data: CreateEventoDto): Promise<EventoDomain>;
  updateById(instituicaoId: string, eventoId: string, data: UpdateEventoDto): Promise<EventoDomain>;
  deleteById(instituicaoId: string, eventoId: string): Promise<void>;


  findByTitulo(instituicaoId: string, titulo: string): Promise<EventoDomain | null>;
  findByLocalAndData(instituicaoId: string, localId: string, data: Date | string): Promise<EventoDomain | null>;
  findAllUpcoming(instituicaoId: string): Promise<EventoDomain[]>
}
