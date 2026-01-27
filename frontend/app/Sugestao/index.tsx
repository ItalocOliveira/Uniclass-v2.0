import { View, StyleSheet, ScrollView } from "react-native"
import { CaixadeTexto } from "@/components/Input/CaixadeTexto"
import { Descricao } from "@/components/Input/Descricao"
import { Camerapermiss } from "@/components/ImgUpload/CameraScreen"
import { Butao } from "@/components/button/Butao"




export default function Sugestao() {
    const enviar = () => {
        console.log("Enviando");
    };
    const cancelar = () => {
        console.log("Cancelar");
    };
    return (
        <ScrollView >
            <View style={styles.container1}>
                <View style={styles.caixa}>
                    <CaixadeTexto />
                </View>
                <View style={styles.container} >
                    <Camerapermiss />
                </View>
                <View style={styles.caixa2}>
                    <Descricao />
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

            </View>
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container1: {
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        width: 300,
        height: 300,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#08080824",
    },
    caixa: {
        marginBottom: 10,

    },
    caixa2: {
        marginTop: 20,

    },
    botaos: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,     
            
    },

});  