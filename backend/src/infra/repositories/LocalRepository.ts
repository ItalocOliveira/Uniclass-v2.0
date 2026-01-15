import { prisma } from '../database/prisma/prisma'
import { ILocalRepository } from 'src/core/repositories/ILocalRepository'
import { LocalDomain } from 'src/core/repositories/dtos/local/LocalDomain'
import { CreateLocalDto } from 'src/core/repositories/dtos/local/CreateLocalDto'
import { UpdateLocalDto } from 'src/core/repositories/dtos/local/UpdateLocalDto'

export class LocalRepository implements ILocalRepository {
  async findAll(): Promise<LocalDomain[]> {
    const locais = await prisma.local.findMany({
      orderBy: { nome: 'asc' },
    })

    return locais.map((local) => this.mapToDomain(local))
  }

  async findById(id: string): Promise<LocalDomain | null> {
    const local = await prisma.local.findUnique({
      where: { local_id: id },
    })

    if (!local) return null

    return this.mapToDomain(local)
  }

  async create(data: CreateLocalDto): Promise<LocalDomain> {
    const local = await prisma.local.create({
      data: {
        instituicao_id: data.instituicaoId,
        nome: data.nome,
        tipo: data.tipo ?? null,
        bloco: data.bloco ?? null,
        coordenadas: data.coordenadas ?? null,
        mapa_xy: data.mapaXY ?? null,
        acessivel: data.acessivel ?? false,
      },
    })

    return this.mapToDomain(local)
  }

  async updateById(id: string, data: UpdateLocalDto): Promise<LocalDomain> {
    const dataToUpdate = {
      instituicao_id: data.instituicaoId,
      nome: data.nome,
      tipo: data.tipo ?? null,
      bloco: data.bloco ?? null,
      coordenadas: data.coordenadas ?? null,
      mapa_xy: data.mapaXY ?? null,
      acessivel: data.acessivel ?? false,
    }

    const updatedLocal = await prisma.local.update({
      where: { local_id: id },
      data: { ...dataToUpdate },
    })

    return this.mapToDomain(updatedLocal)
  }

  async deleteById(id: string): Promise<void> {
    await prisma.local.delete({
      where: { local_id: id },
    })
  }

  private mapToDomain(local: any): LocalDomain {
    return {
      localId: local.local_id,
      instituicaoId: local.instituicao_id,
      nome: local.nome,
      tipo: local.tipo ?? null,
      bloco: local.bloco ?? null,
      coordenadas: local.coordenadas ?? null,
      mapaXY: local.mapa_xy ?? null,
      acessivel: local.acessivel ?? false,
    }
  }
}
