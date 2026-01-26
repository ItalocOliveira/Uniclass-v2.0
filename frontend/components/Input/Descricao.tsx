import {useState} from "react";
import { Text, View, TextInput, StyleSheet} from "react-native";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";

export function Descricao() {
        
  const [texto, setTexto] = useState<string>("");
   const [fontsLoaded] = useFonts({ Anta_400Regular });
       
  const mudarTexto = (novoTexto: string) => {
            setTexto(novoTexto);
        };
    
    return(
        <View  >
             <Text style={style.descricao}> Descrição da sugestão </Text>
            <View style={style.container}>
                <TextInput style={style.input}
                 multiline numberOfLines={5} 
                 textAlignVertical="top" 
                value={texto} onChangeText={mudarTexto}/>
            </View>

        </View>
    )
}

const style = StyleSheet.create({

    container:{
          width: "100%",
        paddingHorizontal: 10,
        
      
    },
     input: {
        width:360,
        borderWidth: 1,
        borderColor: "rgba(82, 82, 91, 1)",
        borderRadius: 8,
        padding:12,
        fontSize: 16,
        color: "#000",
        minHeight: 120,  
    
    
    },
    descricao:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            textAlign:"center",
            fontFamily:"Anta_400Regular"
         
    },

})