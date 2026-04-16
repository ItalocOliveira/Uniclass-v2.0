import { Anta_400Regular, useFonts } from "@expo-google-fonts/anta";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export function CameraPer() {
  const cameraRef = useRef<CameraView>(null);
  const [fotoUrl, setFotoUrl] = useState<string | null>(null);
  const [camera, setCamera] = useState<CameraType>("back");
  const [permissao, solicitarPermission] = useCameraPermissions();
  const [fontsLoaded] = useFonts({ Anta_400Regular });
  //Bloco  de Permissão
  if (!permissao)
    return (<View />
    );

  if (!permissao.granted) {
    return (

      <View >
        <Text style={styles.texto}>Precisamos da permissão da câmera!</Text>

      </View>
    );
  }
  /* <Pressable onPress={solicitarPermission}>
          <Text>Permissão</Text>
        </Pressable> */

  //Bloco onde tira a foto  e verifica se a foto existe com uri 
  const tirarFoto = async () => {
    const dadosDaFoto = await cameraRef.current?.takePictureAsync();
    if (dadosDaFoto?.uri) {
      setFotoUrl(dadosDaFoto.uri);
    }
  };

  // Se já tirou foto, mostra a imagem e troca de camera para imagem
  if (fotoUrl) {
    return (
      <View style={styles.rootCamera}>
        <Image
          source={{ uri: fotoUrl }}
          style={styles.previewImage}
          resizeMode="cover"
        />

        <Pressable
          style={({ pressed }) => [styles.botaoTiraFoto, pressed && { opacity: 0.85 }]}
          onPress={() => setFotoUrl(null)}
        >
          <Text style={styles.textoBotao}>Tirar outra foto</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.rootCamera}>
      <CameraView ref={cameraRef} style={styles.cameraFill} facing={camera} />
      <Pressable
        style={({ pressed }) => [styles.botaoTiraFoto, pressed && { opacity: 0.85 }]}
        onPress={tirarFoto}
      >
        <Text style={styles.textoBotao}>Tirar foto</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  rootCamera: {
    flex: 1,
    width: "100%",
    minHeight: 200,
    overflow: "hidden",
    borderRadius: 12,
    position: "relative",
  },
  cameraFill: {
    flex: 1,
    width: "100%",
  },
  previewImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
  },

  texto: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
    fontSize: 18,
    fontFamily: "Anta_400Regular",
  },

  /** Sempre acima da borda inferior do container (antes: marginTop:250 cortava com overflow) */
  botaoTiraFoto: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 0.35)",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    fontFamily: "Anta_400Regular",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Anta_400Regular",
  },
});

