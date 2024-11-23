import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants/index";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={otherStyles}>
      <Text style={{ color: "#fafafa", fontFamily: "Poppins-Medium" }}>
        {title}
      </Text>
      <View
        style={{
          width: "100%",
          height: 64,
          marginTop: 10,
          backgroundColor: "#03071250",
          borderRadius: 12,
        }}
      >
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#fafafa20"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          style={{ color: "#fafafa", flex: 1, paddingHorizontal: 16 }}
        >
          {title == "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={!showPassword ? icons.eye : icons.eyeHide}
                style={{ width: 24, height: 24, flexDirection: "row" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}
        </TextInput>
      </View>
    </View>
  );
};

export default FormField;
