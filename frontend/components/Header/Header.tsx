import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SideMenu from "@/components/barraLateral/barraLateral";

const NAVY = "#03366A";

export type HeaderVariant =
  | "default"
  | "home"
  | "calendar"
  | "chat"
  | "map"
  | "sugestao";

type HeaderProps = {
  variant?: HeaderVariant;
};

/** Mesmo visual: barra azul + círculo branco + ícone sanduíche azul */
function isNavyBarWithWhiteMenu(variant: HeaderVariant) {
  return (
    variant === "calendar" ||
    variant === "chat" ||
    variant === "map" ||
    variant === "sugestao"
  );
}

export function Header({ variant = "default" }: HeaderProps) {
  const [fontsLoaded] = useFonts({ Anta_400Regular });
  const [open, setOpen] = useState(false);
  const insets = useSafeAreaInsets();

  if (!fontsLoaded) return null;

  const menuControl = isNavyBarWithWhiteMenu(variant) ? (
      <Pressable
        style={({ pressed }) => [
          styles.menuButtonCalendar,
          pressed && styles.menuButtonCalendarPressed,
        ]}
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu"
      >
        <MaterialIcons name="menu" size={24} color={NAVY} />
      </Pressable>
    ) : variant === "home" ? (
      <Pressable
        style={({ pressed }) => [
          styles.menuButtonHome,
          pressed && styles.menuButtonHomePressed,
        ]}
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu"
      >
        <MaterialIcons name="menu" size={24} color="#6B7280" />
      </Pressable>
    ) : (
      <Pressable
        style={({ pressed }) => [
          styles.buttonNative,
          pressed && { opacity: 0.85 },
        ]}
        onPress={() => setOpen(true)}
        accessibilityRole="button"
        accessibilityLabel="Abrir menu"
      >
        <MaterialIcons name="menu" size={24} color="#fff" />
      </Pressable>
    );

  return (
    <>
      <View
        style={[
          styles.titulo,
          variant === "home" && styles.tituloHome,
          variant === "home" && {
            paddingTop: Math.max(insets.top, 8),
          },
          isNavyBarWithWhiteMenu(variant) && {
            backgroundColor: NAVY,
            paddingTop: Math.max(insets.top, 10),
            paddingBottom: 14,
            paddingHorizontal: 20,
          },
        ]}
      >
        {variant === "home" ? (
          <View style={styles.greetingRow}>
            <View style={styles.logoBadge}>
              <Text style={[styles.logoLetter, styles.fontAnta]}>U</Text>
            </View>
            <Text style={[styles.greeting, styles.fontAnta]}>
              Olá, aluno :)
            </Text>
          </View>
        ) : variant === "calendar" ? (
          <Text style={[styles.calendarTitle, styles.fontAnta]}>Calendário</Text>
        ) : variant === "chat" ? (
          <Text style={[styles.calendarTitle, styles.fontAnta]}>Chat</Text>
        ) : variant === "map" ? (
          <Text style={[styles.calendarTitle, styles.fontAnta]}>Mapa</Text>
        ) : variant === "sugestao" ? (
          <Text style={[styles.calendarTitle, styles.fontAnta]}>Sugestão</Text>
        ) : (
          <Text style={[styles.uniclass, styles.fontAnta]}>Uniclass</Text>
        )}
        {menuControl}
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
    backgroundColor: NAVY,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  tituloHome: {
    backgroundColor: "transparent",
    paddingTop: 0,
    paddingBottom: 12,
  },
  calendarTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
    letterSpacing: 0.2,
  },
  greetingRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  logoBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#F2D049",
    justifyContent: "center",
    alignItems: "center",
  },
  logoLetter: {
    color: "#03366A",
    fontSize: 22,
    fontWeight: "700",
  },
  greeting: {
    color: "#03366A",
    fontSize: 18,
    fontWeight: "700",
  },
  menuButtonHome: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
      },
      android: { elevation: 2 },
      web: {
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      } as object,
    }),
  },
  /** Calendário / Chat / Mapa: círculo branco 40px sobre barra azul; ícone sanduíche azul marinho */
  menuButtonCalendar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButtonCalendarPressed: {
    opacity: 0.9,
  },
  menuButtonHomePressed: {
    opacity: 0.92,
  },
  uniclass: {
    color: "#fff",
    fontSize: 20,
  },
  fontAnta: {
    fontFamily: "Anta_400Regular",
  },
  buttonNative: {
    justifyContent: "center",
    backgroundColor: "#0c3c78",
    borderRadius: 12,
    padding: 10,
  },
});
