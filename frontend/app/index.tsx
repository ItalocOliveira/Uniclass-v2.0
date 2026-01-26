import { View, StyleSheet, ScrollView } from "react-native"
import { CaixadeTexto } from "@/components/Input/CaixadeTexto"
import { Descricao } from "@/components/Input/Descricao"
import { Camerapermiss } from "@/components/ImgUpload/CameraScreen"
import { Button } from "@/components/button/Button"


export default function Sugestao () {
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
                    <Button />
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

});  