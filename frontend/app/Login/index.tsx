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

      console.log("Iniciando login...");
      console.log("Email:", email);
      console.log("Senha:", password);

      if (!email || !password) {
        console.log("Campos vazios");
        Alert.alert("Atenção", "Informe os campos obrigatórios!");
        return;
      }

      const url = "http://192.168.0.109:3000/auth/login";

      const payload = {
        email: email.trim(),
        senha: password,
        instituicaoId: "d7d8feda-e008-4a7d-ac85-d05cc0d284ac"
      };

      console.log("Payload enviado:", payload);

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Status HTTP:", response.status);

      const rawText = await response.text();

      let data: any = null;
      try {
        data = JSON.parse(rawText);
        console.log("JSON parseado:", data);
      } catch (jsonError) {
        console.error("JSON inválido:", jsonError);
        Alert.alert("Erro", "Resposta inválida do servidor");
        return;
      }

      if (!response.ok) {
        console.error("Login falhou");
        Alert.alert("Erro", data?.message || "Falha no login");
        return;
      }

      console.log("Login seu certo ");
      console.log("Token:", data.access_token);

      await AsyncStorage.setItem("token", data.access_token);

      Alert.alert("Sucesso", "Login realizado com sucesso!");

    } catch (error) {
      console.error("ERRO GERAL:", error);
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
        <TouchableOpacity
          style={styles.button}
          onPress={getLogin}
          disabled={loading}
        >
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
