import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { CaixaDeTexto } from "../../components/Input/CaixaDeTexto";
import { Descricao } from "../../components/Input/Descricao";
import { CameraPer } from "../../components/cameraUpload/CameraScreen";
import { Botao } from "../../components/button/Botao";
import { useState } from "react";

export default function Sugestao() {

const [titulo, setTitulo] = useState("");
const [descricao, setDescricao] = useState("");

const tokenArmazenado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTFhMjVhZi1jYWI5LTQ1MWItYmQxMi1jMGQwM2YzYzQ3YjkiLCJlbWFpbCI6ImFkbWluLWFhNzM2MTk3LWQ0Y2YtNDM1Mi1iNmZlLWQ3Y2NiZTE0NjMyMkB1bmljbGFzcy5jb20iLCJub21lIjoiQWRtaW4gU3VwcmVtbyIsImluc3RpdHVpY2FvSWQiOiJhYTczNjE5Ny1kNGNmLTQzNTItYjZmZS1kN2NjYmUxNDYzMjIiLCJyb2xlIjoiQURNSU4iLCJjdXJzbyI6bnVsbCwiaWF0IjoxNzY5ODMxNTg0LCJleHAiOjE3Njk5MTc5ODR9.yKxz6LplKZru05f1Ugqr5EjyLiqWIE3uRz-jMZqspvw';

const enviar = async () => {
  // 1. Use o IP da sua máquina ou '10.0.2.2' se for emulador Android
  const url = "http://26.175.52.125:3000/sugestoes"; 

  // 2. Para enviar FOTO + TEXTO, usamos FormData
  const formData = new FormData();
  formData.append("titulo", titulo);
    formData.append("tipo", "CONSERTO");
    formData.append("status", "PENDENTE");
    formData.append("descricao", descricao);
    formData.append("mapaXY", JSON.stringify({ x: 1, y: 1 }));
  
  // Adicionando a foto (supondo que você tenha o URI da imagem)
  // if (imagemUri) {
  //   formData.append("foto", {
  //     uri: imagemUri,
  //     name: "foto.jpg",
  //     type: "image/jpeg",
  //   } as any);
  // }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${tokenArmazenado}`, 
      },
      body: formData,
    });

    const data = await response.json();
    console.log("Resposta:", data);
    Alert.alert("Sucesso", "Sugestão enviada!");
  } catch (error) {
    console.error("Erro no fetch:", error);
    Alert.alert("Erro", "Verifique se o servidor está ligado no IP correto");
  }
};

  const cancelar = () => {
    console.log("Cancelar");
  };

  return (
    <ScrollView>
      <View style={styles.container1}>
        <View style={styles.caixa}>
          {/* 3. Passe o estado e a função para os filhos */}
          <CaixaDeTexto valor={titulo} onChange={setTitulo} />
        </View>

        <View style={styles.container}>
          <CameraPer />
        </View>

        <View style={styles.caixa2}>
          <Descricao valor={descricao} onChange={setDescricao} />
        </View>

        <View style={styles.botaos}>
          <Botao
            titulo="Cancelar"
            corTexto="rgba(3, 54, 106, 1)"
            cor="rgba(221, 226, 239, 1)"
            onPress={cancelar}
          />
          <Botao
            titulo="Enviar"
            corTexto="#ffffff"
            cor="rgba(3, 54, 106, 1)"
            onPress={enviar}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: 300,
    height: 300,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#08080824",
  },
  caixa: {
    marginBottom: 10,
  },
  caixa2: {
    marginTop: 20,
  },
  botaos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
});