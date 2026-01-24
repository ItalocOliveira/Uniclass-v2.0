import { useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import { View, Text, StyleSheet } from "react-native";

export function Camerapermiss() {
  const [camera, setCamera] = useState<CameraType>("back");
  const [permissao, setPermissao] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermissao(status === "granted");
    })();
  }, []);

  if (permissao === null) {
    return <View />;
  }

  if (permissao === false) {
    return (
      <Text style={estilizar.textoPermissao}>
        "É necessário permissão da câmera!"
      </Text>
    );
  }
}

const estilizar = StyleSheet.create({
  textoPermissao: {
    color: "red",
    textAlign: "center",
    padding: 20,
  },
});
