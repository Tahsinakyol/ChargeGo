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
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Menu from "../Components/menu";
import useThemeColors from "../../../assets/css/useThemeColors";
const myCarsPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [chooseCar, setChooseCar] = useState(1);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  //   car data start
  const carData = [
    {
      id: 1,
      image: require("../../../assets/images/system/togg.png"),
      name: "Togg",
      model: "TX 10 75 kWs",
    },
    {
      id: 2,
      image: require("../../../assets/images/system/togg.png"),
      name: "Audi",
      model: "Q7 .TX 10 75 kWs",
    },
    {
      id: 3,
      image: require("../../../assets/images/system/togg.png"),
      name: "BMW",
      model: "M 10  100 kWs",
    },
  ];
  const renderCarData = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.buttonChooseCar}
        onPress={() => setChooseCar(item.id)}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            style={styles.imagesChargeCard}
            resizeMode="contain"
            source={item.image}
          />
          <View>
            <Text style={styles.textBoldCardCharge}>{item.name}</Text>
            <Text
              style={[
                styles.textBoldCardCharge,
                { fontWeight: "500", fontSize: 14 },
              ]}
            >
              {item.model}
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
  //   car data end
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <Menu header={t("Araç Seçiniz")} menuType="plus" />
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
              ? navigation.navigate("pages/sarjFile/qrChargepage")
              : navigation.navigate("pages/sarjFile/socketPage")
          }
        >
          <Text style={styles.purpleButton_text}>{t("İleri")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default myCarsPage;
