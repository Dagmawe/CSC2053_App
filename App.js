import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Weather2 from "./weather2";

export default function App() {
  return <Weather2 />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
