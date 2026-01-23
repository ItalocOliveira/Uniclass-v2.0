import { View } from "react-native"
import { CaixadeTexto } from "@/components/Input/CaixadeTexto"
import { Descricao } from "@/components/Input/Descricao"
import {Camerapermiss} from "@/components/ImgUpload/CameraPermiss"

export default function Sugestao (){
    return (
        <View>
            <View>
                <CaixadeTexto/>
            </View>
            <View>
                <Camerapermiss/>
            </View>
            <View>
                <Descricao/>

            </View>
        </View>
    )
}