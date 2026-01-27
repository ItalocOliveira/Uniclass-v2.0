import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { PrismaService } from './infra/database/prisma/prisma.service';

@Module({
    imports: [ConfigModule.forRoot({
        isGlobal: true,
    }), DatabaseModule],
    controllers: [],
    providers: [PrismaService],
})
export class AppModule {}
