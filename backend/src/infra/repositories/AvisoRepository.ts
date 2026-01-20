import { IAvisoRepository } from 'src/core/repositories/IAvisoRepository';
import { AvisoDomain } from 'src/core/entities/AvisoDomain';
import { CreateAvisoDto } from 'src/core/repositories/dtos/aviso/CreateAvisoDto';
import { UpdateAvisoDto } from 'src/core/repositories/dtos/aviso/UpdateAvisoDto';
import { Aviso } from '@prisma/client';
import { PrismaService } from '../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AvisoRepository implements IAvisoRepository {

    constructor(private prisma: PrismaService){}

    async findAll(instituicaoId: string): Promise<AvisoDomain[]> {
        const avisos = await this.prisma.aviso.findMany({
            where: { instituicao_id: instituicaoId},
            orderBy: {created_at: 'asc'},
        });

        return avisos.map((aviso) => this.mapToDomain(aviso));
    }

    async findById(instituicaoId: string, avisoId: string): Promise<AvisoDomain | null> {
        const aviso = await this.prisma.aviso.findUnique({
            where: { 
                instituicao_id: instituicaoId,
                aviso_id: avisoId
            },
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

    async updateById(instituicaoId: string, avisoId: string, data: UpdateAvisoDto): Promise<AvisoDomain> {
        const dataToUpdate = {
            instituicao_id: instituicaoId,
            usuario_id: data.usuarioId,
            titulo: data.titulo,
            curso_alvo: data.cursoAlvo,
            usuario_nome: data.usuarioNome,
            mensagem: data.mensagem,
            prioridade: data.prioridade,
        }

        const updatedAviso = await this.prisma.aviso.update({
            where: { 
                instituicao_id: instituicaoId,
                aviso_id: avisoId 
            },
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
            dataCriacao: aviso.created_at,
            dataAtualizacao: aviso.updated_at,
            prioridade: aviso.prioridade,
            cursoAlvo: aviso.curso_alvo,
        };
    }
}

