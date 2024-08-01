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
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { SetGlobalCharge } from "../../redux/action";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import createStyles from "../../../assets/css/style";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilPayment = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const navigation = useNavigation();
  const data = [
    {
      id: 2,
      image: require("../../../assets/images/methot/walletImage.png"),
      price: 360,
      name: t("Cüzdana Ödeme Ekle"),
      click: () =>
        navigation.navigate("pages/profilFile/addCreitCard", {
          slug: t("Kredi Kartı"),
        }),
    },
    {
      id: 3,
      image: require("../../../assets/images/methot/googleImage.png"),
      name: "Google Pay",
      click: () =>
        navigation.navigate("pages/profilFile/addCreitCard", {
          slug: t("Kredi Kartı"),
        }),
    },
    {
      id: 4,
      image: require("../../../assets/images/methot/appImage.png"),
      name: "Apple Pay",
      click: () =>
        navigation.navigate("pages/profilFile/addCreitCard", {
          slug: t("Kredi Kartı"),
        }),
    },
    {
      id: 1,
      image: require("../../../assets/images/methot/creitCardImage.png"),
      name: t("Kredi Kartı"),
      click: () =>
        navigation.navigate("pages/profilFile/addCreitCard", {
          slug: t("Kredi Kartı"),
        }),
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.profilpayment_outher}
        onPress={item.click}
      >
        <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
          <Image
            resizeMode="contain"
            style={{ width: 40, height: 40 }}
            source={item.image}
          />
          <Text style={styles.textChooseHourspage}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Ödeme Yöntemi")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 15, paddingBottom: 15 }}
            ListEmptyComponent={
              <View
                style={{
                  width: "100%",
                  height: height * 0.7,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Image
                  style={{ width: "60%", height: 180 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/emptyPayment.png")}
                />
                <Text style={[styles.activeLangText, { fontSize: 15 }]}>
                  {t("Ödeme yönetimi bulunamadı !")}
                </Text>
                <Text style={styles.textEmpyListDetail}>
                  {t("Şarjı başlatabilmek için ödeme yöntemi eklemelisiniz")}
                </Text>
              </View>
            }
          />
        </View>

        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() =>
            navigation.navigate("pages/profilFile/addCreitCard", {
              slug: "Kredi Kartı",
            })
          }
        >
          <Text style={styles.purpleButton_text}>{t("Ödeme Metodu Ekle")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilPayment;
