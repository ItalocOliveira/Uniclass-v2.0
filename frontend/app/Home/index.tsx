import React, { useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import Carousel from "react-native-reanimated-carousel";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/footer";
import { authFetch } from "../services/api";

const COLORS = {
  screenBg: "#F5F5F5",
  navy: "#03366A",
  navyAccent: "#02254a",
  labelBlue: "#8EC5F8",
};

const FOOTER_CLEARANCE = 108;
const COMPACT_BREAKPOINT = 480;

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
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  const isCompact = width < COMPACT_BREAKPOINT;
  const scrollHorizontalPad = isCompact ? 14 : 20;

  const carouselInnerWidth = useMemo(
    () => Math.max(width - scrollHorizontalPad * 2 - 40, 260),
    [width, scrollHorizontalPad]
  );

  const imageBlockHeight = carouselInnerWidth * 0.42;
  const carouselHeight = useMemo(() => {
    const whitePad = 20;
    const captionBlock = 36;
    return whitePad + imageBlockHeight + captionBlock;
  }, [imageBlockHeight]);

  const mapFrameHeight = useMemo(() => {
    const byWidth = width * 0.62;
    const byHeight = height * 0.38;
    const cap = isCompact ? 300 : 480;
    return Math.min(byWidth, byHeight, cap);
  }, [width, height, isCompact]);

  const titleSize = isCompact ? 22 : 26;
  const subtitleSize = isCompact ? 14 : 15;
  const labelSize = 11;

  useEffect(() => {
    buscarLocais();
  }, []);

  async function buscarLocais() {
    try {
      const response = await authFetch("http://192.168.0.109:3000/locais");

      if (response.status === 401) {
        console.log("Token inválido — precisa relogar");
        return;
      }

      const data = await response.json();
      console.log("Locais recebidos:", data);
    } catch (error) {
      console.error("Erro ao buscar locais:", error);
    }
  }

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: scrollHorizontalPad,
          paddingBottom: FOOTER_CLEARANCE + insets.bottom + 8,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Header variant="home" />

        <View style={styles.sectionGap} />

        <View style={styles.featureCard}>
          <View style={styles.decorCircle} />
          <Text style={[styles.sectionLabel, { fontSize: labelSize }]}>
            EVENTOS
          </Text>
          <Text
            style={[
              styles.featureTitle,
              styles.fontAnta,
              { fontSize: titleSize },
            ]}
          >
            Eventos
          </Text>
          <Text
            style={[
              styles.featureSubtitle,
              styles.fontAnta,
              { fontSize: subtitleSize },
            ]}
          >
            Todos os Eventos mais Recentes
          </Text>

          <Carousel
            loop
            width={carouselInnerWidth}
            height={carouselHeight}
            autoPlay
            autoPlayInterval={5000}
            scrollAnimationDuration={1000}
            data={catalogo}
            renderItem={({ item }) => (
              <View style={styles.carouselSlide}>
                <View style={styles.whiteImageShell}>
                  <Image
                    source={item.image}
                    style={[
                      styles.carouselImage,
                      { height: imageBlockHeight },
                    ]}
                    resizeMode="cover"
                  />
                </View>
                <Text style={[styles.slideCaption, styles.fontAnta]}>
                  {item.title}
                </Text>
              </View>
            )}
          />
        </View>

        <View style={styles.sectionGap} />

        <View style={styles.featureCard}>
          <View style={styles.decorCircle} />
          <Text style={[styles.sectionLabel, { fontSize: labelSize }]}>
            MAPA
          </Text>
          <Text
            style={[
              styles.featureTitle,
              styles.fontAnta,
              { fontSize: titleSize },
            ]}
          >
            Mapa do Campus
          </Text>
          <Text
            style={[
              styles.featureSubtitle,
              styles.fontAnta,
              { fontSize: subtitleSize },
            ]}
          >
            Explore o Mapa do Campus Abaixo
          </Text>

          <View style={styles.mapWhiteShell}>
            <View
              style={[
                styles.mapInnerWrap,
                { minHeight: mapFrameHeight },
              ]}
            >
              {Platform.OS === "web" ? (
                <iframe
                  title="Mapa do Campus"
                  src="/mapa/index.html"
                  style={{
                    width: "100%",
                    height: mapFrameHeight,
                    border: "none",
                    borderRadius: 12,
                  }}
                  scrolling="no"
                  loading="lazy"
                />
              ) : (
                <View
                  style={[
                    styles.mapFallbackBox,
                    { minHeight: mapFrameHeight },
                  ]}
                >
                  <Text
                    style={[
                      styles.mapFallbackText,
                      styles.fontAnta,
                      { fontSize: subtitleSize },
                    ]}
                  >
                    Mapa disponível apenas na versão web.
                  </Text>
                </View>
              )}
              <Pressable
                style={({ pressed }) => [
                  styles.mapExpandBtn,
                  pressed && styles.mapExpandBtnPressed,
                ]}
                onPress={() => router.push("/Mapa")}
                hitSlop={8}
                accessibilityRole="button"
                accessibilityLabel="Abrir mapa em tela cheia"
              >
                <MaterialIcons
                  name="open-in-full"
                  size={22}
                  color="#03366A"
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  scroll: {
    flex: 1,
    backgroundColor: COLORS.screenBg,
  },
  fontAnta: {
    fontFamily: "Anta_400Regular",
  },
  sectionGap: {
    height: 16,
  },
  featureCard: {
    borderRadius: 24,
    backgroundColor: COLORS.navy,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 22,
    marginBottom: 4,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 14,
    elevation: 6,
  },
  decorCircle: {
    position: "absolute",
    top: -36,
    right: -36,
    width: 132,
    height: 132,
    borderRadius: 66,
    backgroundColor: "rgba(0, 0, 0, 0.14)",
  },
  sectionLabel: {
    color: COLORS.labelBlue,
    letterSpacing: 1.4,
    fontWeight: "700",
    marginBottom: 8,
  },
  featureTitle: {
    color: "#fff",
    fontWeight: "700",
    marginBottom: 6,
  },
  featureSubtitle: {
    color: "rgba(255, 255, 255, 0.92)",
    marginBottom: 18,
    lineHeight: 22,
  },
  carouselSlide: {
    flex: 1,
    justifyContent: "flex-start",
  },
  whiteImageShell: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    borderRadius: 12,
  },
  slideCaption: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 12,
  },
  mapWhiteShell: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    overflow: "hidden",
    minHeight: 120,
  },
  mapInnerWrap: {
    position: "relative",
    borderRadius: 12,
    overflow: "hidden",
  },
  mapFallbackBox: {
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  mapExpandBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 2,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    borderRadius: 10,
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
      },
      android: { elevation: 3 },
      web: {
        boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
      } as object,
    }),
  },
  mapExpandBtnPressed: {
    opacity: 0.88,
  },
  mapFallbackText: {
    textAlign: "center",
    color: COLORS.navyAccent,
    paddingVertical: 24,
  },
});
