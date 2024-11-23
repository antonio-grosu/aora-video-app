import { View, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, handlePress, containerStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={containerStyles}
    >
      <Text
        style={{
          fontFamily: "Poppins-SemiBold",
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
