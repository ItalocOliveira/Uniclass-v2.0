import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, TouchableOpacity } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export function Test() {
  const cameraRef = useRef<CameraView>(null);
  const [foto, setFoto] = useState<string | null>(null);
  const [camera, setCamera] = useState<CameraType>("back");
  const [permissao, solicitarPermission] = useCameraPermissions();

  // Bloco de Permissão
  if (!permissao) {
    return <View style={styles.container} />;
  }

  if (!permissao.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Precisamos da permissão da câmera!</Text>
        <TouchableOpacity style={styles.botao} onPress={solicitarPermission}>
          <Text style={styles.textoBotao}>Conceder Permissão</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Função para tirar foto
  const tirarFoto = async () => {
    if (cameraRef.current) {
      const dadosDaFoto = await cameraRef.current.takePictureAsync();
      if (dadosDaFoto?.uri) {
        setFoto(dadosDaFoto.uri);
      }
    }
  };

  // Se já tirou foto, mostra a imagem
  if (foto) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: foto }} style={styles.fullImage} />
        <View style={styles.overlayBotoes}>
          <Pressable style={styles.botao} onPress={() => setFoto(null)}>
            <Text style={styles.textoBotao}>Tirar outra foto</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  // Layout da Câmera (Aqui você verá o que está filmando)
  return (
    <View style={styles.container}>
      <CameraView 
        ref={cameraRef} 
        style={styles.camera} 
        facing={camera}
      >
        {/* Camada por cima da câmera para os controles */}
        <View style={styles.cameraContent}>
          <Pressable style={styles.botaoTirar} onPress={tirarFoto}>
            <View style={styles.circuloInterno} />
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  cameraContent: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 40,
    alignItems: "flex-end",
  },
  texto: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 20,
  },
  fullImage: {
    flex: 1,
    resizeMode: "cover",
  },
  overlayBotoes: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignItems: "center",
  },
  botao: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  textoBotao: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoTirar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  circuloInterno: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
  },
});