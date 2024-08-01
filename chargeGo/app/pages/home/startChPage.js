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
import { FontAwesome6 } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Menu from "../Components/menu";
import { useState } from "react";
import useThemeColors, {
  color_white,
} from "../../../assets/css/useThemeColors";
import { Select } from "native-base";
import CircualComponents from "../Components/circualComponent";
import { useTranslation } from "react-i18next";
const StartChPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <LinearGradient
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: insets.bottom + 15,
      }}
      colors={["#140849", "#220792", "#000"]}
    >
      <StatusBar style="light" />
      <View
        style={{
          width: "100%",
          flex: 1,
          padding: 15,
          paddingTop: insets.top + 15,
          alignItems: "center",
        }}
      >
        <LinearGradient
          colors={["#140849", "#220792"]}
          style={styles.newCharge_Circle}
        >
          <LinearGradient
            colors={["#140849", "#220792"]}
            style={styles.inNewX_charge}
          >
            <LinearGradient
              colors={["#140849", "#220792"]}
              style={[styles.inNewX_charge, { padding: 10 }]}
            >
              <CircualComponents percentage={68} cost={7.69} />
            </LinearGradient>
          </LinearGradient>
        </LinearGradient>
      </View>
      <View
        style={{
          width: "100%",
          flex: 2,
          overflow: "hidden",
          flexDirection: "row",
          gap: 15,
        }}
      >
        <View
          style={{
            position: "absolute",
            right: 0,
            height: 250,
            top: 60,
            width: "70%",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "100%",
              right: -100,
            }}
            resizeMode="contain"
            source={require("../../../assets/images/system/bmw.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontWeight: "700",
              fontSize: 24,
              right: -50,
            }}
          >
            BMW i7 M4
          </Text>
        </View>
        <View style={{ width: "50%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10, paddingTop: 100, padding: 15 }}
          >
            <Text style={styles.scroolTextHeader}>{t("Menzil")}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../../assets/images/system/chargeImage/cv1.png")}
              />
              <Text style={{ fontWeight: "600", color: "#fff", fontSize: 17 }}>
                125 km
              </Text>
            </View>
            <Text style={styles.scroolTextHeader}>{t("Süre")}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ width: 20, height: 25 }}
                resizeMode="contain"
                source={require("../../../assets/images/system/chargeImage/cv2.png")}
              />
              <Text style={{ fontWeight: "600", color: "#fff", fontSize: 17 }}>
                1 sa 10 dak
              </Text>
            </View>
            <Text style={styles.scroolTextHeader}>{t("Enerji")}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ width: 20, height: 35 }}
                resizeMode="contain"
                source={require("../../../assets/images/system/chargeImage/cv3.png")}
              />
              <Text style={{ fontWeight: "600", color: "#fff", fontSize: 17 }}>
                65 kWs
              </Text>
            </View>
            <Text style={styles.scroolTextHeader}>{t("Ücret")}</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Image
                style={{ width: 20, height: 15 }}
                resizeMode="contain"
                source={require("../../../assets/images/system/chargeImage/cv4.png")}
              />
              <Text style={{ fontWeight: "600", color: "#fff", fontSize: 17 }}>
                650 ₺
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={{ width: "100%", paddingHorizontal: 15 }}
        onPress={() => navigation.goBack("")}
      >
        <LinearGradient
          colors={["#00418D", "#0070F3"]}
          style={{
            width: "100%",
            borderRadius: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.purpleButton_text}>{t("Sarjı Bitir")}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default StartChPage;
