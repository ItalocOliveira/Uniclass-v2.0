import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LocalRepository } from '../repositories/LocalRepository';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import { InstituicaoRepository } from '../repositories/InstituicaoRepository';

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
        }
    ],
    exports: [
        PrismaService,
        'ILocalRepository',
        'IUsuarioRepository',
        'IInstituicaoRepository'
    ],
})
export class DatabaseModule {}
