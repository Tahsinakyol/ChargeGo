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
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const MyBillPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      name: "Şarj İşlemi - Ödeme",
      date: " 01.06.2024",
      time: "14:30",
      type: t("Kredi Kartı"),
      typeDetail: "**6543",
      price: 1500,
    },
    {
      id: 2,
      name: "Şarj İşlemi - Ödeme",
      date: " 01.06.2024",
      time: "14:30",
      type: t("Cüzdan"),
      typeDetail: "1244554",
      price: 500,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          borderBottomWidth: 1,
          borderBottomColor: colors.color_border,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.activeLangText}>{item.name}</Text>
          <Text style={styles.dateAndHoursWallet}>
            {item.time} - {item.date}
          </Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={styles.activeLangText}>{item.type}</Text>
          <Text style={styles.dateAndHoursWallet}>{item.typeDetail}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <Text style={styles.activeLangText}>{item.price} ₺</Text>
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
      <Menu header={t("Ödemelerim")} menuType="filter" />
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
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              backgroundColor: colors.color_white,
              padding: 10,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MyBillPage;
