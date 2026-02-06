import { useState } from "react";
import { Alert, Pressable, Image, View, StyleSheet, Text } from "react-native";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import * as ImagePicker from 'expo-image-picker';

export function Galeria() {
  const [image, setImage] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({ Anta_400Regular });

  const escolhaImagem = async () => {

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('É necessária permissão', 'É preciso permissão para acessar a biblioteca de mídia.');
      return;
    }

    let resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      quality: 1,
    });

    console.log(resultado);

    if (!resultado.canceled) {
      setImage(resultado.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>

      <Pressable onPress={escolhaImagem}
        style={({ pressed }) => [styles.botao,
        {
          opacity: pressed ? 0.6 : 1,
          transform: [{ scale: pressed ? 0.97 : 1 }],
        },
        ]}
      >
        <Text style={styles.textoBotao}>+ Adicionar imagem</Text>
      </Pressable>

      <View style={styles.Quadro}>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,

  },
  botao: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#0f0c0c",
    paddingVertical: 25,
    paddingHorizontal: 50,
    marginTop: 50,
    opacity: 0.6,
  },
  textoBotao: {
    color: "#0d0a0a",
    fontFamily: "Anta_400Regular",
    fontSize: 20,
  },
  Quadro: {
    marginTop: 20,
  },

});
