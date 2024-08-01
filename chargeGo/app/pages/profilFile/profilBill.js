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
import CardCharge from "../Components/cardCharge";
import { Entypo } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilBill = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      date: "01.06.2024",
      name: "App Life  Ltd. Şti.",
      price: 1500,
      type: 1,
    },
    {
      id: 2,
      date: "01.06.2024",
      name: "App Life  Ltd. Şti.",
      price: 1500,
      type: 2,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("pages/profilFile/profilBillDetail")}
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 15,
          borderBottomWidth: 1,
          borderBottomColor: colors.color_lightgray,
          gap: 10,
        }}
      >
        <Text style={styles.activeLangText}>{item.date}</Text>

        <Text style={styles.activeLangText}>{item.name}</Text>

        <Text style={styles.activeLangText}>{item.price} ₺</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Entypo
            name="text-document"
            size={14}
            color={item.type == 1 ? "#60D336" : "#FF0000"}
          />
          <Text
            style={
              item.type == 1
                ? [styles.activeLangText, { color: "#60D336" }]
                : [styles.activeLangText, { color: "#FF0000" }]
            }
          >
            {item.type == 1 ? t("Ödendi") : t("Ödenmedi")}
          </Text>
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
      <Menu header={t("Faturalarım")} menuType="filter" />
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ width: "100%", gap: 10 }}
          >
            <View style={styles.orangeAlertBottom}>
              <AntDesign name="warning" size={24} color="#EC6047" />
              <View style={{ flex: 1 }}>
                <Text style={styles.seeBtwLeftText}>
                  {t("Ödenememiş bir adet faturanız bulunmaktadır")} E-ŞARJ{" "}
                  {t(
                    "istasyonundan hizmet alabilmeniz için faturanızı ödemeniz gerekmektedir."
                  )}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: colors.color_white,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: "100%" }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfilBill;
