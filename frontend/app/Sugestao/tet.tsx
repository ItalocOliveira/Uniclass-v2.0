import { View,StyleSheet } from "react-native"
import { CaixadeTexto } from "@/components/Input/CaixadeTexto"
import { Descricao } from "@/components/Input/Descricao"
import { Camerapermiss } from "@/components/ImgUpload/CameraScreen"
import { Button } from "@/components/button/Button"


export default function Sugestao (){
    return (
        <View>
            <View style={styles.caixa2}>
                <CaixadeTexto />
            </View>
            <View style={styles.container} >
               <Camerapermiss/>
            </View>
            <View style={styles.caixa}>
                <Descricao/>
                <Button/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
    flex:1,
    padding: 10,
    marginRight:40,
    marginLeft:40,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#00000024",
},
caixa:{
   marginTop:160,
},
caixa2:{
marginBottom:20,
},

});