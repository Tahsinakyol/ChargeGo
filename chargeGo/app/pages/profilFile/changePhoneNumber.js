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
const ProfilAccount = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [activeMenu, setActiveMenu] = useState(1);
  const [swich, setSwich] = useState(false);
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
      <Menu header={t("Hesabım")} />
      <StatusBar style="light" />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          gap: 10,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            <View style={styles.orangeAlertBottom}>
              <AntDesign name="warning" size={24} color="#EC6047" />
              <Text style={styles.seeBtwLeftText}>
                {t(
                  "Yeni telefon numarası değişikliğinde sms onaykodu gödnerilecektir."
                )}{" "}
                {t("Eski kayıtlı telefon numaranızı onay kodu gidecektir.")}
              </Text>
            </View>
            <Text style={styles.inputRegisterTops}>
              Telefon Numaranızı Giriniz
            </Text>
            <TextInput
              style={styles.inputChangePhoneNumber}
              placeholderTextColor={colors.color_gray}
              keyboardType="numeric"
            />
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() =>
            navigation.navigate("pages/profilFile/changeProfileNumber")
          }
        >
          <Text style={styles.purpleButton_text}>{t("Onayla")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilAccount;
