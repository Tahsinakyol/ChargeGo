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
  ScrollView,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import Menu from "../Components/menu";
import { useState } from "react";
import useThemeColors, {
  color_white,
} from "../../../assets/css/useThemeColors";
import { Select } from "native-base";
import { useTranslation } from "react-i18next";
const MapPage_main = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [banner, setBanner] = useState(1);
  const [service, setService] = useState("");
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const modalData = [
    {
      id: 1,
      name: "Vaktim Çok",
      img: require("../../../assets/images/system/modalEmo/modal1.png"),
    },
    {
      id: 2,
      name: "Vaktim Çok",
      img: require("../../../assets/images/system/modalEmo/modal2.png"),
    },
    {
      id: 3,
      name: "Vaktim Çok",
      img: require("../../../assets/images/system/modalEmo/modal1.png"),
    },
    {
      id: 4,
      name: "Vaktim Çok",
      img: require("../../../assets/images/system/modalEmo/modal2.png"),
    },
  ];
  const renderModalData = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.butttonIconsModal}
        onPress={() => setBanner(item.id)}
      >
        <Image
          style={{ width: "80%", height: 60 }}
          resizeMode="contain"
          source={item.img}
        />
        <Text
          style={
            banner == item.id
              ? styles.headerCheckedDetail
              : [styles.headerCheckedDetail, { fontWeight: 500 }]
          }
        >
          {item.name}
        </Text>
        <View
          style={
            banner == item.id
              ? styles.iconBannerMaps_active
              : styles.iconBannerMaps
          }
        >
          {banner == item.id ? (
            <>
              <AntDesign name="check" size={18} color="#fff" />
            </>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
        paddingBottom: insets.bottom + 15,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Rota Planla")} />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ gap: 10, padding: 15 }}
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Image
              style={{ width: 15, height: 100 }}
              resizeMode="contain"
              source={require("../../../assets/images/system/mapleft.png")}
            />
            <View style={{ flex: 1, gap: 10 }}>
              <TouchableOpacity style={styles.buttonMapPage}>
                <Text style={styles.boldChargeTextLine}>
                  {t("Başlangıç notkası seçin veya haritayı tıklayın")}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonMapPage}>
                <Text style={styles.boldChargeTextLine}>
                  {t("Varış noktası seçiniz")}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Image
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
                source={require("../../../assets/images/system/mapRight.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.whiteRotateCarBanner}>
            <View style={{ flex: 1 }}>
              <Image
                style={{ width: "100%", height: 80 }}
                resizeMode="contain"
                source={require("../../../assets/images/system/togg.png")}
              />
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={[styles.boldChargeTextLine, { fontWeight: "700" }]}
                >
                  Togg
                </Text>

                <Text
                  style={[
                    styles.boldChargeTextLine,
                    { fontWeight: "500", fontSize: 12 },
                  ]}
                >
                  Model TX10
                </Text>
              </View>
            </View>
            <View style={{ flex: 2, alignItems: "center", paddingLeft: 20 }}>
              <Text style={[styles.boldChargeTextLine, { fontWeight: "700" }]}>
                {t("Aracım Şarj Durumu")}
              </Text>
              <View
                style={{
                  width: "100%",
                  height: 15,

                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: "#f5f5f5",
                  marginTop: 5,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 100,
                    alignItems: "flex-end",
                    backgroundColor: "#3F9322",
                    paddingHorizontal: 10,
                  }}
                >
                  <Text style={{ fontSize: 10, color: "#fff" }}>100%</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
            <AntDesign name="arrowright" size={18} color="#EC6047" />
            <View style={{ flex: 1 }}>
              <Text style={styles.boldChargeTextLine}>
                Yol Güzergahınızda .
                <Text style={{ fontWeight: "700" }}>550</Text>
                Şarj İstasyonu{" "}
                <Text style={{ color: "#EC6047" }}>225 AC / </Text>
                <Text style={{ color: colors.color_sliderPurple }}>
                  225 DC{" "}
                </Text>
                Şarj Ünitesi Vardır.
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
            <AntDesign name="arrowright" size={18} color="#EC6047" />
            <View style={{ flex: 1 }}>
              <Text style={styles.boldChargeTextLine}>
                Araç Doluluk oranı ve ortalama tüketime göre 3.5 Saat içinde en
                yakın şarj istasyonu olan . ZES - Kolay Şarj ve Şarjgodan
                Randevu Alabilrisiniz.
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.orangeLoginButton, { height: 40 }]}
              >
                <Text style={styles.purpleButton_text}>
                  {t("Daha Fazla Göster")}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={[styles.purpleButton, { height: 40 }]}
                onPress={() => setOpenModal(true)}
              >
                <Text style={styles.purpleButton_text}>
                  {t("Yolculuk Planla")}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              styles.buttonMapPage,
              {
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                gap: 5,
                alignItems: "center",
              }}
            >
              <AntDesign name="arrowright" size={16} color="#4316B7" />
              <Text style={[styles.boldChargeTextLine]}>
                {t("Yolculuğunuz")}
                <Text style={{ fontWeight: "700" }}> 4 Saat 58 </Text>{" "}
                {t("Dakika")}
              </Text>
            </View>
            <AntDesign name="infocirlceo" size={18} color="#EC6047" />
          </View>
          <View style={{ width: "100%", height: height * 0.2 }}>
            <MapView
              style={{ width: "100%", height: "100%" }}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            ></MapView>
          </View>
        </ScrollView>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 15 }}>
        <TouchableOpacity style={[styles.purpleButton]}>
          <Text style={styles.purpleButton_text}>{t("Yol Planla")}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        style={{
          zIndex: 9,
        }}
        transparent={true}
        visible={openModal}
      >
        <View
          style={[
            styles.customModalOuter,
            {
              justifyContent: "flex-end",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => setOpenModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
          <View
            style={{
              paddingTop: 15,
              paddingBottom: insets.bottom + 15,
              backgroundColor: colors.color_white,
              width: "100%",
              minHeight: 10,
              padding: 10,
              gap: 10,
              maxHeight: 700,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{ gap: 10 }}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.centerModalMapPage}>
                {t("Yolculuk Tarzını Seç")}
              </Text>
              <FlatList
                data={modalData}
                renderItem={renderModalData}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
              <Text style={styles.centerModalMapPage}>
                {t("Ortalama Yolculuk Süresi")}
              </Text>
              <View
                style={[
                  styles.whiteRotateCarBanner,
                  { flexDirection: "column" },
                ]}
              >
                <View style={{ width: "100%" }}>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      resizeMode="contain"
                      style={{ width: 15, height: 15 }}
                      source={require("../../../assets/images/system/infoImages/i7.png")}
                    />
                    <Text style={styles.boldChargeTextLine}>
                      4 {t("Saat")} 55 {t("dakika")}
                    </Text>
                    <Image
                      resizeMode="contain"
                      style={{ width: 15, height: 15 }}
                      source={require("../../../assets/images/system/infoImages/i7.png")}
                    />
                  </View>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingHorizontal: 5,
                    }}
                  >
                    <View style={styles.minCirclePurple}></View>
                    <View style={styles.minCirclePurple_Line}></View>
                    <View style={styles.minCirclePurple}></View>
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "#E5DBFF",
                    borderRadius: 5,
                  }}
                >
                  <Select
                    fontSize={11}
                    textAlignVertical={"center"}
                    borderWidth={0}
                    _actionSheet={{
                      useRNModal: true,
                    }}
                    style={[
                      {
                        width: "100%",
                        color: "#000",
                        fontSize: 11,
                        height: "100%",
                        height: 40,
                        marginTop: -5,
                      },
                    ]}
                    selectedValue={service}
                    minWidth="100%"
                    accessibilityLabel={"#333"}
                    placeholder={"3 Saatte Yarım Saat  Mola Verilir "}
                    dropdownIcon={
                      <FontAwesome
                        name="chevron-down"
                        color={"#4316B7"}
                        style={{
                          marginRight: 13,
                        }}
                      />
                    }
                    _selectedItem={{
                      bg: "teal.600",
                    }}
                    mt={1}
                    onValueChange={(itemValue) => setService(itemValue)}
                  ></Select>
                </View>
              </View>
              <Text style={styles.centerModalMapPage}>
                {t("Mola Verilecek Şarj İstasyonları")}
              </Text>
              <View
                style={[
                  styles.buttonMapPage,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 50, height: "100%" }}
                  source={require("../../../assets/images/system/brand/brand2.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>120 km</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <FontAwesome name="money" size={16} color="gray" />
                  <Text style={styles.blueTextNew}>75 kw</Text>
                </View>
              </View>
              <View
                style={[
                  styles.buttonMapPage,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 50, height: "100%" }}
                  source={require("../../../assets/images/system/brand/brand2.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>120 km</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <FontAwesome name="money" size={16} color="gray" />
                  <Text style={styles.blueTextNew}>75 kw</Text>
                </View>
              </View>
              <View
                style={[
                  styles.buttonMapPage,
                  {
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                ]}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 50, height: "100%" }}
                  source={require("../../../assets/images/system/brand/brand2.png")}
                />
                <Text style={styles.chargeCopmpTextBottom}>120 km</Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <FontAwesome name="money" size={16} color="gray" />
                  <Text style={styles.blueTextNew}>75 kw</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.purpleButton}
                onPress={() => setOpenModal(false)}
              >
                <Text style={styles.purpleButton_text}>
                  {t("Kendim Planlamak İstiyorum")}
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MapPage_main;
