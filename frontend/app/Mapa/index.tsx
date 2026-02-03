import { Footer } from "@/components/footer";
import Header from "@/components/Header/Header";
import React from "react";
import { View, Text, Platform, StyleSheet } from "react-native";

export default function Maps() {
  return (
    <View style={styles.container}>

        <Header />

      <View style={styles.mapCard}>
        {Platform.OS === "web" ? (
          <iframe
            title="Mapa do Campus"
            src="/mapa/index.html"
            style={{
              width: "100%",
              height: "94.5%",
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

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between", 
  },
  mapCard: {
    flex: 1, 
    backgroundColor: "#ddd",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
});
