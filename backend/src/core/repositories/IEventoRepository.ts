import { EventoDomain } from '../entities/EventoDomain';
import { CreateEventoDto } from './dtos/evento/CreateEventoDto';
import { UpdateEventoDto } from './dtos/evento/UpdateEventoDto';

export interface IEventoRepository {
  findAll(): Promise<EventoDomain[]>;
  findById(id: string): Promise<EventoDomain | null>;
  create(data: CreateEventoDto): Promise<EventoDomain>;
  updateById(id: string, data: UpdateEventoDto): Promise<EventoDomain>;
  deleteById(id: string): Promise<void>;


  findByTitulo(instituicaoId: string, titulo: string): Promise<EventoDomain | null>;
  findByLocalAndData(localId: string, data: Date | string): Promise<EventoDomain | null>;
}
