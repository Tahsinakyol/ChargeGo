import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import RegisterContent from "../Components/registerContent";
import { useTranslation } from "react-i18next";
const RegisterPage = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const { t } = useTranslation();
  return (
    <View
      style={[
        styles.loginMainLine,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="light" />
      <View style={styles.login_inner}>
        <View style={styles.registerLogo_outher}>
          <Image
            style={styles.logoLoginPage}
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.registerInner_Main}>
          <ScrollView
            contentContainerStyle={{ padding: 15 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ width: "100%", alignItems: "center", gap: 10 }}>
              <Text style={styles.registerWhiterHeader}>
                ChargeGo{t("’ya")} {t("Hoş Geldin")}
              </Text>
              <Text style={styles.textDetailRegistered}>
                {t(
                  "Lütfen telefon numaranızı girin. Doğrulama işleminin bir sonraki adımında bir OTP kodu alacaksınız"
                )}
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  gap: 10,
                  marginVertical: 30,
                }}
              >
                <TextInput
                  keyboardType="numeric"
                  style={styles.inputLeftPhone}
                  value="+90"
                />
                <TextInput
                  value="533 236 65 64"
                  keyboardType="numeric"
                  style={styles.registerRightInput}
                />
              </View>
              <RegisterContent
                explain={
                  "Kampanya veya duyurulardan SMS ile haberdar olmak istiyorum."
                }
              />
              <RegisterContent
                explain={
                  "Kampanya veya duyurulardan SMS ile haberdar olmak istiyorum."
                }
              />

              <TouchableOpacity
                style={styles.registerButton}
                onPress={() =>
                  navigation.navigate("pages/loginFile/registerStepSecond")
                }
              >
                <Text style={styles.buttonRegisterText}>{t("Üye Ol")}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RegisterPage;
