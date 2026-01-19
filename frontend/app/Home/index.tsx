"use client"

import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { IconMenu2 } from "@tabler/icons-react";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";


export default function Home() {
    const [fontsLoaded] = useFonts({ Anta_400Regular });

    if (!fontsLoaded) return null;
    
    return (
        <ScrollView>

            <View style={styles.titulo}>
                <Text style={[styles.uniclass, styles.fontAnta]}>Uniclass</Text>
                <IconMenu2 color="#fff" size={32} />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    titulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#03366A",
        padding: 15,
    },
    fontAnta: {
        fontFamily: "Anta_400Regular",
    },
    uniclass: {
        color: "#fff",
        fontSize: 20,
    },
})