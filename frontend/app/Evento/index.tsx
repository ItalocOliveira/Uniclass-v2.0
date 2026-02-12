import { Botao } from "@/components/button/Botao";
import { Footer } from "@/components/footer";
import { Galeria } from "@/components/galeriaUploud/Galeria";
import { View, ScrollView, StyleSheet, } from "react-native";
import React from "react";
import { Header } from "@/components/Header/Header";
import { SeletorEVet } from "@/components/seletorTopicos/SeletorEvent";


export default function Evento() {

    const enviar = () => {
        console.log("Enviando");
    };
    const cancelar = () => {
        console.log("Cancelar");
    };
    return (
        <View style={{ flex: 1 }}>
            <ScrollView >
                <View style={styles.header}>
                    <Header />
                </View>
                
                    <SeletorEVet />
               

                <View >
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
            <View>
                <Footer />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    botaos: {
        flexDirection: "row",
        alignItems: "center",
        gap: 65,
        marginTop: 100,
        marginLeft: 27 ,

    },
    header: {
        zIndex: 10,
        elevation: 5,
    },
   
});