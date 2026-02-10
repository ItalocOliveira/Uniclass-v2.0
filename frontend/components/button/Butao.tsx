import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";


type ButaoProps = {

    titulo: string;
    cor?: string;
    corTexto?: string;
    onPress: () => void;


};
export function Butao({
    titulo,
    onPress,
    corTexto = "#ffffff",
    cor = "#13096c" }: ButaoProps) {

    const [fontsLoaded] = useFonts({ Anta_400Regular });

    return (
        <Pressable
            onPress={onPress}
            style={[styles.button, { backgroundColor: cor }]}
        >
            <Text style={[styles.buttonText, { color: corTexto }]}>{titulo}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 120,
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "Anta_400Regular",

    }
});