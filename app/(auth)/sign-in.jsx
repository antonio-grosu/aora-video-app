import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import { useState } from "react";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
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
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
