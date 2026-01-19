import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,            // Remove campos que não estão no DTO (segurança)
        forbidNonWhitelisted: true, // Dá erro se o front mandar campos que não existem
        transform: true,            // Transforma Strings em Números/Datas automaticamente (@Type)
    }));

    // Habilita CORS (Essencial para seu App Mobile conectar no Backend)
    app.enableCors();

    // Define a porta (padrão 3000 ou o que estiver no .env)
    await app.listen(process.env.PORT || 3000);
    console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();