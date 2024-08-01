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
const CampingDetail = () => {
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
          <ScrollView
            contentContainerStyle={{ width: "100%", gap: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <Image
              source={require("../../../assets/images/station.png")}
              resizeMode="cover"
              style={{ width: "100%", height: 200, borderRadius: 5 }}
            />
            <Text style={styles.rezervationBoldText_detail}>
              ChargeGO{" "}
              {t(
                "ile elektrikli aracınızı şarj etmek hiç bu kadar avantajlı olmamıştı! İşte size özel fırsatlarımız"
              )}
            </Text>
            <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
              <View style={styles.dot}></View>
              <Text style={styles.detailTextReservation}>
                {t(
                  "Kampanya süresi boyunca, ChargeGO istasyonlarımızda aracınızı her şarj ettiğinizde, her 1 kWh için 15 ChargeGO Puan kazanın."
                )}
              </Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
              <View style={styles.dot}></View>
              <Text style={styles.detailTextReservation}>
                {t(
                  "Anlaşmalı istasyonlarımızda indirimli fiyatlardan yararlanarak ekstra puanlar kazanın!"
                )}
              </Text>
            </View>
            <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
              <View style={styles.dot}></View>
              <Text style={styles.detailTextReservation}>
                {t(
                  "Kazandığınız ChargeGO Puanları, gelecekteki şarj işlemlerinizde indirim olarak kullanabilirsiniz."
                )}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default CampingDetail;
