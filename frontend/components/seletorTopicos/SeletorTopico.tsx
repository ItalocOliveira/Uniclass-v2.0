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
        <View style={styles.item}>
        <Picker.Item key={1} value={"CONSERTO"} label={"CONSERTO"} />
        <Picker.Item key={2} value={"REPOSICAO_MATERIAL"} label={"REPOSICAO MATERIAL"} />
        <Picker.Item key={3} value={"INSTALACAO"} label={"INSTALACAO"} />
        <Picker.Item key={4} value={"ATUALIZACAO"} label={"ATUALIZACAO"} />
        <Picker.Item key={5} value={"SUPORTE_TECNICO"} label={"SUPORTE TECNICO"} />
        </View>
      </Picker>

      {/* <Text>Você selecionou: {topico}</Text>*/}
    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',




  },
  picker: {
    width: 300,
    height: 50,
    borderBlockColor: "#e7e7e7",
    fontFamily: "Anta_400Regular",
    borderRadius: 12,
    paddingHorizontal: 10,
    borderColor:"#08080824",
    borderWidth: 5,


  },
  item: {
    borderRadius: 12,

  },

});
