import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import GobackMenu from "../Components/goBackMenu";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimed from "../Components/dateTimed";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const registerComplate_one = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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
      <GobackMenu header={t("Profili Tamamla")} />
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView
          contentContainerStyle={{ width: "100%", paddingVertical: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.textHeaderRegisterComplate}>
            {t(
              "Endişelenmeyin, kişisel verilerinizi yalnızca siz görebilirsiniz."
            )}
            {t("Başka hiç kimse bunu göremeyecek.")}
          </Text>
          <View style={styles.generateTopUploadImages}>
            <View style={styles.topPurpleGenerated}>
              <View style={styles.purpleProfile}>
                <AntDesign name="user" size={42} color={colors.color_white} />
              </View>
              <TouchableOpacity style={styles.editProfileIconTop}>
                <Feather name="edit" size={14} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
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
          </View>
          <View style={{ width: "100%", marginVertical: 20 }}>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() =>
                navigation.navigate("pages/loginFile/registerComplate_two")
              }
            >
              <Text style={styles.purpleButton_text}>{t("Devam")}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default registerComplate_one;
