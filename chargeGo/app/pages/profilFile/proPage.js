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
const ProPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [menu, setMenu] = useState(1);
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
          //   paddingBottom: insets.bottom + 15,
        }}
      >
        <LinearGradient
          colors={["#4316B7", "#1E0A51"]}
          start={[0, 0]}
          end={[1, 1]}
          style={{
            width: "100%",
            flex: 1,
            backgroundColor: "#4316B7",
            paddingTop: 50,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            resizeMode="contain"
            style={{ width: "50%", height: 100 }}
            source={require("../../../assets/images/logo.png")}
          />
          <Image
            resizeMode="cover"
            style={{ width: "100%", height: 350 }}
            source={require("../../../assets/images/slider/Objects.png")}
          />
        </LinearGradient>
        <View
          style={{
            backgroundColor: colors.color_white,
            padding: 25,
            gap: 25,
            paddingBottom: insets.bottom + 25,
          }}
        >
          <Text style={styles.textWalletButton}>
            ChargeGO {t("Proya Abone Değilsiniz.")}{" "}
            {t(
              "Fiyatlandırma ve Kampanyalardan faydalanmak için bize üye olun"
            )}
          </Text>
          <TouchableOpacity
            style={styles.orangeLoginButton}
            onPress={() => navigation.navigate("pages/profilFile/addProPage")}
          >
            <Text style={styles.purpleButton_text}>
              {t("Abonelik Seçenekleri")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProPage;
