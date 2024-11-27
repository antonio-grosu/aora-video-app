import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { images } from "../constants/index.js";
import CustomButton from "../components/CustomButton.jsx";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider.js";
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={images.logo}
          style={{
            width: 130,
            height: 80,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          resizeMode="contain"
        />
        <Image
          source={images.cards}
          style={{ width: "100%", height: 400 }}
          resizeMode="contain"
        />
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: "#fafafa",
            fontSize: 28,
            textAlign: "center",
            width: "90%",
            marginHorizontal: "auto",
          }}
        >
          Discover Endless Possibilites with{" "}
          <Text style={{ color: "#FFA001" }}>Aora</Text>
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            fontSize: 14,
            textAlign: "center",
            marginTop: 36,
            color: "#fafafa80",
            width: "98%",
            marginHorizontal: "auto",
          }}
        >
          Where creativity meets innovation: embark on a journey of limitless
          exploration with Aora
        </Text>
        <CustomButton
          title="Continue with Email"
          handlePress={() => router.push("/sign-in")}
          containerStyles={{
            backgroundColor: "#FFA001",
            height: 62,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "95%",
            marginHorizontal: "auto",
            marginTop: 36,
            borderRadius: 10,
          }}
        />
      </ScrollView>
      <StatusBar style="light" backgroundColor="#161622" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#161622",
    height: "100%",
  },
});
