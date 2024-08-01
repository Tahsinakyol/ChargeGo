import {
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Text,
  Image,
  Animated,
  Modal,
  ScrollView,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Select } from "native-base";
import Menu from "../Components/menu";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const CameraPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",

        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Resim Ekle")} />
      <View style={{ width: "100%", flex: 1 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          source={require("../../../assets/images/system/camera_img.png")}
        />
      </View>
      <View
        style={{
          paddingBottom: insets.bottom + 15,
          backgroundColor: colors.color_bge,
          paddingTop: 15,
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.buttonGobackCamera}
          onPress={() => navigation.goBack("")}
        >
          <AntDesign name="arrowleft" size={18} color={colors.color_white} />
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: colors.color_bge,
            width: width * 0.18,
            height: width * 0.18,
            position: "absolute",
            left: width * 0.4,
            top: -(width * 0.03),
            borderRadius: width / 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.buttonGobackCamera}>
            <AntDesign name="camerao" size={18} color={colors.color_white} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonGobackCamera}>
          <AntDesign name="folder1" size={18} color={colors.color_white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraPage;
