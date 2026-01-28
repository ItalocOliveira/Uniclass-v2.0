// frontend/app/Home/index.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
} from "react-native";
import { IconMenu2 } from "@tabler/icons-react";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import Carousel from "react-native-reanimated-carousel";

const catalogo = [
  {
    id: 1,
    title: "Fábrica de Software",
    image: require("../image/Captura de tela 2026-01-20 110141.png"),
  },
  {
    id: 2,
    title: "Evento de Autista",
    image: require("../image/Captura de tela 2026-01-20 110232.png"),
  },
  { id: 3, title: "Evento Tour", image: require("../image/oi.png") },
];

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
        <Text style={[styles.header, styles.fontAnta]}>Eventos</Text>
        <Text style={[styles.bodyText, styles.fontAnta]}>
          Todos os Eventos mais Recentes
        </Text>

        <Carousel
          loop
          width={390}
          height={220}
          autoPlay
          autoPlayInterval={5000}
          scrollAnimationDuration={1000}
          data={catalogo}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={[styles.text, styles.fontAnta]}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.gap} />

      <View style={styles.maps}>
        <Text style={[styles.header, styles.fontAnta]}>Mapa do Campus</Text>
        <Text style={[styles.bodyText, styles.fontAnta]}>
          Explore o Mapa do Campus Abaixo
        </Text>

        <View style={styles.map}>
          {Platform.OS === "web" ? (
            <iframe
              title="Mapa do Campus"
              src="/"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />

          ) : (
            <Text style={{ textAlign: "center" }}>
              Mapa disponível apenas na versão web.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  titulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#03366A",
    padding: 15,
  },
  fontAnta: { fontFamily: "Anta_400Regular" },
  uniclass: { color: "#fff", fontSize: 20 },
  gap: { height: 30 },
  navBar: {
    backgroundColor: "#ddd",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  bodyText: { textAlign: "left", marginBottom: 20 },
  card: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#03366A",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  text: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  maps: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  map: { marginVertical: 15 },
});
