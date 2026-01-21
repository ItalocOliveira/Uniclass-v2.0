import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        // Remove campos que não estão no DTO
        whitelist: true,       
        // Dá erro se o front mandar campos que não existem     
        forbidNonWhitelisted: false,
        // Transforma string em números/datas @Type 
        transform: true,            
    }));

    // Habilita o CORS (Para o app mobile conectar no Backend)
    app.enableCors();

    await app.listen(process.env.PORT || 3000, '0.0.0.0');
    console.log(`Essa aplicação está rodando em: ${await app.getUrl()}`);
}
bootstrap();