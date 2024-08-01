import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import Slick from "react-native-slick";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import CircualComponents from "../Components/circualComponent";
import ChargeOne from "../Components/chargeOne";
import MapView from "react-native-maps";
import CheckInComponenet from "../Components/checkInComponenet";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ChargeStartPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const [banner, setBanner] = useState(false);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [heart, setHeart] = useState(false);
  const [star, setStar] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const [menuCharge, setMenuCharge] = useState(
    GeneralResponse.globalCharge == "start" ? 2 : 1
  );

  // tab menu 2 start
  const [secondStatusMenu, setSecondStatusMenu] = useState(1);
  const dataSocket = [
    {
      id: 1,
      type: "DC",
      name: "Autocharge",
      status: 1,
      socketName: "AC / DC",
      kw: 100,
      price: "8.90",
    },
    {
      id: 2,
      type: "DC",
      name: "Autocharge",
      status: 2,
      socketName: "AC / DC",
      kw: 100,
      price: "8.90",
    },
    {
      id: 3,
      type: "DC",
      name: "Autocharge",
      status: 1,
      socketName: "AC / DC",
      kw: 100,
      price: "8.90",
    },
    {
      id: 4,
      type: "DC",
      name: "Autocharge",
      status: 1,
      socketName: "AC / DC",
      kw: 100,
      price: "8.90",
    },
  ];
  const renderDataSocket = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setSecondStatusMenu(item.id)}
        style={
          secondStatusMenu == item.id
            ? styles.activeChargeStatusSecond
            : styles.pasiveChargeStatusSecond
        }
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              gap: 3,
              alignItems: "center",
            }}
          >
            <Text style={styles.statusTextCharge_black}>{item.type}</Text>
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={require("../../../assets/images/system/chargeCarIcon.png")}
            />
            <Text
              style={styles.statusTextCharge_black}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.name}
            </Text>
          </View>
          {item.status == 1 ? (
            <>
              <View
                style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
              >
                <View
                  style={[
                    styles.circleChargeIconCard,
                    { backgroundColor: "#3BC908" },
                  ]}
                >
                  <Entypo name="flash" size={15} color="#fff" />
                </View>
                <Text style={[styles.textCharge_pasive, { color: "#3BC908" }]}>
                  {t("Uygun")}
                </Text>
              </View>
            </>
          ) : (
            <>
              <View
                style={{ flexDirection: "row", gap: 3, alignItems: "center" }}
              >
                <View
                  style={[
                    styles.circleChargeIconCard,
                    { backgroundColor: "#EC6047" },
                  ]}
                >
                  <Entypo name="flash" size={15} color="#fff" />
                </View>
                <Text style={[styles.textCharge_pasive, { color: "#EC6047" }]}>
                  {t("Rezerve")}
                </Text>
              </View>
            </>
          )}
        </View>
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={styles.cardChargeSecondLeft}>
            <Text style={styles.textLeftSocketted}>{item.socketName}</Text>
            <Image
              style={{ width: 25, height: 30 }}
              resizeMode="contain"
              source={require("../../../assets/images/system/dcImage.png")}
            />
          </View>
          <View style={styles.cardChargeSecondRight}>
            <Text style={styles.kwTextGenerate}>{item.kw} kw</Text>
            <Text
              style={[styles.statusTextCharge_black, { fontWeight: "500" }]}
            >
              {item.price} ₺
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // tab menu 2 end
  // modal socket
  const [modalNotSocket, setModalNotSocket] = useState(
    GeneralResponse.globalCharge == "start" ? true : false
  );
  // charge modal start
  const [chargeModal, setChargeModal] = useState(false);
  const topData = [
    {
      id: 1,
      name: t("Fotoğraf Ekle"),
      image: require("../../../assets/images/system/chargeImage/c1.png"),
    },
    {
      id: 2,
      name: t("Yakındakileri Göster"),
      image: require("../../../assets/images/system/chargeImage/c2.png"),
    },
    {
      id: 3,
      name: t("Yol Tarifi"),
      image: require("../../../assets/images/system/chargeImage/c3.png"),
    },
    {
      id: 4,
      name: t("Paylaş"),
      image: require("../../../assets/images/system/chargeImage/c4.png"),
    },
    {
      id: 5,
      name: t("Düzenle"),
      image: require("../../../assets/images/system/chargeImage/c5.png"),
    },
  ];
  const renderTopData = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          width: width * 0.16,
        }}
      >
        <TouchableOpacity
          style={{
            width: width * 0.11,
            height: width * 0.11,
            borderRadius: 100,
            backgroundColor: "#D7EBFD",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "40%", height: "40%" }}
            resizeMode="contain"
            source={item.image}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 9,
            textAlign: "center",
            color: colors.color_sliderPurple,
            marginTop: 5,
          }}
        >
          {item.name}
        </Text>
      </View>
    );
  };

  // menu 3 srart
  const menuTh = [
    { id: 1, type: 1 },
    { id: 2, type: 2 },
    { id: 3, type: 3 },
    { id: 4, type: 4 },
    { id: 5, type: 5 },
  ];
  const renderMenuTh = ({ item }) => {
    return <CheckInComponenet type={item.type} />;
  };
  const menuFour = [
    { id: 1, type: 0 },
    { id: 2, type: 0 },
    { id: 3, type: 0 },
    { id: 4, type: 0 },
    { id: 5, type: 0 },
  ];
  const renderMenuFour = ({ item }) => {
    return <CheckInComponenet type={item.type} />;
  };
  // menu 3 end
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        // paddingTop: insets.top + 15,
        paddingBottom: insets.bottom + 15,
        // paddingHorizontal: 15,
        gap: 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <View style={styles.sliderTop}>
        <TouchableOpacity
          style={[styles.buttonSliderRight, { top: width * 0.1 }]}
          onPress={() => setHeart(!heart)}
        >
          <AntDesign
            name="hearto"
            size={16}
            color={heart == true ? "#EC6047" : colors.color_black}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonSliderRight, { top: width * 0.22 }]}
          onPress={() => setStar(!star)}
        >
          <AntDesign
            name="star"
            size={16}
            color={star ? "#FFD500" : colors.color_black}
          />
          <View style={styles.numbersCircle}>
            <View style={styles.numbersCircle_inner}>
              <Text style={styles.rateColorDetailSlider}>4.5</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setBanner(!banner)}
          style={[styles.buttonSliderRight, { top: width * 0.35 }]}
        >
          {banner == false ? (
            <>
              <Entypo name="map" size={16} color="#EC6047" />
            </>
          ) : (
            <>
              <Entypo name="image" size={16} color="#EC6047" />
            </>
          )}
        </TouchableOpacity>
        {banner == false ? (
          <>
            <Slick
              paginationStyle={{ bottom: 30 }}
              activeDotStyle={{
                height: 8,
                borderRadius: 30,
                width: 20,
                backgroundColor: colors.color_border,
              }}
              showsButtons={false}
              dotStyle={{
                width: 8,
                height: 8,
                backgroundColor: colors.color_border,
                borderRadius: 100,
                opacity: 0.5,
              }}
            >
              <View style={{ width: "100%", height: "100%" }}>
                <Image
                  source={require("../../../assets/images/system/slider.png")}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={{ width: "100%", height: "100%" }}>
                <Image
                  source={require("../../../assets/images/system/slider.png")}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View style={{ width: "100%", height: "100%" }}>
                <Image
                  source={require("../../../assets/images/system/slider.png")}
                  resizeMode="cover"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </Slick>
          </>
        ) : (
          <>
            <MapView style={{ width: "100%", height: "100%" }} />
          </>
        )}
      </View>
      <View style={styles.scrolsDetails}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            width: "100%",
            padding: 15,
            gap: 7,
            paddingTop: 0,
          }}
        >
          <Text style={styles.headerChartgePage}>Forum İstanbul</Text>
          <Text style={styles.textDetailChargePageStart}>
            Bayrampaşa, Mithat paşa No 10
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text style={styles.headerChartgePage}>4.5</Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
            >
              <AntDesign name="star" size={18} color="#FB991E" />
              <AntDesign name="star" size={18} color="#FB991E" />
              <AntDesign name="star" size={18} color="#FB991E" />
              <AntDesign name="star" size={18} color="#FB991E" />
              <AntDesign name="star" size={18} color="#FB991E" />
            </View>
            <Text style={styles.textDetailChargePageStart}>
              (128 {t("Yorum")})
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#dadada",
              paddingBottom: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <View style={styles.chargeIcons}>
                <MaterialIcons name="flash-on" size={14} color="#0EC470" />
              </View>
              <Text style={styles.statusTextCharge}>{t("Uygun")}</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <FontAwesome6 name="location-dot" size={18} color="#EC6047" />
              <Text style={styles.statusTextCharge_black}>5.6 km</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
            >
              <FontAwesome6 name="car" size={18} color="#EC6047" />
              <Text style={styles.statusTextCharge_black}>5 {t("dak")}</Text>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#dadada",
              paddingBottom: 10,
            }}
          >
            <TouchableOpacity
              style={styles.purpleButtonsChargePage}
              onPress={() => navigation.navigate("pages/home/mapPage_main")}
            >
              <FontAwesome
                name="location-arrow"
                size={18}
                color={colors.color_white}
              />
              <Text style={styles.purpleButton_text}>{t("Konuma Git")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.bunttonTransParantCharge}
              onPress={() => navigation.navigate("pages/home/plansPage")}
            >
              <Text style={styles.bunttonTransParantCharge_text}>
                {t("Planlama")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", paddingVertical: 5 }}>
            <FlatList
              data={topData}
              renderItem={renderTopData}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              marginTop: -10,
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => setMenuCharge(1)}
              style={
                menuCharge == 1
                  ? styles.activeChargePage
                  : styles.pasiveChargePage
              }
            >
              <Text
                style={
                  menuCharge == 1
                    ? styles.textCharge_active
                    : styles.textCharge_pasive
                }
              >
                {t("Hakkında")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMenuCharge(2)}
              style={
                menuCharge == 2
                  ? styles.activeChargePage
                  : styles.pasiveChargePage
              }
            >
              <Text
                style={
                  menuCharge == 2
                    ? styles.textCharge_active
                    : styles.textCharge_pasive
                }
              >
                {t("Şarj Soketleri")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMenuCharge(3)}
              style={
                menuCharge == 3
                  ? styles.activeChargePage
                  : styles.pasiveChargePage
              }
            >
              <Text
                style={
                  menuCharge == 3
                    ? styles.textCharge_active
                    : styles.textCharge_pasive
                }
              >
                Check - ins
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setMenuCharge(4)}
              style={
                menuCharge == 4
                  ? styles.activeChargePage
                  : styles.pasiveChargePage
              }
            >
              <Text
                style={
                  menuCharge == 4
                    ? styles.textCharge_active
                    : styles.textCharge_pasive
                }
              >
                {t("Yorumlar")}
              </Text>
            </TouchableOpacity>
          </View>
          {menuCharge == 1 ? (
            <>
              <View style={{ width: "100%" }}>
                <ChargeOne />
              </View>
            </>
          ) : menuCharge == 2 ? (
            <>
              <FlatList
                data={dataSocket}
                renderItem={renderDataSocket}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ width: "100%", gap: 15 }}
              />
              <View style={{ width: "100%", gap: 5 }}>
                <TouchableOpacity
                  style={[styles.purpleButton, { height: 45, marginTop: 15 }]}
                  onPress={() => navigation.navigate("pages/home/startChPage")}
                >
                  <Entypo name="flash" size={20} color="#FFD500" />
                  <Text style={styles.purpleButton_text}>
                    {t("Şarj Başlat")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("pages/sarjFile/reservationPage")
                  }
                  style={[
                    styles.transparentButton,
                    { height: 45, marginTop: 5 },
                  ]}
                >
                  <Text style={styles.transparentButton_text}>
                    {t("Rezervasyon")}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : menuCharge == 3 ? (
            <>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: "100%", gap: 15 }}
                data={menuTh}
                renderItem={renderMenuTh}
                keyExtractor={(item) => item.id}
              />
              <TouchableOpacity
                style={[styles.purpleButton, { marginTop: 15 }]}
                onPress={() => navigation.navigate("pages/home/checkPage")}
              >
                <Text style={styles.purpleButton_text}>Check-in</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ width: "100%", gap: 15 }}
                data={menuFour}
                renderItem={renderMenuFour}
                keyExtractor={(item) => item.id}
              />
              <TouchableOpacity
                style={[styles.purpleButton, { marginTop: 10 }]}
                onPress={() => navigation.navigate("pages/home/commentPage")}
              >
                <Text style={styles.purpleButton_text}>{t("Yorum Yap")}</Text>
              </TouchableOpacity>
            </>
          )}
        </ScrollView>
      </View>
      {/* socket Modal start */}
      <Modal
        style={{
          zIndex: 9,
        }}
        transparent={true}
        visible={modalNotSocket}
      >
        <View
          style={[
            styles.customModalOuter,
            { paddingTop: insets.top + 15, paddingBottom: insets.bottom + 15 },
          ]}
        >
          <TouchableOpacity
            onPress={() => setModalNotSocket(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
          <View style={styles.modalNotSocketCenters}>
            <Image
              resizeMode="contain"
              style={{ width: 40, height: 40 }}
              source={require("../../../assets/images/system/cgIcon.png")}
            />
            <Text style={styles.greenTextModalHeader}>
              {t("Soket Takılı Değil")}
            </Text>
            <Text style={styles.textCanterModalNotSocketDetail}>
              {t("Şarj işlemini başlatabilmek için")}
            </Text>
            <Text
              style={[
                styles.textCanterModalNotSocketDetail,
                { color: colors.color_sliderPurple },
              ]}
            >
              1 {t("Numaralı soketi aracanıza takınız")}
            </Text>
            <TouchableOpacity
              style={styles.orangeLoginButton}
              onPress={() => setModalNotSocket(false)}
            >
              <Text style={styles.orangeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setModalNotSocket(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
        </View>
      </Modal>
      {/* socket Modal start */}
      <Modal
        style={{
          zIndex: 9,
        }}
        transparent={true}
        visible={chargeModal}
      >
        <View
          style={[
            styles.chargeModal_outher,
            {
              paddingTop: insets.top + 15,
              paddingBottom: insets.bottom + 15,
              paddingHorizontal: 15,
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => setChargeModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
          <LinearGradient
            colors={["#4316B7", "#5528C9"]}
            style={styles.modalChargeCenter}
          >
            <Text style={[styles.chargeStartCenter_text, { fontSize: 15 }]}>
              Şarj Oluyor
            </Text>
            <CircualComponents percentage={68} cost={7.69} />
            <View
              style={{ width: "100%", alignItems: "center", marginTop: 25 }}
            >
              <Text style={styles.chargeStartCenter_text}>10 KWs</Text>
              <Text style={styles.chargeStartCenter_text}>250,98 TL</Text>
            </View>
            <TouchableOpacity
              style={styles.whiteModalCenter}
              onPress={() => setChargeModal(false)}
            >
              <Text style={styles.whiteModalCenter_text}>Şarjı Bitir</Text>
            </TouchableOpacity>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => setChargeModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ChargeStartPage;
