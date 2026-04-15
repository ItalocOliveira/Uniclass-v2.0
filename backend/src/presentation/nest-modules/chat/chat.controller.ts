import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { CreatePerguntaDto } from 'src/presentation/dtos/chat/CreatePerguntaDto';

@Controller('chat')
export class ChatController {
    
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

            // Verifica se a resposta da rede foi bem sucedida
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const dataIA = await response.json();
            const duration = (Date.now() - start) / 1000;
            
            console.log(`[${timestamp}] ✅ [NEST] Resposta recebida do Python em ${duration}s`);
            return { resposta: dataIA.resposta };

        } catch (error) {
            // Resolvendo o erro de 'unknown' com uma verificação de tipo
            const errorMessage = error instanceof Error ? error.message : String(error);
            
            console.error(`[${timestamp}] ❌ [NEST ERROR] Falha na comunicação com Python:`, errorMessage);
            
            return { 
                resposta: "O assistente está offline ou o tempo de resposta excedeu o limite." 
            };
        }
    }
}