import { useState } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
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
             onChangeText={mudarTexto} placeholder="Descreva o problema"/>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        paddingHorizontal: 10,
    },
    textoPrincipal: {
        color: "rgba(82, 82, 91, 1)",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: "Anta_400Regular",
        marginTop: 30,
        marginBottom: 8, 
    },
    input: {
        borderWidth: 1,
        borderColor: "rgba(82, 82, 91, 1)",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: "#000",
    }
});