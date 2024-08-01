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
import GobackMenu from "../Components/goBackMenu";
import { useState, useRef, useEffect } from "react";
import SuccessModal from "../Components/successModal";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const LoginOtpPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [opened, setOpened] = useState(false);
  const [numbers, setNumbers] = useState(55);
  const [successModal, setSuccessModal] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const clickledHome = () => {
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      navigation.navigate("pages/home/homePage");
    }, 2000);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (numbers !== 0) {
        setNumbers((prevNumbers) => prevNumbers - 1);
      } else {
        clearInterval(interval); // Sayı sıfıra ulaştığında interval'i durdur
      }
    }, 1000);

    return () => clearInterval(interval); // Component unmount edildiğinde interval'i temizle
  }, [numbers]); // numbers state'i her değiştiğinde useEffect yeniden çalışacak

  const handleChange = (text, index) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    } else {
      setOpened(true);
    }
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: insets.bottom + 15,
        paddingTop: insets.top + 15,
        paddingHorizontal: 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <GobackMenu />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 15, paddingVertical: 15 }}
        >
          <Text style={styles.purpleBoldHeader_registerStep}>
            {t("4 Haneli kodu girmelisin")}
          </Text>
          <Text style={styles.textExplainNumber}>
            {t("Telefon numarasına bir OTP kodu gönderdik")} *** *** ** 64.
            {t("İmzalamak için aşağıdaki OTP kodunu girin")}
          </Text>
          <View style={styles.code_mainFour}>
            {code.map((value, index) => (
              <TextInput
                key={index}
                value={value}
                onChangeText={(text) => handleChange(text, index)}
                maxLength={1}
                keyboardType="numeric"
                style={styles.centerInputGenerate}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.smalOtpText}>
              {t("Kod gönderildi giriş için")}{" "}
              <Text
                style={{ color: colors.color_sliderPurple, fontWeight: "900" }}
              >
                {numbers}{" "}
              </Text>
              {t("saniye")}
            </Text>
            <TouchableOpacity>
              <Text style={{ color: "#EC6047" }}>{t("Tekrar Gönder")}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPressIn={clickledHome}
            style={[styles.orangeLoginButton, { marginTop: 15 }]}
            onPress={() => navigation.navigate("pages/loginFile/loginOtpPage")}
          >
            <Text style={styles.orangeButtonText}>{t("Onay")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <SuccessModal
        setOpenModal={setSuccessModal}
        openModal={successModal}
        modalHeader={t("Doğrulama Başarılı")}
        modalDetail={t("AnaSayfaya Yönlendiriliyor")}
      />
    </View>
  );
};

export default LoginOtpPage;
