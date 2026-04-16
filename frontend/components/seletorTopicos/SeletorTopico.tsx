import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Anta_400Regular, useFonts } from "@expo-google-fonts/anta";


export function Seletor() {
  const [topico, setTopico] = useState("CONSERTO");

  return (
    <View style={styles.container}>
      <Picker style={styles.picker}
        selectedValue={topico}
        onValueChange={setTopico}
      >
       
        <Picker.Item key={1} value={"CONSERTO"} label={"CONSERTO"} />
        <Picker.Item key={2} value={"REPOSICAO_MATERIAL"} label={"REPOSICAO MATERIAL"} />
        <Picker.Item key={3} value={"INSTALACAO"} label={"INSTALACAO"} />
        <Picker.Item key={4} value={"ATUALIZACAO"} label={"ATUALIZACAO"} />
        <Picker.Item key={5} value={"SUPORTE_TECNICO"} label={"SUPORTE TECNICO"} />
       
      </Picker>

      {/* <Text>Você selecionou: {topico}</Text>*/}
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "stretch",


  },
  picker: {
    width: "100%",
    height: 48,
    borderBlockColor: "#e7e7e7",
    fontFamily: "Anta_400Regular",
    borderRadius: 12,
    paddingHorizontal: 8,
    borderColor: "rgba(8,8,8,0.14)",
    borderWidth: 1,
    backgroundColor: "#fafafa",
  },
 

});
