import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

export default function ChatIA() {
  const [pergunta, setPergunta] = useState('');
  // Estado da conversa com tipagem literal para evitar o erro de string
  const [conversa, setConversa] = useState<{ tipo: 'user' | 'ia', texto: string }[]>([]);
  // 1. ADICIONADO: Estado para o carregamento
  const [digitando, setDigitando] = useState(false);
  
  // 2. ADICIONADO: Referência para o ScrollView
  const scrollViewRef = useRef<ScrollView>(null);

  const enviarPergunta = async () => {
    if (!pergunta.trim()) return;

    // Criamos o objeto do usuário com "as const" para o TypeScript não reclamar
    const mensagemUsuario = { tipo: 'user' as const, texto: pergunta.trim() };
    const novaConversa = [...conversa, mensagemUsuario];
    
    setConversa(novaConversa);
    setPergunta('');
    setDigitando(true); // Inicia o "IA pensando..."

    try {
      // TROQUE PELO SEU IP LOCAL (ex: 192.168.0.109)
      const response = await fetch('http://26.175.52.125:3000/chat/perguntar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pergunta: mensagemUsuario.texto }),
      });

      const data = await response.json();
      
      const mensagemIA = { tipo: 'ia' as const, texto: data.resposta };
      setConversa([...novaConversa, mensagemIA]);
    } catch (e) {
      setConversa([...novaConversa, { tipo: 'ia' as const, texto: "Erro ao conectar no servidor. Verifique se o NestJS e o Python estão rodando." }]);
    } finally {
      setDigitando(false); // Para o carregamento
    }
  };

  return (
    <View style={styles.container}>
      {/* 3. ADICIONADO: ScrollView com auto-scroll no final */}
      <ScrollView 
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        style={styles.chatBox}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {conversa.map((item, index) => (
          <View key={index} style={[styles.balao, item.tipo === 'user' ? styles.user : styles.ia]}>
            <Text style={item.tipo === 'user' ? styles.textoBranco : styles.textoPreto}>
              {item.texto}
            </Text>
          </View>
        ))}

        {/* Indicador visual de que a IA está processando */}
        {digitando && (
          <View style={[styles.balao, styles.ia, { flexDirection: 'row', alignItems: 'center' }]}>
            <ActivityIndicator size="small" color="#03366a" />
            <Text style={[styles.textoPreto, { marginLeft: 8, fontStyle: 'italic' }]}>
              Uniclass está consultando o manual...
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.inputArea}>
        <TextInput 
          style={styles.input} 
          value={pergunta} 
          onChangeText={setPergunta} 
          placeholder="Tire sua dúvida acadêmica..."
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={enviarPergunta} style={styles.botao} disabled={digitando}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  chatBox: { flex: 1, padding: 15 },
  balao: { 
    padding: 12, 
    borderRadius: 15, 
    marginBottom: 10, 
    maxWidth: '85%',
    elevation: 1, // Sombra leve no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  user: { 
    alignSelf: 'flex-end', 
    backgroundColor: 'rgba(3, 54, 106, 1)', // Azul do Uniclass
    borderBottomRightRadius: 2,
  },
  ia: { 
    alignSelf: 'flex-start', 
    backgroundColor: '#fff', 
    borderBottomLeftRadius: 2,
    borderWidth: 1,
    borderColor: '#e1e1e1'
  },
  textoBranco: { color: '#fff', fontSize: 15 },
  textoPreto: { color: '#333', fontSize: 15 },
  inputArea: { 
    flexDirection: 'row', 
    padding: 15, 
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  input: { 
    flex: 1, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 25, 
    paddingHorizontal: 20, 
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd'
  },
  botao: { 
    marginLeft: 10, 
    backgroundColor: 'rgba(3, 54, 106, 1)', 
    paddingHorizontal: 20, 
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: { color: '#fff', fontWeight: 'bold' }
});