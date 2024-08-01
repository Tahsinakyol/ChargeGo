import {
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const MainLoginPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [loginTab, setLoginTab] = useState(1);
  const [sawPassword, setSawPassword] = useState(true);
  const [rememberCheck, setRememberCheck] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={[
        styles.loginMainLİne,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          backgroundColor: colors.color_bge,
        },
      ]}
    >
      <StatusBar style="light" />
      <View style={styles.login_inner}>
        <View style={[styles.registerLogo_outher, { flex: 1 }]}>
          <Image
            style={styles.logoLoginPage}
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
          />
        </View>
        <KeyboardAvoidingView
          style={[styles.registerInner_Main, { flex: 14 }]}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={{ width: "100%", flex: 1 }}>
            <ScrollView
              contentContainerStyle={{ padding: 15, gap: 15 }}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.tabLogins}>
                <TouchableOpacity
                  style={
                    loginTab == 1
                      ? styles.activeButton_login
                      : styles.pasiveButton_login
                  }
                  onPress={() => setLoginTab(1)}
                >
                  <Text style={styles.textLoginTabMenu}>{t("E-Posta")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    loginTab == 2
                      ? styles.activeButton_login
                      : styles.pasiveButton_login
                  }
                  onPress={() => setLoginTab(2)}
                >
                  <Text style={styles.textLoginTabMenu}>{t("Telefon")}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.loginInput_generate}>
                {loginTab == 1 ? (
                  <>
                    <View style={{ width: "100%", gap: 2 }}>
                      <Text style={styles.inputloginTopText}>
                        {t("E-Posta")}
                      </Text>
                      <TextInput
                        placeholder={t("E Posta Adresinizi Yazınız")}
                        style={styles.inputLoginPage}
                        placeholderTextColor={"gray"}
                        keyboardType="email-address"
                      />
                    </View>
                  </>
                ) : (
                  <>
                    <View style={{ width: "100%", gap: 2 }}>
                      <Text style={styles.inputloginTopText}>
                        {t("Telefon")}
                      </Text>
                      <TextInput
                        placeholder={t("Telefon Numaranızı Yazınız")}
                        style={styles.inputLoginPage}
                        placeholderTextColor={"gray"}
                        keyboardType="numeric"
                      />
                    </View>
                  </>
                )}
                <View style={{ width: "100%", gap: 2 }}>
                  <Text style={styles.inputloginTopText}>{t("Şifre")}</Text>
                  <View style={{ width: "100%", flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        placeholder={t("Şifrenizi Yazınız")}
                        style={[styles.inputLoginPage, { paddingRight: 50 }]}
                        placeholderTextColor={"gray"}
                        secureTextEntry={sawPassword}
                      />
                    </View>
                    <TouchableOpacity
                      style={styles.buttonSawPassord}
                      onPress={() => setSawPassword(!sawPassword)}
                    >
                      {sawPassword == true ? (
                        <>
                          <Entypo name="eye" size={20} color="gray" />
                        </>
                      ) : (
                        <>
                          <Entypo name="eye-with-line" size={20} color="gray" />
                        </>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={() => setRememberCheck(!rememberCheck)}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <View style={styles.rememberMeChecked}>
                      {rememberCheck == true ? (
                        <>
                          <Entypo
                            name="check"
                            size={14}
                            color={colors.color_black}
                          />
                        </>
                      ) : null}
                    </View>
                    <Text style={styles.remmemberText}>
                      {t("Beni Hatırla")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Text style={styles.remmemberText}>
                      {t("Şifremi Unutum")} ?
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={[styles.orangeLoginButton, { marginTop: 15 }]}
                  onPress={() =>
                    navigation.navigate("pages/loginFile/loginOtpPage")
                  }
                >
                  <Text style={styles.orangeButtonText}>{t("Oturum Aç")}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.buttonLastEnd_login,
                    { justifyContent: "space-between" },
                  ]}
                  onPress={() =>
                    navigation.navigate("pages/loginFile/registerPage")
                  }
                >
                  <Text
                    style={[
                      styles.whiteButtonEndPage,
                      { color: colors.color_black },
                    ]}
                  >
                    {t("Hesabınız Yokmu")} ?
                  </Text>
                  <Text
                    style={[styles.whiteButtonEndPage, { color: "#1F93FF" }]}
                  >
                    {t("Hesap Oluştur")}
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
          <View style={{ width: "100%", padding: 15 }}>
            <TouchableOpacity
              style={[styles.transparentButton, { borderColor: "gray" }]}
              onPress={() => navigation.navigate("pages/home/homePage")}
            >
              <Text
                style={[
                  styles.whiteButtonEndPage,
                  { color: colors.color_black },
                ]}
              >
                Misafir Olarak Devam Et
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default MainLoginPage;
