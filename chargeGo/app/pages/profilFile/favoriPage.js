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
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const FavoriPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      image: require("../../../assets/images/system/infoImages/i1.png"),
      status: t("Kapalı"),
      name: " Forum İstanbul AVM",
      address: "Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul",
      km: 5.5,
    },
    {
      id: 2,
      image: require("../../../assets/images/system/infoImages/i5.png"),
      status: t("Açık"),
      name: " 212 AVM ",
      address: "Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul",
      km: 6.5,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.favoriPage_outher}>
        <View style={{ alignItems: "center", gap: 2 }}>
          <Image
            style={{ width: 40, height: 30 }}
            resizeMode="contain"
            source={item.image}
          />
          <Text style={styles.swichSettingDetailText}>{item.status}</Text>
        </View>
        <View style={{ flex: 1, gap: 5 }}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.accountChangePhoneNumber}>{item.name}</Text>
            <AntDesign name="hearto" size={18} color="#EC6047" />
          </View>
          <Text style={[styles.textEmpyListDetail, { textAlign: "justify" }]}>
            {item.address}
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <AntDesign name="car" size={16} color="#EC6047" />
            <Text
              style={[
                styles.textEmpyListDetail,
                { textAlign: "justify", fontWeight: "700" },
              ]}
            >
              {item.km} km
            </Text>
            <MaterialCommunityIcons
              name="navigation-variant"
              size={12}
              color={colors.color_black}
            />
          </View>
        </View>
      </View>
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
      <Menu header={t("Favorilerim")} />
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
                  style={{ width: "40%", height: 100 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/empty.png")}
                />
                <Text style={[styles.activeLangText, { fontSize: 15 }]}>
                  Favori ilanınız bulunmamaktatdır
                </Text>
                <Text style={styles.textEmpyListDetail}>
                  Favori şarj istansyonlarını ekleyrek sık kullandığınız yerlere
                  daha hızlı ulaşmanızı sağlar
                </Text>
                <Text style={styles.textEmpyListDetail}>
                  Favoriden kaldırmak için yanındaki kap işaretine basarsanız
                  favori listesinden kaldırır.
                </Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default FavoriPage;
