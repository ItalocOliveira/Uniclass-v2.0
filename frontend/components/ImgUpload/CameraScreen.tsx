import React, { useState } from 'react';
import { View,  Pressable, Text, Image, StyleSheet } from 'react-native';
import { launchCamera, ImagePickerResponse } from 'react-native-image-picker';
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";


export function CameraScreen() {
  const [foto, setPhoto] = useState<string | null>(null);
  const [fontsLoaded] = useFonts({ Anta_400Regular });
   

  const tirarFoto = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
        saveToPhotos: true,
      },
      (respostaDAcamera: ImagePickerResponse) => {
        if (respostaDAcamera.didCancel) return;
        if (respostaDAcamera.errorCode) return;

        if (respostaDAcamera.assets && respostaDAcamera.assets.length > 0) {
          const uri = respostaDAcamera.assets[0].uri;
          if (uri) {
            setPhoto(uri);
          }
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={tirarFoto}>
    <Text style={styles.botao}> + Adicionar imagem</Text>
    </Pressable>

      {foto && (
        <Image
          source={{ uri: foto }}
          style={styles.image}
        />
      )}
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    
   
  },
  botao: {
    marginTop:5,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "rgb(0, 0, 0)",
    backgroundColor: 'rgb(255, 255, 255)',
    fontFamily:" Anta_400Regular",

  },
  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 10,
  },

});
