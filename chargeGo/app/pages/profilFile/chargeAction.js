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
const ChargeAction = () => {
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
      <Menu header={t("Şarj İşlemlerim")} menuType="filter" />
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
            contentContainerStyle={{ gap: 10, width: "100%" }}
          >
            <CardCharge
              date="15.06.2024"
              start="13:00"
              end="14:00"
              name="İstinye Park"
              address="Sarıyer, Mithat paşa  No:10"
              time="10 dk 15 sn"
              energy={25.5}
              kg={6.5}
              gpx={50}
              price={125}
            />
            <CardCharge
              type="error"
              date="15.06.2024"
              start="13:00"
              end="14:00"
              name="Nata Vega"
              address="Sarıyer, Mithat paşa  No:10 Çankaya Ankara"
              time="10 dk 15 sn"
              energy={25.5}
              kg={6.5}
              gpx={50}
              price={535}
              errorExpain={t(
                "Yetersiz Bakiye Ödemesi yapılamadı, lütfen en kısa sürede ödemenizi yapınız. Aksi takdirde bir sonraki şarj işlemini gerçekleştiremeyebilirsiniz. Ödeme sonrasında puanlarınız cüzdanınıza yansıtılacaktır."
              )}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ChargeAction;
