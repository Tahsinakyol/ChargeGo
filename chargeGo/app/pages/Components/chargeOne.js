import { View, Text, FlatList, TouchableOpacity } from "react-native";
import createStyles from "../../../assets/css/style";
import BarChartComponent from "./barChart";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  Ionicons,
  Entypo,
} from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ChargeOne = () => {
  const { t } = useTranslation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const dataTime = [
    { id: 1, day: t("Pazartesi"), time: "08 : 00  -  21:00" },
    { id: 2, day: t("Salı"), time: "08 : 00  -  21:00" },
    { id: 3, day: t("Çarşamba"), time: "08 : 00  -  21:00" },
    { id: 4, day: t("Perşembe"), time: "08 : 00  -  21:00" },
    { id: 5, day: t("Cuma"), time: "08 : 00  -  21:00" },
    { id: 6, day: t("Cumartesi"), time: "08 : 00  -  21:00" },
    { id: 7, day: t("Pazar"), time: "08 : 00  -  21:00" },
  ];
  const renderDataTime = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 35,
          borderBottomWidth: 1,
          borderBottomColor: colors.color_border,
        }}
      >
        <Text style={[styles.textChargeOneHead_purple, { fontWeight: "400" }]}>
          {item.day}
        </Text>
        <Text style={[styles.textChargeOneHead, { fontWeight: "400" }]}>
          {item.time}
        </Text>
      </View>
    );
  };
  return (
    <View style={{ width: "100%", gap: 5 }}>
      <View style={styles.chargeOne_outher}>
        <Text style={styles.textChargeOneHead}>
          Elektrikli araçların (EV) hızla popülerleşmesiyle birlikte, şarj
          istasyonları da modern ulaşım altyapısının vazgeçilmez bir parçası
          haline gelmiştir. Şarj istasyonlarımız, kullanıcıların güvenilir ve
          hızlı şarj hizmeti alabileceği, en son teknolojiyle donatılmış alanlar
          sunmaktadır. İster kısa bir molada hızlı şarj yapmak isteyin, ister
          gece boyunca tam dolum yapın, şarj istasyonlarımız her ihtiyaca uygun
          çözümler sağlar. Çevre dostu enerji kaynakları kullanarak
          sürdürülebilir bir gelecek için adım atan şarj istasyonlarımız, ...
        </Text>
      </View>
      <Text style={styles.textChargeOneHead_purple}>
        {t("Yoğunluk Saatleri")}{" "}
      </Text>

      <View style={styles.chargeOne_outher}>
        <BarChartComponent />
        <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
          <View style={styles.detailOneChangeSameButton}>
            <Text style={styles.detailOneCharSame_text}>
              {t("Yoğunluk")} 12:00 - 18:00
            </Text>
          </View>
          <View style={styles.detailOneChangeSameButtonPurple}>
            <Text style={styles.detailOneCharSame_text}>
              {t("Yoğunluk")} 12:00 - 18:00
            </Text>
          </View>
        </View>
      </View>
      <Text style={styles.textChargeOneHead_purple}>
        {t("Hizmet Saatleri")}{" "}
      </Text>
      <View style={styles.chargeOne_outher}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={dataTime}
          renderItem={renderDataTime}
          contentContainerStyle={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Text style={styles.textChargeOneHead_purple}>{t("Sosyal Alanlar")}</Text>
      <View style={styles.chargeOne_outher}>
        <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <MaterialCommunityIcons
                name="silverware-fork-knife"
                size={18}
                color="#EC6047"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>{t("Restoran")}</Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <Feather name="coffee" size={18} color="#EC6047" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>{t("Kafeterya")}</Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <MaterialIcons name="gamepad" size={18} color="#EC6047" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>
                {t("Eğlence Merkezi")}
              </Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <Ionicons name="wifi" size={18} color="#EC6047" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>Wi - Fi</Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <Entypo name="shopping-cart" size={18} color="#EC6047" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>{t("Alışveriş")}</Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <MaterialCommunityIcons
                name="ferris-wheel"
                size={18}
                color="#EC6047"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>{t("Lastik Hava")}</Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <MaterialIcons name="tire-repair" size={18} color="#EC6047" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>{t("Tamir Servis")}</Text>
            </View>
          </View>
          <View style={styles.iconOneChargePageDetail}>
            <View style={styles.iconOneChargePage}>
              <MaterialIcons name="wc" size={18} color="#EC6047" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.textChargeOneHead}>WC</Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.textChargeOneHead_purple}>
        {t("Otopark Ayrıntıları")}
      </Text>
      <View style={styles.chargeOne_outher}>
        <Text style={styles.textChargeOneHead}>{t("Otopark ücretli")} </Text>
      </View>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.textChargeOneHead_purple}>
          {t("Geri Bildirim Paylaş")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChargeOne;
