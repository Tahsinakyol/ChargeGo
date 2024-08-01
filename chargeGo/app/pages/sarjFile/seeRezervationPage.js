import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import Menu from "../Components/menu";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { ScrollView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import ModalGenerate from "../Components/modalGenerate";
import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SeeRezervationPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [openModal, setOpenModal] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <Menu header={t("Özet Görüntüle")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          gap: 15,
          backgroundColor: colors.color_bge,
        }}
      >
        <StatusBar style="light" />

        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            <Text style={styles.orangeTextHeaderSeeRezervation}>
              {t("Aracınız")}
            </Text>
            <View style={styles.seePageCardCars}>
              <Image
                style={styles.imagesCarCardSee}
                resizeMode="contain"
                source={require("../../../assets/images/system/togg.png")}
              />
              <View style={{ flex: 1, gap: 5 }}>
                <Text
                  style={[
                    styles.boldCardHeader,
                    { fontWeight: "700", fontSize: 15 },
                  ]}
                >
                  Togg
                </Text>
                <Text
                  style={[
                    styles.boldCardHeader,
                    { fontWeight: "400", fontSize: 15 },
                  ]}
                >
                  Model TX10
                </Text>
              </View>
            </View>
            <Text style={styles.orangeTextHeaderSeeRezervation}>
              {t("Şarj İstasyonu")}
            </Text>
            <View style={styles.seePageCardCars}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={{ width: 70, height: 35 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/infoImages/i1.png")}
                />
                <Text style={styles.purpleTextSee}>AC / DC</Text>
              </View>
              <View style={{ flex: 1, gap: 5 }}>
                <Text style={[styles.purpleTextSee, { fontSize: 15 }]}>
                  212 İstanbul AVM
                </Text>
                <Text
                  style={[
                    styles.boldCardHeader,
                    { fontWeight: "400", fontSize: 15 },
                  ]}
                >
                  Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul
                </Text>
              </View>
            </View>
            <Text style={styles.orangeTextHeaderSeeRezervation}>
              {t("Şarj Soketi")}
            </Text>
            <View style={styles.buttonChooseCar}>
              <View
                style={{
                  flex: 1,
                  height: "100%",
                  padding: 10,
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    height: "100%",
                    borderRightWidth: 1,
                    borderRightColor: "#dadada",
                    gap: 5,
                  }}
                >
                  <Text
                    style={styles.textSocket}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Togg (Plug) AC / DC
                  </Text>
                  <Image
                    style={styles.imagesSocketPage}
                    source={require("../../../assets/images/system/cgIcon.png")}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    height: "100%",
                    gap: 5,
                    paddingLeft: 10,
                  }}
                >
                  <Text
                    style={styles.textSocket}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    Max Power
                  </Text>
                  <Text
                    style={[styles.textSocket, { fontWeight: "700" }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    70 kW
                  </Text>
                </View>
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
              <View style={styles.genSeeBtwn}>
                <Text style={styles.seeBtwLeftText}>
                  {t("Rezervasyon Tarihi")}
                </Text>
                <Text style={[styles.seeBtwLeftText, { fontWeight: "700" }]}>
                  01.06.2024
                </Text>
              </View>
              <View style={styles.genSeeBtwn}>
                <Text style={styles.seeBtwLeftText}>
                  {t("Rezervasyon Saati")}
                </Text>
                <Text style={[styles.seeBtwLeftText, { fontWeight: "700" }]}>
                  10 : 00 AM
                </Text>
              </View>
              <View style={styles.genSeeBtwn}>
                <Text style={styles.seeBtwLeftText}>{t("Şarj Süresi")}</Text>
                <Text style={[styles.seeBtwLeftText, { fontWeight: "700" }]}>
                  10 kWs
                </Text>
              </View>
              <View style={styles.genSeeBtwn}>
                <Text style={styles.seeBtwLeftText}>{t("Ücret")}</Text>
                <Text style={[styles.seeBtwLeftText, { fontWeight: "700" }]}>
                  500 TL
                </Text>
              </View>
              <View style={styles.genSeeBtwn}>
                <Text style={styles.seeBtwLeftText}>{t("Vergi")}</Text>
                <Text style={[styles.seeBtwLeftText, { fontWeight: "700" }]}>
                  100 TL
                </Text>
              </View>
              <View style={styles.genSeeBtwn}>
                <Text style={styles.seeBtwLeftText}>{t("Toplam")}</Text>
                <Text style={[styles.seeBtwLeftText, { fontWeight: "700" }]}>
                  120 TL
                </Text>
              </View>
            </View>
            <Text style={styles.orangeTextHeaderSeeRezervation}>
              {t("Ödeme Metodu")}
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <AntDesign name="wallet" size={32} color="#4816BD" />
                <Text style={styles.seeBtwLeftText}>{t("Cüzdan")}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("pages/sarjFile/paymentMethot")
                }
              >
                <Text style={styles.changeButtonText}>{t("Değiştir")}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orangeAlertBottom}>
              <AntDesign name="warning" size={24} color="#EC6047" />
              <View style={{ flex: 1 }}>
                <Text style={styles.seeBtwLeftText}>
                  {t(
                    "Telefon numarasına bir OTP kodu gönderdik 64. İmzalamak için aşağıdaki OTP kodunu girin"
                  )}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() => setOpenModal(true)}
            >
              <Text style={styles.purpleButton_text}>{t("Onayla")}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <ModalGenerate
          modalHeader={t("Rezervasyonunuz Onaylandı")}
          modalDetail={t(
            "Rezervasyon saat ve tarihinden 10 dakika önce istasyonda olmanız gerekmektedir."
          )}
          openModal={openModal}
          setOpenModal={setOpenModal}
          modalType="rezervation"
          buttonText="OK"
        />
      </View>
    </View>
  );
};

export default SeeRezervationPage;
