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
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilCamping = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      name: "ChargeGO ile elektrikli aracınızı şarj etmek hiç bu kadar avantajlı olmamıştı!İşte size özel fırsatlarımız:",
      img: require("../../../assets/images/station.png"),
    },
    {
      id: 2,
      name: "ChargeGO ile elektrikli aracınızı şarj etmek hiç bu kadar avantajlı olmamıştı!İşte size özel fırsatlarımız:",
      img: require("../../../assets/images/station.png"),
    },
    {
      id: 3,
      name: "ChargeGO ile elektrikli aracınızı şarj etmek hiç bu kadar avantajlı olmamıştı!İşte size özel fırsatlarımız:",
      img: require("../../../assets/images/station.png"),
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.buttonRenderCamping}
        onPress={() => navigation.navigate("pages/profilFile/campingDetail")}
      >
        <Image
          resizeMode="cover"
          style={{ width: 80, height: 80, borderRadius: 5 }}
          source={item.img}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.detailTextReservation}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
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
      <Menu header={t("Kampanyalar")} />
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
            contentContainerStyle={{ width: "100%", gap: 15 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default ProfilCamping;
