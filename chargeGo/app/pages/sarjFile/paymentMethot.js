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
import Menu from "../Components/menu";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const PaymentMethot = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [clicked, setClicked] = useState(1);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      image: require("../../../assets/images/methot/walletImage.png"),
      price: 360,
      name: t("Cüzdan"),
    },
    {
      id: 2,
      image: require("../../../assets/images/methot/googleImage.png"),
      name: "Google Pay",
    },
    {
      id: 3,
      image: require("../../../assets/images/methot/appImage.png"),
      name: "Apple Pay",
    },
    {
      id: 4,
      image: require("../../../assets/images/methot/creitCardImage.png"),
      name: "6868 6868 6868 6868",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setClicked(item.id)}
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          backgroundColor: colors.color_white,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={item.image}
          />
          {item.id == 4 ? (
            <>
              <Text style={styles.textChooseHourspage}>
                {"*".repeat(15) + item.name.slice(15)}
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.textChooseHourspage}>{item.name}</Text>
            </>
          )}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 5,
          }}
        >
          {item.name == "Cüzdan" ? (
            <>
              <Text style={styles.textChooseHourspage}>{item.price} TL</Text>
            </>
          ) : null}
          <View style={styles.chargeCarChoose}>
            {clicked == item.id ? (
              <>
                <View style={styles.chargeCarChoose_inner}></View>
              </>
            ) : null}
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
        backgroundColor: colors.color_bge,
      }}
    >
      <Menu header={t("Ödeme Metodu Seç")} menuType="qr" />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          gap: 15,
          backgroundColor: colors.color_bge,
        }}
      >
        <StatusBar style="light" />

        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          />
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => navigation.goBack("")}
        >
          <Text style={styles.purpleButton_text}>{t("Devam")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentMethot;
