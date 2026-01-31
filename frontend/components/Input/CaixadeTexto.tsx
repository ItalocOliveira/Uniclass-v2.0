import { Anta_400Regular, useFonts } from "@expo-google-fonts/anta";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface CaixaDeTextoProps {
    valor: string;
    onChange: (texto: string) => void;
}

export function CaixaDeTexto({ valor, onChange }: CaixaDeTextoProps) {

    return (
        <View style={styles.container}>
            <Text style={styles.textoPrincipal}>Título da sugestão</Text>
            <TextInput 
                style={styles.input} 
                value={valor}        
                onChangeText={onChange}  
                placeholder="Descreva o problema" 
                multiline 
                numberOfLines={2} 
            />
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