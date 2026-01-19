import { CreateInstituicaoDto } from "src/core/repositories/dtos/instituicao/CreateInstituicaoDto";
import { InstituicaoDomain } from "src/core/repositories/dtos/instituicao/InstituicaoDomain";
import { IInstituicaoRepository } from "src/core/repositories/IInstituicaoRepository";
import { Instituicao } from '../database/generated/prisma/client';
import { PrismaService } from "../database/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class InstituicaoRepository implements IInstituicaoRepository {

  constructor(private prisma: PrismaService){}

  async create(data: CreateInstituicaoDto): Promise<InstituicaoDomain> {
    const instituicao = await this.prisma.instituicao.create({ 
      data: {
        nome: data.nome,
        logo_url: data.logoUrl,
        mapa_url: data.mapaUrl
      }  
    });

    return this.mapToDomain(instituicao);
  }


  async findAll(): Promise<InstituicaoDomain[]> {
    const instituicoes = await this.prisma.instituicao.findMany();

    return instituicoes.map((instituicao) => this.mapToDomain(instituicao));
  }

  async findById(id: string): Promise<InstituicaoDomain | null> {
    const instituicao = await this.prisma.instituicao.findUnique({
      where: { instituicao_id: id}
    });

    if(!instituicao) return null;

    return this.mapToDomain(instituicao);
  }

  async findByNome(name: string): Promise<InstituicaoDomain | null> {
    const instituicao = await this.prisma.instituicao.findFirst({
      where: { nome: name }
    });

    if(!instituicao) return null;

    return this.mapToDomain(instituicao);
  }

  async updateById(id: string, data: InstituicaoDomain): Promise<InstituicaoDomain> {
    const dataToUpdate = {
      nome: data.nome,
      logo_url: data.logoUrl,
      mapa_url: data.mapaUrl
    }

    const updatedInstituicao = await this.prisma.instituicao.update({
      where: { instituicao_id: id },
      data: {
        ...dataToUpdate
      }
    });

    return this.mapToDomain(updatedInstituicao);
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.instituicao.delete({
      where: { instituicao_id: id }
    });
  }


  private mapToDomain(instituicao: Instituicao){
    return {
      instituicaoId: instituicao.instituicao_id,
      nome: instituicao.nome,
      logoUrl: instituicao.logo_url,
      mapaUrl: instituicao.mapa_url
    };
  }
}
