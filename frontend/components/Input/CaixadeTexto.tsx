import { useState } from "react";
import { Text, View, TextInput, StyleSheet} from "react-native";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";

export function CaixadeTexto() {

    const [texto, setTexto] = useState<string>("Defeito na placa e computador");
    const [fontsLoaded] = useFonts({ Anta_400Regular });

    const mudarTexto = (novoTexto: string) => {
        setTexto(novoTexto);
    };
   

    return (
        <View style={styles.container}>

            <Text style={styles.textoPrincipal}>Título da sugestão</Text>
            <TextInput style={styles.input} multiline numberOfLines={2} textAlignVertical="top" value={texto}
                onChangeText={mudarTexto} placeholder="Descreva o problema" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
    },
    textoPrincipal: {
        fontFamily:"Anta_400Regular",
        color: "rgb(5, 5, 5)",
        fontSize: 18,
        marginTop: 30,
        marginBottom: 8,
        textAlign: "auto",
    },
    input: {
        borderWidth: 1,
        borderColor: "rgba(82, 82, 91, 1)",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: "#000",
        width: 360,
    }
});