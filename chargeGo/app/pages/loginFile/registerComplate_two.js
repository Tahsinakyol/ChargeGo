import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import GobackMenu from "../Components/goBackMenu";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Select } from "native-base";
import DateTimed from "../Components/dateTimed";
import SelectComp from "../Components/select";
import RegisterContent from "../Components/registerContent";
import { useDispatch } from "react-redux";
import { SetGlobalCar } from "../../redux/action";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const registerComplate_two = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const { t } = useTranslation();
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
      <GobackMenu header={t("Şimdi Üye Ol")} />
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView
          contentContainerStyle={{ width: "100%", paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Text
            style={[styles.textHeaderRegisterComplate, { marginBottom: 15 }]}
          >
            {t("Üye olun ekonomik şarjın keyfine bakın")}
          </Text>
          <View
            style={{
              width: "100%",
              padding: 15,
              gap: 15,
              backgroundColor: colors.color_white,
              borderRadius: 10,
            }}
          >
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>{t("Ad")}</Text>
              <TextInput
                placeholder={t("Adınızı Yazınız")}
                style={styles.inputRegisters}
                placeholderTextColor={"gray"}
              />
            </View>
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>{t("Soyad")}</Text>
              <TextInput
                placeholder={t("Soyadınızı Yazınız")}
                style={styles.inputRegisters}
                placeholderTextColor={"gray"}
              />
            </View>
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>Email</Text>
              <TextInput
                placeholder={t("E Posta Adresinizi Yazınız")}
                style={styles.inputRegisters}
                keyboardType="email"
                placeholderTextColor={"gray"}
              />
            </View>
            <DateTimed label={t("Doğum Tarihi")} />
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>
                {t("Telefon Numarası")}
              </Text>
              <TextInput
                placeholder={t("Telefon Numaranızı Yazınız")}
                style={styles.inputRegisters}
                keyboardType="numeric"
                placeholderTextColor={"gray"}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              padding: 15,
              gap: 15,
              backgroundColor: colors.color_white,
              marginTop: 15,
              borderRadius: 10,
            }}
          >
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>
                {t("T.C Kimlik Numarası")}
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  gap: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../../assets/images/trflag.png")}
                  resizeMode="contain"
                  style={{ width: 30, height: 30 }}
                />
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder={t("TC Kimik numaranızı Yazınız")}
                    style={[styles.inputRegisters, { borderBottomWidth: 0 }]}
                    keyboardType="numeric"
                    maxLength={11}
                    placeholderTextColor={"gray"}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              padding: 15,
              gap: 15,
              backgroundColor: colors.color_white,
              marginTop: 15,
              borderRadius: 10,
            }}
          >
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>{t("Davet Kodu")}</Text>
              <TextInput
                placeholder={t("Davet Kodunu Giriniz")}
                style={styles.inputRegisters}
                keyboardType="numeric"
                placeholderTextColor={"gray"}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              padding: 15,
              gap: 15,
              backgroundColor: colors.color_white,
              marginTop: 15,
              borderRadius: 10,
            }}
          >
            <SelectComp holder={"Ülke Seçiniz"} label={t("Ülke")}>
              <Select.Item label="Türkiye" value="Türkiye" />
            </SelectComp>
            <SelectComp holder={"Şehir Seçiniz"} label={t("Şehir")}>
              <Select.Item label="Aksaray" value="Aksaray" />
            </SelectComp>
            <SelectComp holder={"İlçe Seçiniz"} label={t("İlçe")}>
              <Select.Item label="Merkez" value="Merkez" />
            </SelectComp>
            <View style={styles.inputAndHeadersTops}>
              <Text style={styles.inputRegisterTops}>{t("Adres")}</Text>
              <TextInput
                multiline
                placeholder={t("Adres Yazınız")}
                style={styles.inputRegisters_area}
                placeholderTextColor={"gray"}
              />
            </View>
          </View>
          <View
            style={{
              width: "100%",
              padding: 15,
              gap: 15,
              backgroundColor: colors.color_white,
              marginTop: 15,
              borderRadius: 10,
            }}
          >
            <RegisterContent
              explain={
                "Kampanya veya duyurulardan SMS ile haberdar olmak istiyorum."
              }
            />
            <RegisterContent
              explain={
                "Kampanya ve duyurulardan . e-mail ile haberdar olmak istiyorum."
              }
            />
          </View>
          <View style={{ width: "100%", marginVertical: 20 }}>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() => {
                navigation.navigate("pages/carFile/createMain"),
                  dispatch(SetGlobalCar("register"));
              }}
            >
              <Text style={styles.purpleButton_text}>{t("Devam")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default registerComplate_two;
