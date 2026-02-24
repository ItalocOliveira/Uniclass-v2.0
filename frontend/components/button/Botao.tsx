import { Anta_400Regular, useFonts } from "@expo-google-fonts/anta";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";


type BotaoProps = {

    titulo: string;
    cor?: string;
    corTexto?: string;
    onPress: () => void;


};
export function Botao({
    titulo,
    onPress,
    corTexto = "#ffffff",
    cor = "#13096c" }: BotaoProps) {

    const [fontsLoaded] = useFonts({ Anta_400Regular });

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    backgroundColor: cor,
                    opacity: pressed ? 0.6 : 1
                }
            ]}
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