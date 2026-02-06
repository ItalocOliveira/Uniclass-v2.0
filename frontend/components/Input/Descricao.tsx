import { Text, View, TextInput, StyleSheet } from "react-native";

interface DescricaoProps {
    valor: string;
    onChange: (texto: string) => void;
}

export function Descricao({ valor, onChange }: DescricaoProps) {
    return (
        <View style={{flex:1,}}>
            <Text style={style.descricao}> Descrição da sugestão </Text>
            <View style={style.container}>
                <TextInput 
                    style={style.input}
                    multiline 
                    numberOfLines={5}
                    textAlignVertical="top"
                    value={valor} 
                    onChangeText={onChange} 
                    placeholder="Dê mais detalhes sobre o problema..."
                />
            </View>
        </View>
    );
}

const style = StyleSheet.create({

    container: {
        width: "100%",
        paddingHorizontal: 10,


    },
    input: {
        width: 360,
        borderWidth: 1,
        borderColor: "rgba(82, 82, 91, 1)",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        color: "#000",
        minHeight: 120,


    },
    descricao: {
        fontFamily: "Anta_400Regular",
        textAlign: "center",
        fontSize: 18,

    },
   
})