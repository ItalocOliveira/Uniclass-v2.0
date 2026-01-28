import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    position: "absolute",
    bottom: 0,

    width: "100%",
    height: 70,

    backgroundColor: "#03366A",
    paddingBottom: 10,
    display: "flex",
  },

  homeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,

    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 25,
  },
});
