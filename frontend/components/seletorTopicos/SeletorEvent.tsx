import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Anta_400Regular, useFonts } from "@expo-google-fonts/anta";


export function SeletorEVet() {
    const [topico, setTopico] = useState("Evento");

    return (
        <View style={styles.container}>
            <Picker style={styles.picker}
                selectedValue={topico}
                onValueChange={setTopico}
            >

                <Picker.Item key={1} value={"PALESTRA"} label={"PALESTRA"} />
                <Picker.Item key={2} value={"FEIRA"} label={"FEIRA"} />
                <Picker.Item key={3} value={"MOCHILAO"} label={" MOCHILAO"} />
                <Picker.Item key={4} value={"WORKSHOP"} label={" WORKSHOP"} />
                <Picker.Item key={5} value={"SEMINARIO"} label={"SEMINARIO"} />
                <Picker.Item key={6} value={"MEETUP"} label={"MEETUP"} />
                <Picker.Item key={7} value={"HACKATON"} label={"HACKATON"} />

            </Picker>

            {/* <Text>Você selecionou: {topico}</Text>*/}
        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,




    },
    picker: {
        width: 300,
        height: 50,
        borderBlockColor: "#e7e7e7",
        fontFamily: "Anta_400Regular",
        borderRadius: 12,
        paddingHorizontal: 10,
        borderColor: "#08080824",
        borderWidth: 5,


    },

});
