import { Injectable, Logger } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor() {
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL as string,
        });
        super({ adapter });
    }

    async onModuleInit() {
        try{
            await this.$connect();
            Logger.log('Database connection established');
        }
        catch(error){
            Logger.error('Database connection failed', error);
            throw error;
        }
    }
    
    async onModuleDestroy() {
        await this.$disconnect();
    }
}