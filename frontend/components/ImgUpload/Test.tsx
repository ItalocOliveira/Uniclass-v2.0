import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";

export function Camerapermiss2() {
  const cameraRef = useRef<CameraView>(null);
  const [foto, setFoto] = useState<string | null>(null);
  const [camera] = useState<CameraType>("back");
  const [permissao, solicitarPermission] = useCameraPermissions();

  // Enquanto carrega permissões
  if (!permissao) {
    return <View />;
  }

  // Se NÃO tem permissão
  if (!permissao.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Precisamos da permissão da câmera!
        </Text>

        <Pressable
          style={styles.botao}
          onPress={async () => {
            await solicitarPermission();
          }}
        >
          <Text style={styles.textoBotao}>Permitir câmera</Text>
        </Pressable>
      </View>
    );
  }

  // Tirar foto (COM VERIFICAÇÃO)
  const tirarFoto = async () => {
    if (!cameraRef.current) return;

    const photo = await cameraRef.current.takePictureAsync({
      quality: 1,
      skipProcessing: true,
    });

    if (photo?.uri) {
      setFoto(photo.uri);
    }
  };

  // 👉 PRÉ-VISUALIZAÇÃO
  if (foto) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: foto }} style={styles.image} />

        <Pressable style={styles.botao} onPress={() => setFoto(null)}>
          <Text style={styles.textoBotao}>Tirar outra foto</Text>
        </Pressable>
      </View>
    );
  }

  // 👉 CÂMERA
  return (
    <View style={{ flex: 1 }}>
      <CameraView
        ref={cameraRef}
        style={{ flex: 1 }}
        facing={camera}
        mode="picture"   // 🔥 ISSO É O PONTO CHAVE
      />

      <Pressable style={styles.botaoCamera} onPress={tirarFoto}>
        <Text style={styles.textoBotao}>Tirar foto</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  texto: {
    textAlign: "center",
    marginBottom: 20,
    color: "red",
    fontSize: 16,
  },

  image: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },

  botaoCamera: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    backgroundColor: "#000",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 30,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
  },
});
