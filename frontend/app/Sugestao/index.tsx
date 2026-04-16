import {
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  TextInput,
  Platform,
} from "react-native";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts, Anta_400Regular } from "@expo-google-fonts/anta";
import { Header } from "@/components/Header/Header";
import { CameraPer } from "@/components/cameraUpload/CameraScreen";
import { Descricao } from "@/components/Input/Descricao";
import { Botao } from "@/components/button/Botao";
import { Footer } from "@/components/footer";
import { Seletor } from "@/components/seletorTopicos/SeletorTopico";

const SCREEN_BG = "#F5F5F5";
const NAVY = "#03366A";
const LABEL_BLUE = "#8EC5F8";
const FOOTER_CLEARANCE = 108;

export default function Sugestao() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [fontsLoaded] = useFonts({ Anta_400Regular });
  const insets = useSafeAreaInsets();

  const tokenArmazenado = "";

  const enviar = async () => {
    const url = "http://26.175.52.125:3000/sugestoes";

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("tipo", "CONSERTO");
    formData.append("status", "PENDENTE");
    formData.append("descricao", descricao);
    formData.append("mapaXY", JSON.stringify({ x: 1, y: 1 }));

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${tokenArmazenado}`,
        },
        body: formData,
      });

      const data = await response.json();
      console.log("Resposta:", data);
      Alert.alert("Sucesso", "Sugestão enviada!");
    } catch (error) {
      console.error("Erro no fetch:", error);
      Alert.alert(
        "Erro",
        "Verifique se o servidor está ligado no IP correto"
      );
    }
  };

  const cancelar = () => {
    setTitulo("");
    setDescricao("");
  };

  if (!fontsLoaded) return null;

  return (
    <View style={styles.root}>
      <Header variant="sugestao" />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: FOOTER_CLEARANCE + insets.bottom + 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.featureCard}>
          <View style={styles.decorCircle} />
          <Text style={styles.sectionLabel}>SUGESTÃO</Text>
          <Text style={[styles.featureTitle, styles.fontAnta]}>
            Sua opinião importa
          </Text>
          <Text style={[styles.featureSubtitle, styles.fontAnta]}>
            Preencha os campos abaixo para enviar uma sugestão ou reporte ao
            campus.
          </Text>

          <View style={styles.whiteShell}>
            <Text style={[styles.fieldLabel, styles.fontAnta]}>Título</Text>
            <TextInput
              style={styles.textInput}
              value={titulo}
              onChangeText={setTitulo}
              placeholder="Ex.: Melhoria no laboratório de informática"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <View style={styles.whiteShell}>
            <Text style={[styles.fieldLabel, styles.fontAnta]}>Tipo</Text>
            <Seletor />
          </View>

          <View style={[styles.whiteShell, styles.photoShell]}>
            <Text style={[styles.fieldLabel, styles.fontAnta]}>
              Foto (opcional)
            </Text>
            <View style={styles.cameraBox}>
              <CameraPer />
            </View>
          </View>

          <View style={styles.whiteShell}>
            <Descricao value={descricao} onChangeText={setDescricao} />
          </View>

          <View style={styles.actionsRow}>
            <View style={styles.actionBtn}>
              <Botao
                titulo="Cancelar"
                corTexto={NAVY}
                cor="rgba(221, 226, 239, 1)"
                onPress={cancelar}
              />
            </View>
            <View style={styles.actionBtn}>
              <Botao
                titulo="Enviar"
                corTexto="#ffffff"
                cor={NAVY}
                onPress={enviar}
              />
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
    backgroundColor: SCREEN_BG,
  },
  scroll: {
    flex: 1,
    backgroundColor: SCREEN_BG,
  },
  fontAnta: {
    fontFamily: "Anta_400Regular",
  },
  featureCard: {
    borderRadius: 24,
    backgroundColor: NAVY,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 22,
    overflow: "hidden",
    marginBottom: 8,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 14,
      },
      android: { elevation: 6 },
      web: {
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
      } as object,
    }),
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
    color: LABEL_BLUE,
    letterSpacing: 1.4,
    fontWeight: "700",
    fontSize: 11,
    marginBottom: 8,
  },
  featureTitle: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 8,
  },
  featureSubtitle: {
    color: "rgba(255, 255, 255, 0.92)",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 18,
  },
  whiteShell: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: NAVY,
    marginBottom: 8,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(82, 82, 91, 0.25)",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#111",
    backgroundColor: "#fafafa",
  },
  photoShell: {
    paddingBottom: 12,
  },
  cameraBox: {
    width: "100%",
    maxWidth: 360,
    alignSelf: "center",
    aspectRatio: 1,
    maxHeight: 280,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(8,8,8,0.12)",
    backgroundColor: "#f9fafb",
  },
  actionsRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 8,
    justifyContent: "space-between",
  },
  actionBtn: {
    flex: 1,
    minWidth: 0,
  },
});
