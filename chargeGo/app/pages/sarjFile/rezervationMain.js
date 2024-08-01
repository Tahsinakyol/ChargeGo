import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Toolbar from "../Components/toolbar";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const RezervationMain = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      type: "AC / DC",
      name: "Forum İstanbul AVM ",
      location: "Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul",
      far: 5.5,
      discound: 2,
      price: 100,
    },
    {
      id: 2,
      type: "AC / DC",
      name: "Forum İstanbul AVM ",
      location: "Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul",
      far: 5.5,
      discound: 2,
      price: 100,
    },
    {
      id: 3,
      type: "AC / DC",
      name: "Forum İstanbul AVM ",
      location: "Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul",
      far: 5.5,
      discound: 2,
      price: 100,
    },
  ];
  const renderData = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.buttonRezervationPage}
        onPress={() => navigation.navigate("pages/sarjFile/myCarsPage")}
      >
        <View style={{ alignItems: "center", gap: 2 }}>
          <Image
            style={{ width: 30, height: 30 }}
            resizeMode="contain"
            source={require("../../../assets/images/system/infoImages/i1.png")}
          />
          <Text style={styles.textNameTypeCard}>{item.type}</Text>
        </View>
        <View style={{ flex: 1, gap: 5 }}>
          <Text
            style={styles.textNameTypeCard}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.name}
          </Text>
          <Text style={styles.locationTextCardRezervation}>
            {item.location}
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              gap: 15,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <View
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
            >
              <FontAwesome5 name="car-alt" size={20} color="#EC6047" />
              <Text style={styles.text_rezervationCardDetails}>
                {item.far} km
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name="brightness-percent"
                size={20}
                color="#EC6047"
              />
              <Text style={styles.text_rezervationCardDetails}>
                %{item.discound} indirim
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", gap: 2, alignItems: "center" }}
            >
              <FontAwesome5 name="gift" size={20} color="#EC6047" />
              <Text style={styles.text_rezervationCardDetails}>
                {item.price} TL
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <View style={styles.rezervationBanner}>
        <TouchableOpacity
          onPress={() => navigation.goBack("")}
          style={{
            width: 30,
            height: 35,
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <MaterialIcons
            name="keyboard-arrow-left"
            size={24}
            color={colors.color_black}
          />
        </TouchableOpacity>
        <View style={styles.bannerSearchedRezervation}>
          <TouchableOpacity style={styles.searchButttonBanner_Rezervation}>
            <AntDesign name="search1" size={16} color="gray" />
          </TouchableOpacity>
          <TextInput
            style={styles.inBannerSearchInputs}
            placeholder="Konum Ara"
            numberOfLines={1}
            placeholderTextColor={"gray"}
          />
        </View>
        <TouchableOpacity style={styles.purpleCircleButtons_banner}>
          <Ionicons
            name="filter-outline"
            size={16}
            color={colors.color_white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.purpleCircleButtons_banner}>
          <Entypo name="location" size={16} color={colors.color_white} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "100%", flex: 1 }}>
        <FlatList
          data={data}
          renderItem={renderData}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            width: "100%",
            padding: 15,
            gap: 10,
            paddingTop: 0,
            paddingBottom: 20,
          }}
        />
      </View>
      <Toolbar />
    </View>
  );
};

export default RezervationMain;
