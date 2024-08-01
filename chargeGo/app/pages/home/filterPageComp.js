import {
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import SwichFilter from "../Components/swichFilter";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Slider } from "native-base";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const FilterPageComp = () => {
  const [tabMenu, setTabMenu] = useState(1);
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  // multislider start
  const [values, setValues] = useState([77, 200]);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const sliderValuesChange = (values) => {
    setValues(values);
  };
  // multislider end
  return (
    <ScrollView style={{ width: "100%" }} contentContainerStyle={{ gap: 10 }}>
      <View style={styles.filterOuther}>
        <TouchableOpacity
          onPress={() => setTabMenu(1)}
          style={tabMenu == 1 ? styles.activeFilter : styles.pasiveFilter}
        >
          <Text style={styles.activeLangText}>{t("Ayarlar")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTabMenu(2)}
          style={tabMenu == 2 ? styles.activeFilter : styles.pasiveFilter}
        >
          <Text style={styles.activeLangText}>{t("Filtreler")}</Text>
        </TouchableOpacity>
      </View>
      {tabMenu == 1 ? (
        <>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Dil Seçimi")}
          </Text>
          <View style={styles.w9_filterPage}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.boldChargeTextLine,
                  { fontWeight: "700", fontSize: 11 },
                ]}
              >
                {t("Tercih Edilen Dil")}
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 3,
                }}
              >
                <Text style={styles.swichSettingDetailText}>{t("Türkçe")}</Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color="#EC6047"
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Harita Görünümü")}
          </Text>
          <View style={styles.w9_filterPage}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text
                style={[
                  styles.boldChargeTextLine,
                  { fontWeight: "700", fontSize: 11 },
                ]}
              >
                {t("Haritap Tipi")}
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 3,
                }}
              >
                <Text style={styles.swichSettingDetailText}>
                  Normal Görünüm
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={16}
                  color="#EC6047"
                />
              </TouchableOpacity>
            </View>
            <SwichFilter header={t("Trafik Bilgisi")} />
            <SwichFilter header={t("Önemli Lokasyonlar")} />
          </View>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Harita Kontrolleri")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <SwichFilter header={t("Pusulayı Göster")} />
            <SwichFilter header={t("Yön Çevirme")} />
            <SwichFilter header={t("Harita Ölçeği")} />
            <SwichFilter header={t("Yakın /  Uzak Butonları")} />
            <SwichFilter header={t("Otomatik Yakınlaştır")} />
            <SwichFilter header={t("Sokak Kullanımı")} />
          </View>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Konum Ayarları")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <SwichFilter header={t("Konum Servisleri")} />
          </View>
        </>
      ) : (
        <>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Minimum Şarj Gücü")} kW
          </Text>
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
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 15,
            }}
          >
            <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
              {t("Minimum Şarj Gücü")} kW
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 2,
              }}
            >
              <View style={styles.imageFastTop_outheer}>
                <Image
                  resizeMode="contain"
                  style={{ width: "70%", height: "70%" }}
                  source={require("../../../assets/images/fast.png")}
                />
              </View>
              <Text
                style={[
                  styles.textChargeOneHead_purple,
                  { fontSize: 12, fontWeight: "600" },
                ]}
              >
                {t("Hızlı")}
              </Text>
            </View>
          </View>
          <View style={[styles.w9_filterPage, { alignItems: "center" }]}>
            <Slider
              defaultValue={70}
              colorScheme="orange"
              style={{ width: 280 }}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
          </View>

          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Soket Tipi")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <SwichFilter header="CHadeMO" type={2} />
            <SwichFilter header="CSS (DC Combo 2)" type={2} />
            <SwichFilter header="CSS (DC Combo 2)" type={2} />
          </View>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Erişim Türü")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text
                style={[
                  styles.boldChargeTextLine,
                  { fontWeight: "700", fontSize: 11 },
                ]}
              >
                {t("Halka Açık İstasyonlar")}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <Text
                style={[
                  styles.boldChargeTextLine,
                  { fontWeight: "700", fontSize: 11 },
                ]}
              >
                {t("Kısıtlı İstasyonlar")}
              </Text>
            </View>
          </View>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("İstasyon Durumu")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <SwichFilter
              header={t("Müsait")}
              type={2}
              img={require("../../../assets/images/system/filterIcon/t1.png")}
            />
            <SwichFilter
              header={t("Kullanımda")}
              type={2}
              img={require("../../../assets/images/system/filterIcon/t2.png")}
            />
            <SwichFilter
              header={t("Devre Dışı")}
              type={2}
              img={require("../../../assets/images/system/filterIcon/t3.png")}
            />
            <SwichFilter
              header={t("Bilinmiyor")}
              type={2}
              img={require("../../../assets/images/system/filterIcon/t4.png")}
            />
          </View>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("İstasyon Durumu")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <SwichFilter
              header={t("Sadece Favori İstasyonlarım")}
              type={2}
              img={require("../../../assets/images/system/filterIcon/t5.png")}
            />
            <SwichFilter
              header={t("Saatinde Açık İstasyonlar")}
              type={2}
              img={require("../../../assets/images/system/filterIcon/t6.png")}
            />
          </View>
          <Text style={[styles.textChargeOneHead_purple, { fontSize: 14 }]}>
            {t("Sosyal Alanlar")}
          </Text>
          <View style={[styles.w9_filterPage, { paddingBottom: 0 }]}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el1.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>
                  {t("Halka Açık")}
                </Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el2.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>{t("Park")}</Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el3.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>
                  {t("Havaalanı")}
                </Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el4.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>{t("Kamp")}</Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el5.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>Hotel</Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el6.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>
                  {t("Alışveriş")}
                </Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el7.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>{t("Servis")}</Text>
              </View>
              <View style={styles.outherFAilterBottomModal}>
                <Image
                  style={{ width: 40, height: 25 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/filterIcon/el8.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>{t("Taksi")}</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default FilterPageComp;
