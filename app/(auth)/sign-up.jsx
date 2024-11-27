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
import { useEffect, useState } from "react";
import CustomButton from "../../components/CustomButton";
import { createUser } from "../../lib/appwrite";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const { setUser, user, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setSubmitting] = useState(false);

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }
    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLoggedIn(true);
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
          height: "100%",
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
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles={{ marginTop: 54 }}
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles={{ marginTop: 24 }}
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles={{ marginTop: 24 }}
            keyboardType="password"
          />
          <CustomButton
            title="Sign Up"
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
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              style={{ color: "#FFA001", fontFamily: "Poppins-SemiBold" }}
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
