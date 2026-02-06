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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        return Alert.alert("Atenção", "Informe os campos obrigatórios!");
      }

      const response = await fetch("localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: password,
          instituicaoId: "550e8400-e29b-41d4-a716-446655440000"
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return Alert.alert("Erro", data.message || "Credenciais inválidas");
      }

      const token = data.access_token;

      const usuario = data.usuario;

      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("usuario", JSON.stringify(usuario));

      Alert.alert("Login realizado com sucesso!");

      console.log("TOKEN:", token);
      console.log("USUÁRIO:", usuario);

    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Falha ao conectar com o servidor");
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
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
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
        <TouchableOpacity style={styles.button} onPress={getLogin}>
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
