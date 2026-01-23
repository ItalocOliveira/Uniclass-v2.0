import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
} from "react-native";
import {
    IconChevronLeft,
    IconChevronRight,
    IconMenu2,
} from "@tabler/icons-react";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import Carousel from "react-native-reanimated-carousel";

const catalogo = [
    { id: 1, title: "Fábrica de Software", image: require("../image/Captura de tela 2026-01-20 110141.png") },
    { id: 2, title: "Evento de Autista", image: require("../image/Captura de tela 2026-01-20 110232.png") },
    { id: 3, title: "Evento Tuor", image: require("../image/oi.png") },
]

export default function Home() {
    const [fontsLoaded] = useFonts({ Anta_400Regular });

    if (!fontsLoaded) return null;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titulo}>
                <Text style={[styles.uniclass, styles.fontAnta]}>Uniclass</Text>
                <IconMenu2 color="#fff" size={32} />
            </View>

            <View style={styles.gap} />

            <View style={styles.navBar}>
                <View >
                    <Text style={[styles.header, styles.fontAnta]}>Eventos</Text>
                    <Text style={[styles.bodyText, styles.fontAnta]}>Todos os Eventos mais Recente</Text>
                    <br />
                    <Carousel loop width={390} height={220} autoPlay={true} autoPlayInterval={6000} data={catalogo} renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={[styles.text, styles.fontAnta]}>{item.title}</Text>
                        </View>
                    )}
                    />
                </View>

            </View>

            <View style={styles.gap}></View>

            <View style={styles.maps}>
                <View>
                    <Text style={[styles.header, styles.fontAnta]}>Mapa do Campus</Text>
                    <Text style={[styles.bodyText, styles.fontAnta]}>Explore o Mapa do Campus Abaixo</Text>
                    <br />
                    
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    maps: {
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    titulo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#03366A",
        padding: 15,
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    bodyText: {

    },
    card: {
        flex: 1, borderRadius: 10,
        backgroundColor: "#03366A",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    image: {
        width: "100%", height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    text: {
        color: "#fff", fontSize: 16,
        fontWeight: "bold",
    },
    fontAnta: {
        fontFamily: "Anta_400Regular",
    },
    uniclass: {
        color: "#fff",
        fontSize: 20,
    },
    gap: {
        height: 40,
    },
    navBar: {
        backgroundColor: "#ddd",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 8,
    },
    chevron: {
        padding: 8,
    },
    section: {
        backgroundColor: "#ddd",
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 8,
        marginBottom: 80,
    },
    sectionText: {
        fontSize: 16,
        color: "#333",
    },
});
