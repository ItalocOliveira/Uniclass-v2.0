import { Controller, Post, Body, HttpCode, UseGuards } from '@nestjs/common';
import { CreatePerguntaDto } from 'src/presentation/dtos/chat/CreatePerguntaDto';

@Controller('chat')
export class ChatController {
    
    // chat.controller.ts
    @Post('perguntar')
    @HttpCode(200)
    async perguntar(@Body() data: CreatePerguntaDto) {
        const { pergunta } = data;
        
        const timestamp = new Date().toLocaleTimeString();
        console.log(`[${timestamp}] 🚀 [NEST] Recebido do Front: "${pergunta}"`);

        try {
            console.log(`[${timestamp}] 📡 [NEST] Enviando para Python (Porta 5000)...`);
            
            // Timer para medir latência
            const start = Date.now();
            
            const response = await fetch('http://127.0.0.1:5000/ask', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pergunta }),
            });

            const dataIA = await response.json();
            const duration = (Date.now() - start) / 1000;
            
            console.log(`[${timestamp}] ✅ [NEST] Resposta recebida do Python em ${duration}s`);
            return { resposta: dataIA.resposta };

        } catch (error) {
            console.error(`[${timestamp}] ❌ [NEST ERROR] Falha na comunicação com Python:`, error.message);
            return { resposta: "O assistente está offline ou o tempo de resposta excedeu o limite." };
        }
    }
}