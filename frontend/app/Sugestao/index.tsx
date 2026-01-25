import { View,StyleSheet } from "react-native"
import { CaixadeTexto } from "@/components/Input/CaixadeTexto"
import { Descricao } from "@/components/Input/Descricao"
import { Camerapermiss } from "@/components/ImgUpload/CameraScreen"


export default function Sugestao (){
    return (
        <View>
            <View>
                <CaixadeTexto />
            </View>
            <View style={styles.container} >
               <Camerapermiss/>
            </View>
            <View>
                <Descricao/>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
  padding: 10,
  marginTop: 10,
  marginRight:40,
  marginLeft:40,
  borderRadius: 10,
  borderWidth: 5,
  borderColor: "#00000024",
}


});