import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { CaixaDeTexto } from "../../components/Input/CaixadeTexto";
import { Descricao } from "../../components/Input/Descricao";
import { CameraPer } from "../../components/cameraUpload/CameraScreen";
import { Botao } from "../../components/button/Botao";
import { Footer } from "../../components/footer";
import { useState } from "react";
import { Header } from "../../components/Header/Header";

export default function Sugestao() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  // precisa do token da tela de login
  const tokenArmazenado = "";

  const enviar = async () => {
    const url = "http://26.175.52.125:3000/sugestoes";

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("tipo", "CONSERTO");
    formData.append("status", "PENDENTE");
    formData.append("descricao", descricao);
    formData.append("mapaXY", JSON.stringify({ x: 1, y: 1 }));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenArmazenado}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log("Resposta:", data);
      Alert.alert("Sucesso", "Sugestão enviada!");
    } catch (error) {
      console.error("Erro no fetch:", error);
      Alert.alert(
        "Erro",
        "Verifique se o servidor está ligado no IP correto"
      );
    }
  };

  const cancelar = () => {
    console.log("Cancelar");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Header />
      </View>
      {/* CONTEÚDO QUE ROLA */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container2}>
          <View style={styles.caixa}>
            <CaixaDeTexto valor={titulo} onChange={setTitulo} />
          </View>

          <View style={styles.container_da_foto}>
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

      {/* FOOTER FIXO */}
      <View style={styles.footer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 150, // espaço para não esconder conteúdo atrás do footer
  },

  container2: {
    justifyContent: "center",
    alignItems: "center",
  },

  container_da_foto: {
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

  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    zIndex: 10, // Garante que o header fique visualmente acima de qualquer outro elemento
    elevation: 5, // Sombra para Android para destacar a prioridade
  },
});
