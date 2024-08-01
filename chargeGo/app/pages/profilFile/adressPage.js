import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import Menu from "../Components/menu";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import SelectComp from "../Components/select";
import { Select } from "native-base";
import RegisterContent from "../Components/registerContent";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const AdressPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
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

      <Menu header={t("Adreslerim")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          paddingTop: 15,
          gap: 10,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            <View style={styles.profileAdressCardGenerate}>
              <Text style={styles.addressHeader_orange}>Ev</Text>
              <Text style={styles.detailAddress}>
                Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul
              </Text>
            </View>
            <View style={styles.profileAdressCardGenerate}>
              <Text style={styles.addressHeader_orange}>Adresi</Text>
              <Text style={styles.detailAddress}>
                Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul
              </Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity style={styles.purpleButton}>
          <Text style={styles.purpleButton_text}>{t("Adres Ekle")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdressPage;
