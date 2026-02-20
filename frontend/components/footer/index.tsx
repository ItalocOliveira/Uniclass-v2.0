import { View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type RouteType = "/Home" | "/Date" | "/Evento" | "/Mapa" | "/Sugestao";

export function Footer() {
  const router = useRouter();

  function goTo(route: RouteType) {
    router.push(route);
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={() => goTo("/Date")}>
        <MaterialIcons name="calendar-month" size={28} color="#fff" />
      </Pressable>

      <Pressable onPress={() => goTo("/Evento")}>
        <MaterialIcons name="chat" size={28} color="#fff" />
      </Pressable>

      <Pressable style={styles.homeButton} onPress={() => goTo("/Home")}>
        <MaterialIcons name="home" size={32} color="#03366A" />
      </Pressable>

      <Pressable onPress={() => goTo("/Mapa")}>
        <MaterialIcons name="explore" size={28} color="#fff" />
      </Pressable>

      <Pressable onPress={() => goTo("/Sugestao")}>
        <MaterialIcons name="lightbulb-outline" size={28} color="#fff" />
      </Pressable>
    </View>
  );
}
