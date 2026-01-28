import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

export function Footer() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("calendario")}>
        <MaterialIcons name="calendar-month" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("eventos")}>
        <MaterialIcons name="chat" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate("home")}
      >
        <MaterialIcons name="home" size={32} color="#03366A" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("mapa")}>
        <MaterialIcons name="explore" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("sugestao")}>
        <MaterialIcons name="lightbulb-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
