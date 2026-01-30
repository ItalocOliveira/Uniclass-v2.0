import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LocalRepository } from '../repositories/LocalRepository';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import { InstituicaoRepository } from '../repositories/InstituicaoRepository';
import { EventoRepository } from '../repositories/EventoRepository';
import { SugestaoRepository } from '../repositories/SugestaoRepository';
import { AvisoRepository } from '../repositories/AvisoRepository';

@Global()
@Module({
    providers: [
        PrismaService,
        {
            provide: 'ILocalRepository',
            useClass: LocalRepository,
        },
        {
            provide: 'IUsuarioRepository', 
            useClass: UsuarioRepository,   
        },
        {
            provide: 'IInstituicaoRepository',
            useClass: InstituicaoRepository, 
        },
        {
            provide: 'IEventoRepository',
            useClass: EventoRepository, 
        },
        {
            provide: 'ISugestaoRepository',
            useClass: SugestaoRepository, 
        },
        {
            provide: 'IAvisoRepository',
            useClass: AvisoRepository, 
        },
    ],
    exports: [
        PrismaService,
        'ILocalRepository',
        'IUsuarioRepository',
        'IInstituicaoRepository',
        'IEventoRepository',
        'ISugestaoRepository',
        'IAvisoRepository',
    ],
})
export class DatabaseModule {}
