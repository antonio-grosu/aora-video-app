import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontFamily: "Poppins-Medium",
          color: "white",
        }}
      >
        Aora
      </Text>
      {/* <StatusBar style="auto" /> */}
      <Link
        style={{ fontFamily: "Poppins-Semibold", color: "blue" }}
        href="/(tabs)/home"
      >
        Go to Home
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#000000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
