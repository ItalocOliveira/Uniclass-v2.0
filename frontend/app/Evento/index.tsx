import { Botao } from "@/components/button/Botao";
import { Galeria } from "@/components/galeriaUploud/Galeria";
import React from "react";
import { View, ScrollView, StyleSheet, } from "react-native"

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
                <Botao
                    titulo="Enviar"
                    corTexto="rgba(3, 54, 106, 1)"
                    cor="rgba(221, 226, 239, 1)"
                    onPress={cancelar}
                />
                <Botao
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