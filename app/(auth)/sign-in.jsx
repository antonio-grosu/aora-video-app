import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);
      Alert.alert("Success", "User signed successfully");
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#161622",
        height: "100%",
      }}
    >
      <ScrollView
        style={{
          paddingHorizontal: 14,
          paddingVertical: 64,
          height: "85%",
        }}
      >
        <View>
          <Image
            source={images.logo}
            style={{
              width: 130,
              height: 80,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              marginTop: 32,
              fontSize: 28,
              color: "#fafafa",
            }}
          >
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 54 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 24 }}
            keyboardType="password"
          />
          {/* test2005 */}
          <CustomButton
            title="Sign In"
            handlePress={submit}
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
          <View
            style={{
              marginTop: 12,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Medium",
                color: "#fafafa",
              }}
            >
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              style={{ color: "#FFA001", fontFamily: "Poppins-SemiBold" }}
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
