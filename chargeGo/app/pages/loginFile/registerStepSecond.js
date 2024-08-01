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
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const registerStepSecond = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const [opened, setOpened] = useState(false);
  const [numbers, setNumbers] = useState(55);
  const colors = useThemeColors();
  const styles = createStyles(colors);
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
          {opened == true ? (
            <>
              <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                  navigation.navigate("pages/loginFile/registerComplate_one")
                }
              >
                <Text style={styles.buttonRegisterText}>{t("ONAY")}</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View style={[styles.code_mainFour, { marginVertical: 20 }]}>
                <View style={styles.circleRed_generate}>
                  <Text style={styles.numberCenter_orange}>{numbers}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setNumbers(55)}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 14, color: "gray" }}>
                  {t("Doğrulama Kodunu Yeniden Gönder")}
                </Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default registerStepSecond;
