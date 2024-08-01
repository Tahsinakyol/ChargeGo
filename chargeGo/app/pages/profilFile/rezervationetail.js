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
import { useDispatch } from "react-redux";
import { SetGlobalCharge } from "../../redux/action";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useState } from "react";
import ModalGenerate from "../Components/modalGenerate";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const Rezervationetail = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const data = [
    { id: 1, name: t("Rezervasyon Tarihi"), date: "01.06.2024" },
    { id: 2, name: t("Rezervasyon Saati"), date: "10 : 00 AM" },
    { id: 3, name: "kWs", date: "100 kWs " },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.lineRezervationDetail}>
        <Text style={[styles.detailTextReservation, { fontWeight: "500" }]}>
          {item.name}
        </Text>
        <Text style={[styles.detailTextReservation, { fontWeight: "700" }]}>
          {item.date}
        </Text>
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
      <Menu header={t("Rezervasyonlarım")} />
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
            contentContainerStyle={{ gap: 15 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.orangeAlertBottom}>
              <AntDesign name="warning" size={24} color="#EC6047" />
              <View style={{ flex: 1 }}>
                <Text style={styles.seeBtwLeftText}>
                  {t(
                    "Rezervasyon günü ve saatinden en az 10-15 dakika önce şarj istasyonunda olmanız gerekmektedir."
                  )}
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.addressHeader_orange}>{t("Aracınız")}</Text>
              <TouchableOpacity>
                <Text style={styles.purpleTextSee}>{t("Değiştir")}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.rezervationCardDetail}>
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
                    <Text style={styles.detailTextReservation}>
                      {t("Marka")}
                    </Text>
                    <Text style={styles.rezervationBoldText_detail}>BMW</Text>
                  </View>
                  <View style={{ gap: 3 }}>
                    <Text style={styles.detailTextReservation}>
                      {t("Model")}
                    </Text>
                    <Text style={styles.rezervationBoldText_detail}>
                      i3 MX 4
                    </Text>
                  </View>
                </View>
                <View style={{ width: "100%", alignItems: "center", gap: 3 }}>
                  <Text style={styles.detailTextReservation}>
                    {t("Araç Plakası")}
                  </Text>
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
            </View>
            <Text style={styles.addressHeader_orange}>
              {t("Şarj İstasyonu")}
            </Text>
            <View style={styles.buttonRezervationPage}>
              <View style={{ alignItems: "center", gap: 2 }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/infoImages/i1.png")}
                />
                <Text style={styles.textNameTypeCard}>AC / DC</Text>
              </View>
              <View style={{ flex: 1, gap: 5 }}>
                <Text
                  style={styles.textNameTypeCard}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  212 İstanbul AVM
                </Text>
                <Text style={styles.locationTextCardRezervation}>
                  Kocatepe, Paşa Cd, 34045 Bayrampaşa/İstanbul
                </Text>
              </View>
            </View>
            <Text style={styles.addressHeader_orange}>{t("Şarj Soketi")}</Text>
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
            <View style={styles.columnWhiteCard}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: "100%" }}
              />
            </View>
          </ScrollView>
        </View>
        <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.orangeLoginButton}
              onPress={() => setOpenModal(true)}
            >
              <Text style={styles.purpleButton_text}>{t("İptal Et")}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() =>
                navigation.navigate("pages/profilFile/profilCarPage")
              }
            >
              <Text style={styles.purpleButton_text}>{t("Değiştir")}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ModalGenerate
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalHeader={t("Rezervasyon İptal")}
        modalDetail="Rezervasyonunuzun  günü ve saati gelmeden 15 dakikaya kadar iptal edebilirsiniz .Aksi halde kartınızdan . 100 tl cezai işlem uygulanacaktır. "
        modalType="error"
        buttonText={t("Onaylıyorum")}
      />
    </View>
  );
};

export default Rezervationetail;
