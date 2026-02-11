import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import Carousel from "react-native-reanimated-carousel";
import SideMenu from "@/components/barraLateral/barraLateral";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer";

const catalogo = [
  {
    id: 1,
    title: "Fábrica de Software",
    image: require("../image/Captura de tela 2026-01-20 110141.png"),
  },
  {
    id: 2,
    title: "Evento",
    image: require("../image/Captura de tela 2026-01-20 110232.png"),
  },
  { id: 3, title: "Evento Tour", image: require("../image/oi.png") },
];

export default function Home() {
  const [fontsLoaded] = useFonts({ Anta_400Regular });
  const [open, setOpen] = useState(false);

  if (!fontsLoaded) return null;

  return (
    <View style={{ flex: 1 }}>
      <SideMenu open={open} onClose={() => setOpen(false)} />
      <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
        <Header />

        <View style={styles.gap} />

        <View style={styles.navBar}>
          <Text style={[styles.header, styles.fontAnta]}>Eventos</Text>
          <Text style={[styles.bodyText, styles.fontAnta]}>
            Todos os Eventos mais Recentes
          </Text>

          <Carousel
            loop
            width={width * 0.9} // 90% da largura da tela
            height={width * 0.55} // altura proporcional
            autoPlay
            autoPlayInterval={5000}
            scrollAnimationDuration={1000}
            data={catalogo}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={item.image}
                  style={[styles.image, { height: width * 0.35 }]}
                  resizeMode="cover"
                />
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

          <View style={styles.mapCard}>
            {Platform.OS === "web" ? (
              <iframe
                title="Mapa do Campus"
                src="/mapa/index.html"
                style={{
                  width: "100%",
                  height: width * 0.7, // altura proporcional
                  border: "none",
                  borderRadius: 8,
                }}
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
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
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
  gap: {
    height: 10,
  },
  navBar: {
    backgroundColor: "#ddd",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
  },
  bodyText: {
    textAlign: "left",
    marginBottom: 20,
    fontSize: 14,
  },
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
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  maps: {
    backgroundColor: "#ddd",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
  mapCard: {
    backgroundColor: "#03366A",
    borderWidth: 1,
    borderColor: "#03366A",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
});
