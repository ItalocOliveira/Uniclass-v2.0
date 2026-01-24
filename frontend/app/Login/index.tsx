import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);
      if (!email || !password) {
        return Alert.alert("Anteção", "Informe os campos obrigatórios!");
      }
      setTimeout(() => {
        Alert.alert("Logado com sucesso");
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../image/logo_uniclass.png")}
        style={styles.image}
      />
      <View>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="E-MAIL INSTITUCIONAL"
            placeholderTextColor="#999"
            style={styles.input}
            onChangeText={setEmail}
          />
          <MaterialIcons name="email" size={30} color="gray" />
        </View>
      </View>

      <View>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="SENHA"
            placeholderTextColor="#999"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <MaterialIcons name="remove-red-eye" size={30} color="gray" />
        </View>
      </View>

      <View style={styles.boxButton}>
        <TouchableOpacity style={styles.button} onPress={() => getLogin()}>
          {loading ? (
            <ActivityIndicator color={"white"} size={"small"} />
          ) : (
            <Text style={styles.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
