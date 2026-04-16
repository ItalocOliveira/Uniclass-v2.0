import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";

type DescricaoProps = {
  value?: string;
  onChangeText?: (text: string) => void;
};

export function Descricao({ value, onChangeText }: DescricaoProps) {
  const [internal, setInternal] = useState("");
  const texto = value !== undefined ? value : internal;
  const mudarTexto = (novoTexto: string) => {
    if (onChangeText) onChangeText(novoTexto);
    else setInternal(novoTexto);
  };

  const [fontsLoaded] = useFonts({ Anta_400Regular });

  if (!fontsLoaded) return null;

  return (
    <View style={{ width: "100%" }}>
      <Text style={style.descricao}>Descrição da sugestão</Text>

      <View style={style.container}>
        <TextInput
          style={style.input}
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          value={texto}
          onChangeText={mudarTexto}
          placeholder="Descreva sua ideia ou problema..."
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 4,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(82, 82, 91, 0.35)",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    color: "#000",
    minHeight: 120,
    backgroundColor: "#fafafa",
  },
  descricao: {
    fontFamily: "Anta_400Regular",
    fontSize: 15,
    color: "#03366A",
    marginBottom: 8,
    fontWeight: "600",
  },
});
