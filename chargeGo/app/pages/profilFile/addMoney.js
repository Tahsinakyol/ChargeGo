import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
import useThemeColors from "../../../assets/css/useThemeColors";
const AddMoney = () => {
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
        paddingBottom: insets.bottom + 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Para Yükleme")} menuType="filter" />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              gap: 10,
            }}
          >
            <View
              style={{
                width: "100%",
                height: 60,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: colors.color_white,
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Text style={styles.textWalletButton}>14: 30 01.06.2024</Text>
              <Text style={styles.textWalletButton}>**** 6564</Text>
              <Text style={styles.textWalletButton}>300 ₺</Text>
            </View>
            <View
              style={{
                width: "100%",
                height: 60,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: colors.color_white,
                padding: 15,
                borderRadius: 10,
              }}
            >
              <Text style={styles.textWalletButton}>14: 30 01.06.2024</Text>
              <Text style={styles.textWalletButton}>**** 6564</Text>
              <Text style={styles.textWalletButton}>300 ₺</Text>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => navigation.navigate("pages/profilFile/addMoneySecond")}
        >
          <Text style={styles.purpleButton_text}>{t("Para Yükle")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddMoney;
