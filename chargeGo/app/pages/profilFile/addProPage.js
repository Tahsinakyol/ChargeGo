import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Image,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Link, useNavigation } from "expo-router";
import Menu from "../Components/menu";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const AddProPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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
      <Menu header="ChargeGO  PRO" />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingHorizontal: 15,
          paddingBottom: insets.bottom + 15,
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            paddingTop: 50,
            alignItems: "center",
            gap: 20,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: "50%", height: 80 }}
            source={require("../../../assets/images/logo.png")}
          />
          <Text style={[styles.textWalletButton, { fontSize: 18 }]}>
            <Text style={{ fontWeight: "900" }}>19.90 TL</Text> / {t("AY")}
          </Text>
          <Text style={styles.textWalletButton}>
            ChargeGO{" "}
            {t(
              "Özelliklerini Kullanmak ve pro üyelik avantajlarından faydalanmak için Üye olabilirsiniz."
            )}
          </Text>
          <TouchableOpacity
            style={styles.orangeLoginButton}
            onPress={() => navigation.navigate("pages/loginFile/registerPage")}
          >
            <Text style={styles.purpleButton_text}>{t("Üye Ol")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddProPage;
