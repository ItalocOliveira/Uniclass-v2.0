import { EventoDomain } from './dtos/evento/EventoDomain'
import { CreateEventoDto } from './dtos/evento/CreateEventoDto'

export interface IEventoRepository {
  findAll(): Promise<EventoDomain[]>
  findById(id: string): Promise<EventoDomain | null>
  create(data: CreateEventoDto): Promise<EventoDomain>
  updateById(id: string, data: EventoDomain): Promise<EventoDomain>
  deleteById(id: string): Promise<void>
}
