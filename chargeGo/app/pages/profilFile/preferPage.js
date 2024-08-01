import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { SetThema } from "../../redux/action";
import useThemeColors, { color_bge } from "../../../assets/css/useThemeColors";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import * as SecureStore from "expo-secure-store";
const PreferPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [language, setLanguage] = useState(1);

  const { GeneralResponse } = useSelector((state) => state);
  const [themaHere, setThemaHere] = useState(
    GeneralResponse.thema == "light" ? 1 : 2
  );

  const selectedLanguage = async (lang) => {
    i18next.changeLanguage(lang);
    SecureStore.setItemAsync("lang", lang);
  };

  useEffect(() => {
    const setLanuage = async () => {
      try {
        const selectedLanguage = await SecureStore.getItemAsync("lang");
        if (selectedLanguage) {
          setLanguage(selectedLanguage == "tr" ? 1 : 2);
        }
      } catch (err) {
        console.log(err);
      }
    };

    setLanuage();
  }, [language]);

  const dispatch = useDispatch();
  console.log(GeneralResponse.thema);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Tercihler")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: insets.bottom + 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 15, paddingVertical: 15 }}
          >
            <Text style={styles.purpleTextSee}>{t("Dil seçimi")}</Text>
            <View style={styles.swichSetting_outher}>
              <TouchableOpacity
                onPress={() => {
                  setLanguage(1);
                  selectedLanguage("tr");
                }}
                style={styles.buttonPreferPage}
              >
                <Text
                  style={
                    language == 1
                      ? styles.activeLangText
                      : styles.pasiveLangText
                  }
                >
                  {t("Türkçe")}
                </Text>
                {language == 1 ? (
                  <>
                    <AntDesign name="check" size={24} color="#EC6047" />
                  </>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  selectedLanguage("en");
                  setLanguage(2);
                }}
                style={styles.buttonPreferPage}
              >
                <Text
                  style={
                    language == 2
                      ? styles.activeLangText
                      : styles.pasiveLangText
                  }
                >
                  {t("İngilizce")}
                </Text>
                {language == 2 ? (
                  <>
                    <AntDesign name="check" size={24} color="#EC6047" />
                  </>
                ) : null}
              </TouchableOpacity>
            </View>
            <Text style={styles.purpleTextSee}>{t("Tema Seçimi")}</Text>
            <View style={styles.swichSetting_outher}>
              <TouchableOpacity
                onPress={() => {
                  setThemaHere(1), dispatch(SetThema("light"));
                }}
                style={styles.buttonPreferPage}
              >
                <Text
                  style={
                    themaHere == 1
                      ? styles.activeLangText
                      : styles.pasiveLangText
                  }
                >
                  Light {t("Tema")}
                </Text>
                {themaHere == 1 ? (
                  <>
                    <AntDesign name="check" size={24} color="#EC6047" />
                  </>
                ) : null}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setThemaHere(2), dispatch(SetThema("dark"));
                }}
                style={styles.buttonPreferPage}
              >
                <Text
                  style={
                    themaHere == 2
                      ? styles.activeLangText
                      : styles.pasiveLangText
                  }
                >
                  Dark {t("Tema")}
                </Text>
                {themaHere == 2 ? (
                  <>
                    <AntDesign name="check" size={24} color="#EC6047" />
                  </>
                ) : null}
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PreferPage;
