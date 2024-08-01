import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import createStyles from "../../../assets/css/style";
import { useNavigation } from "expo-router";
import useThemeColors from "../../../assets/css/useThemeColors";
const GobackMenu = ({ header = "" }) => {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: 35,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack("")}
      >
        <AntDesign name="arrowleft" size={24} color={colors.color_black} />
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: "500",
          textAlign: "center",
          fontSize: 18,
          color: colors.color_black,
        }}
      >
        {header}
      </Text>
      <View style={styles.goBackButton}></View>
    </View>
  );
};

export default GobackMenu;
