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
import { SetGlobalCar } from "../../redux/action";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilCarPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
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
      <Menu header={t("Araçlarım")} />
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
            contentContainerStyle={{ gap: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <TouchableOpacity
              style={styles.rezervationCardDetail}
              onPress={() => {
                navigation.navigate("pages/carFile/createMain"),
                  dispatch(SetGlobalCar("profil"));
              }}
            >
              <View style={{ width: 130 }}>
                <Text style={styles.swichSettingDetailText}>Eşimin Aracı</Text>
                <Image
                  source={require("../../../assets/images/system/togg.png")}
                  resizeMode="contain"
                  style={{ width: "100%", height: 100 }}
                />
              </View>
              <View style={{ flex: 1, gap: 10 }}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ gap: 3 }}>
                    <Text style={styles.detailTextReservation}>Marka</Text>
                    <Text style={styles.rezervationBoldText_detail}>BMW</Text>
                  </View>
                  <View style={{ gap: 3 }}>
                    <Text style={styles.detailTextReservation}>Model</Text>
                    <Text style={styles.rezervationBoldText_detail}>
                      i3 MX 4
                    </Text>
                  </View>
                </View>
                <View style={{ width: "100%", alignItems: "center", gap: 3 }}>
                  <Text style={styles.detailTextReservation}>Araç Plakası</Text>
                  <View style={styles.plakaManuel}>
                    <View style={styles.plakaBlack}>
                      <View style={styles.plaka_inner}>
                        <View style={styles.plaka_left}>
                          <Text
                            style={{
                              color: "#fff",
                              fontSize: 10,
                              fontWeight: "700",
                            }}
                          >
                            TR
                          </Text>
                        </View>
                        <View style={styles.plaka_right}>
                          <Text style={{ fontWeight: "700", fontSize: 18 }}>
                            34 FRT 034
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 15 }}>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => {
            navigation.navigate("pages/carFile/createMain"),
              dispatch(SetGlobalCar("profil"));
          }}
        >
          <Text style={styles.purpleButton_text}>{t("Yeni Araç Ekle")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilCarPage;
