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
import { Entypo } from "@expo/vector-icons";
import CardCharge from "../Components/cardCharge";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilBillDetail = () => {
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
            <View style={styles.chargeCard_outher}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("pages/profilFile/profilBillDetail")
                }
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 15,
                  borderBottomWidth: 1,
                  borderBottomColor: "#dadada",
                  gap: 10,
                }}
              >
                <Text style={styles.activeLangText}>20.06.2024</Text>

                <Text style={styles.activeLangText}>App Life Ltd. Şti.</Text>

                <Text style={styles.activeLangText}>500 ₺</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  <Entypo name="text-document" size={14} color="#FF0000" />
                  <Text style={[styles.activeLangText, { color: "#FF0000" }]}>
                    {t("Ödenmedi")}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <CardCharge
              type="error"
              date="15.06.2024"
              start={"13:00"}
              end={"14:00"}
              name={"Nata Vega"}
              address={"Sarıyer, Mithat paşa  No:10 Çankaya Ankara"}
              time={"10 dk 15 sn"}
              energy={25.5}
              kg={6.5}
              gpx={50}
              price={535}
              errorExpain="Bakiye Yetersiz Ödeme yapılamadı lütfen en kısa sürede ödeme  ödemenizi yapınız. Aksi halde bir sonraki şarj işlemini yapamayabilirsiniz. Puanınız ödeme yaptıktan sonra cüzdanınıza yansıyacaktır. "
            />
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() =>
            navigation.navigate("pages/profilFile/walletCreitCard")
          }
        >
          <Text style={styles.purpleButton_text}> {t("Ödeme Yap")} </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfilBillDetail;
