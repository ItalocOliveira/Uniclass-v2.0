import { View, Pressable } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./styles";

type RouteType = "/Home" | "/Date" | "/Chat" | "/Mapa" | "/Sugestao";

const ICON_INACTIVE = "#9CA3AF";
const ICON_ACTIVE = "#03366A";

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();

  function goTo(route: RouteType) {
    router.push(route);
  }

  const isActive = (route: string) =>
    pathname === route || pathname.endsWith(route);

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: Math.max(insets.bottom, 10) },
      ]}
    >
      <Pressable onPress={() => goTo("/Date")} hitSlop={8}>
        <MaterialIcons
          name="calendar-month"
          size={28}
          color={isActive("/Date") ? ICON_ACTIVE : ICON_INACTIVE}
        />
      </Pressable>

      <Pressable onPress={() => goTo("/Chat")} hitSlop={8}>
        <MaterialIcons
          name="chat"
          size={28}
          color={isActive("/Chat") ? ICON_ACTIVE : ICON_INACTIVE}
        />
      </Pressable>

      <Pressable style={styles.homeButton} onPress={() => goTo("/Home")}>
        <MaterialIcons name="home" size={30} color={ICON_ACTIVE} />
      </Pressable>

      <Pressable onPress={() => goTo("/Mapa")} hitSlop={8}>
        <MaterialIcons
          name="explore"
          size={28}
          color={isActive("/Mapa") ? ICON_ACTIVE : ICON_INACTIVE}
        />
      </Pressable>

      <Pressable onPress={() => goTo("/Sugestao")} hitSlop={8}>
        <MaterialIcons
          name="lightbulb-outline"
          size={28}
          color={isActive("/Sugestao") ? ICON_ACTIVE : ICON_INACTIVE}
        />
      </Pressable>
    </View>
  );
}
