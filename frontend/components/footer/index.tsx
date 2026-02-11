import { View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Footer() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("calendario")}>
        <MaterialIcons name="calendar-month" size={28} color="#fff" />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("eventos")}>
        <MaterialIcons name="chat" size={28} color="#fff" />
      </Pressable>

      <Pressable
        style={styles.homeButton}
        onPress={() => navigation.navigate("home")}
      >
        <MaterialIcons name="home" size={32} color="#03366A" />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("mapa")}>
        <MaterialIcons name="explore" size={28} color="#fff" />
      </Pressable>

      <Pressable onPress={() => navigation.navigate("sugestao")}>
        <MaterialIcons name="lightbulb-outline" size={28} color="#fff" />
      </Pressable>
    </View>
  );
}
