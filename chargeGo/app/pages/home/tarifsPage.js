import {
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Text,
  Image,
  Animated,
  Modal,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { ScrollView } from "react-native";
import useThemeColors, {
  color_black,
} from "../../../assets/css/useThemeColors";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
const TarifssPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  // multislider start
  const [values, setValues] = useState([77, 200]);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const sliderValuesChange = (values) => {
    setValues(values);
  };
  // multislider end
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Tarifeler")} />
      <View style={{ width: "100%", flex: 1, paddingBottom: insets.bottom }}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: 15, gap: 10 }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.headerCheckedDetail}>{t("Aracınız")}</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: colors.color_black }}>
                {t("Değiştir")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardTarrifs}>
            <Image
              style={{ width: 80, height: 60 }}
              resizeMode="contain"
              source={require("../../../assets/images/system/togg.png")}
            />
            <View style={{ flex: 1, gap: 5 }}>
              <Text style={styles.headerCheckedDetail}>Togg TX 10 </Text>
              <Text style={[styles.headerCheckedDetail, { fontWeight: "600" }]}>
                70 kWs
              </Text>
            </View>
          </View>
          <Text style={styles.headerCheckedDetail}>{t("Batarya Durumu")}</Text>
          <View style={[styles.w9_filterPage, { alignItems: "center" }]}>
            <MultiSlider
              values={values}
              sliderLength={280}
              onValuesChange={sliderValuesChange}
              min={0}
              max={200}
              step={1}
              selectedStyle={{
                backgroundColor: "#d9534f",
                height: 3,
              }}
              markerStyle={{
                backgroundColor: "#d9534f",
                marginTop: 3,
              }}
            />
            <View style={styles.valuesContainer}>
              <Text style={styles.valueText}>{values[0]} km</Text>
              <Text style={styles.valueText}>{values[1]} km</Text>
            </View>
          </View>
          <View style={styles.searchTarrif_outher}>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="search1" size={16} color="#EC6047" />
            </TouchableOpacity>
            <TextInput
              placeholder="Arama Yap..."
              placeholderTextColor={"gray"}
              style={styles.inputSearchGenerate}
            />
          </View>
          <View style={styles.tarrifsPage_filter}>
            <TouchableOpacity>
              <Text style={styles.colorWhiteTarrifs}>{t("Şarj Ağı")}</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 10,
              }}
            >
              <TouchableOpacity>
                <Text style={styles.colorWhiteTarrifs}>0 - %100 </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.colorWhiteTarrifs}>{t("Birim Fiyat")}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.lineTarrifDetailPage}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Image
                resizeMode="contain"
                style={{ width: 60, height: 30 }}
                source={require("../../../assets/images/system/brand/brand2.png")}
              />
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "700",
                  color: colors.color_black,
                }}
              >
                ZES
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{ fontSize: 14, fontWeight: "700", color: "#0078E8" }}
              >
                590.00 TL
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  color: colors.color_black,
                }}
              >
                5.59 TL / kWs
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default TarifssPage;
