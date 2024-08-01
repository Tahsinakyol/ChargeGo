import { TouchableOpacity, View, Text, Image, Dimensions } from "react-native";
import createStyles from "../../../assets/css/style";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { SetGlobalCharge } from "../../redux/action";
import useThemeColors from "../../../assets/css/useThemeColors";
const CardBottom = () => {
  const { height, width } = Dimensions.get("window");
  const screen = height * 1;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity
      style={styles.cardBottomOuther}
      onPress={() => {
        navigation.navigate("pages/sarjFile/chargeStartPage"),
          dispatch(SetGlobalCharge(""));
      }}
    >
      <View style={styles.cardHeaderGreens}>
        <View style={styles.leftCardHeader_homePage}>
          <Feather name="users" size={16} color="#fff" />
          <Text style={styles.colorWhiteGreen}>Bu İstasyon Herkese Açık</Text>
        </View>
        <Feather name="check-circle" size={20} color="#3BC908" />
      </View>
      <Text style={styles.boldCardHeader}>Forum İstanbul</Text>
      <Text style={styles.detailBottomCardText}>
        Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul
      </Text>
      <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
        <View style={styles.explainDetailCard}>
          <FontAwesome6 name="car" size={14} color="#EC6047" />
          <Text style={styles.explainDetailCardText}>5.5km</Text>
        </View>
        <View style={styles.explainDetailCard}>
          <MaterialCommunityIcons
            name="brightness-percent"
            size={14}
            color="#EC6047"
          />
          <Text style={styles.explainDetailCardText}>% 2 İndirim</Text>
        </View>
        <View style={styles.explainDetailCard}>
          <Feather name="gift" size={14} color="#EC6047" />
          <Text style={styles.explainDetailCardText}>100 TL </Text>
        </View>
      </View>
      {screen > 600 ? (
        <>
          <View
            style={{
              width: "100%",
              gap: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Text style={styles.boldCardBottomLast}>2AC</Text>
              <Image
                style={styles.imagesBanners}
                resizeMode="contain"
                source={require("../../../assets/images/system/banner/bannerOrange.png")}
              />
              <Text style={[styles.boldCardBottomLast, { color: "#3BC908" }]}>
                Uygun
              </Text>
            </View>
            <View style={{ alignItems: "center", gap: 2 }}>
              <Ionicons name="time-outline" size={20} color="#411982" />
              <Text style={[styles.boldCardBottomLast, { color: "#EC6047" }]}>
                7/24
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <Text style={styles.boldCardBottomLast}>2DC</Text>
              <Image
                style={styles.imagesBanners}
                resizeMode="contain"
                source={require("../../../assets/images/system/banner/bannerPurple.png")}
              />
              <Text style={[styles.boldCardBottomLast, { color: "#3BC908" }]}>
                Uygun
              </Text>
            </View>
          </View>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default CardBottom;
