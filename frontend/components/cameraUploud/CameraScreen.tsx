import { useRef, useState } from "react";
import { View, Text, StyleSheet, Pressable, Image, } from "react-native";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";

export function Camerapermiss() {
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
      <View>
        <Image source={{ uri: fotoUrl }} style={styles.image} />

        <Pressable style={styles.botaoTiraFoto} onPress={() => setFotoUrl(null)}>
          <Text style={styles.textoBotao}>Tirar outra foto</Text>
        </Pressable>
      </View>
    );
  }

  //  Senão, mostra a câmera
  return (
    <View style={{ flex: 1 }}>
      <CameraView ref={cameraRef} style={{ flex: 1 }} facing={camera} />
      <Pressable style={styles.botaoTiraFoto} onPress={tirarFoto}>
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
    paddingTop: 50,
  },

  texto: {
    textAlign: "center",
    marginTop: 20,
    color: "red",
    fontSize: 18,
    fontFamily:"Anta_400Regular",
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 2,

  },


  botaoTiraFoto: {
    position: "absolute",
    marginTop: 250,
    alignSelf: "center",
    backgroundColor: "#ffffff45",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    fontFamily:"Anta_400Regular",

  },

  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontFamily:"Anta_400Regular",
  },
});

