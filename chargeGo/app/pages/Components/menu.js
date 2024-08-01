import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import createStyles from "../../../assets/css/style";
import { useNavigation } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
const Menu = ({ header = "", menuType = "" }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <LinearGradient
      colors={[colors.color_gradient1, colors.color_gradient2]}
      start={[0, 0]}
      end={[1, 1]}
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        paddingTop: insets.top + 15,
      }}
    >
      <View style={{ alignItems: "center", flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.buttonGoBack_charger}
          onPress={() => navigation.goBack("")}
        >
          <MaterialIcons name="arrow-back-ios-new" size={16} color="#fff" />
        </TouchableOpacity>
        <Text style={[styles.textHeaderTops, { color: "#fff" }]}>{header}</Text>
      </View>
      {menuType == "plus" ? (
        <>
          <TouchableOpacity
            style={[styles.circleOrangeButtonAddCard, { borderColor: "#fff" }]}
          >
            <Fontisto name="plus-a" size={14} color="#fff" />
          </TouchableOpacity>
        </>
      ) : menuType == "qr" ? (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate("pages/sarjFile/qrChargepage")}
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#fff",
            }}
          >
            <MaterialCommunityIcons name="qrcode-scan" size={14} color="#fff" />
          </TouchableOpacity>
        </>
      ) : menuType == "filter" ? (
        <>
          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="filter" size={18} color="#fff" />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <View style={{ width: 25, height: 25 }}></View>
        </>
      )}
    </LinearGradient>
  );
};

export default Menu;
