import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",

    position: "absolute",
    bottom: 0,
    zIndex: 100,

    width: "100%",
    minHeight: 64,
    paddingTop: 10,
    paddingBottom: 10,

    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.06,
        shadowRadius: 6,
      },
      android: { elevation: 8 },
      web: {
        boxShadow: "0 -2px 12px rgba(0,0,0,0.06)",
      } as object,
    }),
  },

  homeButton: {
    width: 56,
    height: 56,
    borderRadius: 16,

    backgroundColor: "#F2D049",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 22,
  },
});
