import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconMenu2 } from "@tabler/icons-react";
import SideMenu from "../barraLateral/barraLateral";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";

export default function Header() {
    const [fontsLoaded] = useFonts({ Anta_400Regular });
    const [open, setOpen] = useState(false);

    return (
        <>
            <View style={styles.titulo}>
                <Text style={[styles.uniclass, styles.fontAnta]}>Uniclass</Text>
                <button
                    onClick={() => setOpen(true)}
                    style={styles.button}
                >
                    <IconMenu2 size={24} />
                </button>
            </View>

            <SideMenu open={open} onClose={() => setOpen(false)} />
        </>
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
    uniclass: {
        color: "#fff",
        fontSize: 20
    },
    fontAnta: {
        fontFamily: "Anta_400Regular",
    },
    button: {
        justifyContent: "center",
        backgroundColor: "#0c3c78",
        color: "white",
        borderRadius: 12,
        padding: 10,
        cursor: "pointer",
    }
});
