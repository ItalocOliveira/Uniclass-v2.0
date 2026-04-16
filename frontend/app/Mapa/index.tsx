import { Footer } from "@/components/footer";

import { Header } from "@/components/Header/Header";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/** Rodapé absoluto + folga extra para o botão de navegação do mapa não encostar no menu */
const FOOTER_CLEARANCE = 108;
const MAP_NAV_EXTRA_LIFT = 24;

export default function Maps() {
  const insets = useSafeAreaInsets();
  const bottomReserve =
    FOOTER_CLEARANCE + MAP_NAV_EXTRA_LIFT + insets.bottom;

  return (
    <View style={styles.container}>
      <Header variant="map" />

      <View style={[styles.mapShell, { paddingBottom: bottomReserve }]}>
        <View style={styles.mapCard}>
          {Platform.OS === "web" ? (
            <iframe
              title="Mapa do Campus"
              src="/mapa/index.html"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: 8,
              }}
              loading="lazy"
            />
          ) : (
            <Text style={{ textAlign: "center", padding: 16 }}>
              Mapa disponível apenas na versão web.
            </Text>
          )}
        </View>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapShell: {
    flex: 1,
    minHeight: 0,
  },
  mapCard: {
    flex: 1,
    minHeight: 0,
    backgroundColor: "#ddd",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});
