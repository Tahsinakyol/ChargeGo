import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import Menu from "../Components/menu";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SocketPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [chooseCar, setChooseCar] = useState(1);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  //   Sarj a Type start
  const carData = [
    {
      id: 1,
      image: require("../../../assets/images/system/cgIcon.png"),
      name: "Tesla  ( P.... AC/DC)",
      kv: 50,
    },
    {
      id: 2,
      image: require("../../../assets/images/system/cgIcon.png"),
      name: "Tesla  ( P.... AC/DC)",
      kv: 60,
    },
    {
      id: 3,
      image: require("../../../assets/images/system/cgIcon.png"),
      name: "Tesla  ( P.... AC/DC)",
      kv: 70,
    },
    {
      id: 4,
      image: require("../../../assets/images/system/cgIcon.png"),
      name: "Tesla  ( P.... AC/DC)",
      kv: 70,
    },
    {
      id: 5,
      image: require("../../../assets/images/system/cgIcon.png"),
      name: "Tesla  ( P.... AC/DC)",
      kv: 70,
    },
  ];
  const renderCarData = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.buttonChooseCar}
        onPress={() => setChooseCar(item.id)}
      >
        <View
          style={{ flex: 1, height: "100%", padding: 10, flexDirection: "row" }}
        >
          <View
            style={{
              flex: 1,
              height: "100%",
              borderRightWidth: 1,
              borderRightColor: "#dadada",
              gap: 5,
            }}
          >
            <Text
              style={styles.textSocket}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
            <Image
              style={styles.imagesSocketPage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              gap: 5,
              paddingLeft: 10,
            }}
          >
            <Text
              style={styles.textSocket}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Max Power
            </Text>
            <Text
              style={[styles.textSocket, { fontWeight: "700" }]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.kv} kW
            </Text>
          </View>
        </View>
        <View style={styles.chargeCarChoose}>
          {chooseCar == item.id ? (
            <>
              <View style={styles.chargeCarChoose_inner}></View>
            </>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  //   Sarj a Type end
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <Menu header={t("Sarj Türünü Seçiniz")} menuType="plus" />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        <StatusBar style="light" />

        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={carData}
            renderItem={renderCarData}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ width: "100%", gap: 10 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() =>
            GeneralResponse.globalCharge == "start"
              ? navigation.navigate("pages/sarjFile/chargeStartPage")
              : navigation.navigate("pages/sarjFile/reservationPage")
          }
        >
          <Text style={styles.purpleButton_text}>{t("İleri")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocketPage;
