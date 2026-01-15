import { IAvisoRepository } from 'src/core/repositories/IAvisoRepository';
import { AvisoDomain } from 'src/core/repositories/dtos/aviso/AvisoDomain';
import { CreateAvisoDto } from 'src/core/repositories/dtos/aviso/CreateAvisoDto';
import { UpdateAvisoDto } from 'src/core/repositories/dtos/aviso/UpdateAvisoDto';
import { Aviso } from '../database/generated/prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AvisoRepository implements IAvisoRepository {

    constructor(private prisma: PrismaService){}

    async findAll(): Promise<AvisoDomain[]> {
        const avisos = await this.prisma.aviso.findMany({
            orderBy: {data_criacao: 'asc'},
        });

        return avisos.map((aviso) => this.mapToDomain(aviso));
    }

    async findById(id: string): Promise<AvisoDomain | null> {
        const aviso = await this.prisma.aviso.findUnique({
            where: { aviso_id: id },
        })

        if(!aviso) return null;

        return this.mapToDomain(aviso);
    }

    async findByTitulo(instituicaoId: string, title: string): Promise<AvisoDomain | null> {
        const aviso = await this.prisma.aviso.findFirst({
            where: { 
                instituicao_id: instituicaoId,
                titulo: title
            }
        });

        if(!aviso) return null;

        return this.mapToDomain(aviso);
    }

    async create(data: CreateAvisoDto): Promise<AvisoDomain> {
        const aviso = await this.prisma.aviso.create({
            data: {
                instituicao_id: data.instituicaoId,
                curso_alvo: data.cursoAlvo,
                titulo: data.titulo,

                usuario_id: data.usuarioId ?? null,
                usuario_nome: data.usuarioNome ?? null,
                mensagem: data.mensagem ?? null,
                prioridade: data.prioridade ?? null,
            }
        });

        return this.mapToDomain(aviso);
    }

    async updateById(id: string, data: UpdateAvisoDto): Promise<AvisoDomain> {
        const dataToUpdate = {
            instituicao_id: data.instituicaoId,
            usuario_id: data.usuarioId,
            titulo: data.titulo,
            curso_alvo: data.cursoAlvo,
            usuario_nome: data.usuarioNome,
            mensagem: data.mensagem,
            prioridade: data.prioridade,
        }

        const updatedAviso = await this.prisma.aviso.update({
            where: { aviso_id: id },
            data: {
                ...dataToUpdate
            }
        });

        return this.mapToDomain(updatedAviso);
    }

    async deleteById(id: string): Promise<void> {
        await this.prisma.aviso.delete({
            where: { aviso_id: id },
        });
    }


    // Helper para garantir o output correto
    private mapToDomain(aviso: Aviso): AvisoDomain {
        return {
            avisoId: aviso.aviso_id,
            instituicaoId: aviso.instituicao_id,
            usuarioId: aviso.usuario_id,
            usuarioNome: aviso.usuario_nome,
            titulo: aviso.titulo,
            mensagem: aviso.mensagem,
            dataCriacao: aviso.data_criacao,
            prioridade: aviso.prioridade,
            cursoAlvo: aviso.curso_alvo,
        };
    }
}

