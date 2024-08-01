import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { SetGlobalCharge } from "../../redux/action";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const AddCreitCard = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const { slug } = useLocalSearchParams();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const navigation = useNavigation();

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <StatusBar style="light" />
      <Menu header={slug} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
          backgroundColor: colors.color_bge,
        }}
      >
        <KeyboardAvoidingView
          style={{ width: "100%", flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            <View
              style={[styles.favoriPage_outher, { flexDirection: "column" }]}
            >
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>{t("Kart Sahibi")}</Text>
                <TextInput
                  placeholder={t("Kart Üzerinde Yazan Ad Soyadınızı Giriniz")}
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                />
              </View>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>
                  {t("Kart Numarası")}
                </Text>
                <TextInput
                  placeholder="**** **** **** ****"
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                  keyboardType="numeric"
                />
              </View>
              <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
                <View style={{ flex: 1 }}>
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>
                      {t("Ay / Yıl")}
                    </Text>
                    <TextInput
                      placeholder="00 / 00"
                      style={styles.inputRegisters}
                      placeholderTextColor={"gray"}
                      keyboardType="numeric"
                    />
                  </View>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>CVC</Text>
                    <TextInput
                      placeholder="000"
                      style={styles.inputRegisters}
                      placeholderTextColor={"gray"}
                      keyboardType="numeric"
                      maxLength={3}
                    />
                  </View>
                </View>
              </View>
              <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
                <AntDesign name="infocirlceo" size={18} color="#dadada" />
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.textEmpyListDetail,
                      { textAlign: "justify" },
                    ]}
                  >
                    {t(
                      "Doğrulama amacı ile kartınızdan 1 TL çekilecek olup tekrar iade edilecektir."
                    )}
                  </Text>
                </View>
              </View>
              <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
                <AntDesign name="infocirlceo" size={18} color="#dadada" />
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.textEmpyListDetail,
                      { textAlign: "justify" },
                    ]}
                  >
                    {t("Sadece kredi kartı kabul edilmektedir.")}
                  </Text>
                </View>
              </View>
              <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
                <AntDesign name="infocirlceo" size={18} color="#dadada" />
                <View style={{ flex: 1 }}>
                  <Text
                    style={[
                      styles.textEmpyListDetail,
                      { textAlign: "justify" },
                    ]}
                  >
                    {t(
                      "Kart bilgilerin PCI -DSS kapsamında uyumlu saklanacaktır."
                    )}
                  </Text>
                </View>
              </View>
              <Image
                style={{ width: "100%", height: 50 }}
                resizeMode="contain"
                source={require("../../../assets/images/paymentMethod.png")}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => navigation.navigate("pages/profilFile/allCreditCard")}
        >
          <Text style={styles.purpleButton_text}>{t("Kart Ekle")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCreitCard;
