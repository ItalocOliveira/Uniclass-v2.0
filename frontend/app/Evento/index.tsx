import React from "react";
import { View, ScrollView, Text, StyleSheet, } from "react-native"
import { Galeria } from "@/components/galeriaUploud/Galeria";
import { Butao } from "@/components/button/Butao"

export default function Evento() {
    const enviar = () => {
        console.log("Enviando");
    };
    const cancelar = () => {
        console.log("Cancelar");
    };
    return (
        <ScrollView>
            <View>
                <Galeria />

            </View>
            <View style={styles.botaos}>
                <Butao
                    titulo="Enviar"
                    corTexto="rgba(3, 54, 106, 1)"
                    cor="rgba(221, 226, 239, 1)"
                    onPress={cancelar}
                />
                <Butao
                    titulo="cancelar"
                    corTexto="#ffffff"
                    cor="rgba(3, 54, 106, 1)"
                    onPress={enviar}
                />
            </View>

        </ScrollView>
    )
};
const styles = StyleSheet.create({
    botaos: {
        flexDirection: "row",
        alignItems: "center",
        gap: 80,
        marginTop:150,
        marginLeft:45,

    },
});