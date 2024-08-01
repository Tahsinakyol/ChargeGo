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
import MapScreen from "../Components/mapSreen";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import CardBottom from "../Components/cardBottom";
import Toolbar from "../Components/toolbar";
import MapView, { Marker } from "react-native-maps";
import MapSwichLine from "../Components/mapSwichLine";
import { ScrollView } from "native-base";
import ActionSheet from "../Components/actionSheet";
import { useDisclose, Actionsheet } from "native-base";
import FilterPageComp from "./filterPageComp";
import useThemeColors from "../../../assets/css/useThemeColors";
import Slick from "react-native-slick";
import { useTranslation } from "react-i18next";
const homePage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  // slider start
  const [closeSlider, setCloseSlider] = useState(true);
  // slider end
  const {
    isOpen: isFilterOpen,
    onOpen: onFilterOpen,
    onClose: onFilterClose,
  } = useDisclose();
  const [homeModal, setHomeModal] = useState(false);
  // banner data start
  const [tabBanner, setTabBanner] = useState([]);

  const dataBanner = [
    {
      id: 1,
      image: require("../../../assets/images/system/banner/bannerCheck.png"),
      name: t("Uygun Soketler"),
    },
    {
      id: 2,
      image: require("../../../assets/images/system/banner/bannerOrange.png"),
      name: t("Ultra Hızlı (HPC)"),
    },
    {
      id: 3,
      image: require("../../../assets/images/system/banner/bannerPurple.png"),
      name: t("AC Şarj"),
    },
  ];

  const handleBannerPress = (id) => {
    if (tabBanner.includes(id)) {
      setTabBanner(tabBanner.filter((bannerId) => bannerId !== id)); // Eğer zaten aktifse pasif hale getir
    } else {
      setTabBanner([...tabBanner, id]); // Eğer aktif değilse aktif hale getir
    }
  };

  const renderDataBanner = ({ item }) => {
    return (
      <TouchableOpacity
        style={
          tabBanner.includes(item.id)
            ? styles.activeBannerButton
            : styles.pasiveBannerButton
        }
        onPress={() => handleBannerPress(item.id)}
      >
        <Image
          style={styles.imagesBanners}
          resizeMode="contain"
          source={item.image}
        />
        <Text
          style={
            tabBanner.includes(item.id)
              ? styles.activeBannerText
              : styles.pasiveBannerText
          }
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  // banner data end
  // bottom cart Data start
  const [bottomPosition] = useState(new Animated.Value(15));

  const animateBottom = () => {
    const toValue = bottomPosition._value === 15 ? -700 : 15;
    Animated.timing(bottomPosition, {
      toValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };
  const cardData = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const renderBottom = ({ item }) => {
    return <CardBottom />;
  };
  // bottom cart Data end
  // map view cordinat start
  const coordinates = {
    latitude: 41.015137, // Example latitude
    longitude: 28.97953, // Example longitude
    latitudeDelta: 0.0922, // Zoom level latitude
    longitudeDelta: 0.0421, // Zoom level longitude
  };
  // map view cordinat END
  // info modal start
  const [infoModal, setInfoModal] = useState(false);
  // info modal end
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <StatusBar style="dark" />
      <View style={{ width: "100%", flex: 1, overflow: "hidden" }}>
        <MapScreen />
        {/* banner start */}
        <View
          style={{
            width: "100%",
            paddingTop: insets.top + 15,
            paddingHorizontal: 15,
            position: "absolute",
            top: 0,
            gap: 10,
            zIndex: 10,
          }}
        >
          {closeSlider == true ? (
            <>
              <View style={styles.sliderTopAdj}>
                <TouchableOpacity
                  style={styles.buttonabsSlider}
                  onPress={() => setCloseSlider(false)}
                >
                  <FontAwesome
                    name="times"
                    size={16}
                    color={colors.color_black}
                  />
                </TouchableOpacity>
                <Slick showsButtons={false} showsPagination={false}>
                  <View style={styles.AdjHomePageSlider}>
                    <Image
                      style={styles.AdjHomePageSlider}
                      source={require("../../../assets/images/system/infoImages/i1.png")}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.AdjHomePageSlider}>
                    <Image
                      style={styles.AdjHomePageSlider}
                      source={require("../../../assets/images/system/infoImages/i1.png")}
                      resizeMode="cover"
                    />
                  </View>
                </Slick>
              </View>
            </>
          ) : null}
          <View style={styles.homePageBanner}>
            <View style={styles.bannerSearch_homePage}>
              <TouchableOpacity style={styles.searchBannerButton}>
                <Ionicons name="search" size={16} color={colors.color_black} />
              </TouchableOpacity>
              <TextInput
                style={styles.inputBannerHome}
                placeholder={t("Lokasyon Ara")}
                placeholderTextColor={"gray"}
              />
            </View>
            <TouchableOpacity style={styles.filterIcons} onPress={onFilterOpen}>
              <Ionicons
                name="filter-outline"
                size={16}
                color={colors.color_black}
              />
            </TouchableOpacity>
          </View>

          <View style={{ width: "100%" }}>
            <FlatList
              data={dataBanner}
              renderItem={renderDataBanner}
              keyExtractor={(item) => item.id}
              horizontal
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* banner end */}
        {/* right Icons start */}
        <View
          style={{
            paddingHorizontal: 5,
            position: "absolute",
            top: height * 0.25,
            right: 0,
            gap: height * 0.01,
            zIndex: 1,
            height: height * 0.7,
            alignItems: "center",
            paddingTop: 50,
          }}
        >
          <TouchableOpacity
            style={styles.iconRightHomePage}
            onPress={() => setHomeModal(true)}
          >
            <FontAwesome6
              name="location-crosshairs"
              size={17}
              color="#EC6047"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconRightHomePage}
            onPress={animateBottom}
          >
            <FontAwesome6
              name="location-arrow"
              size={17}
              color={colors.color_purple}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconRightHomePage}>
            <FontAwesome name="gift" size={17} color={colors.color_purple} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconRightHomePage}>
            <FontAwesome name="heart-o" size={17} color={colors.color_purple} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconRightHomePage}
            onPress={() => navigation.navigate("pages/home/tarifsPage")}
          >
            <Fontisto name="date" size={17} color={colors.color_purple} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconRightHomePage}
            onPress={() => setInfoModal(true)}
          >
            <Feather name="info" size={17} color={colors.color_purple} />
          </TouchableOpacity>
        </View>
        {/* right Icons end */}
        {/* bottom card start */}
        <Animated.View
          style={{
            width: "100%",
            position: "absolute",
            bottom: -700,
            zIndex: 10,
            paddingBottom: 25,
            transform: [{ translateY: bottomPosition }],
          }}
        >
          <FlatList
            data={cardData}
            renderItem={renderBottom}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          />
        </Animated.View>
        {/* bottom card end */}
      </View>

      {/* footer start */}
      <Toolbar />
      {/* footer end */}
      {/* modal open start */}
      <Modal
        style={{
          zIndex: 9,
        }}
        transparent={true}
        visible={homeModal}
      >
        <View
          style={[
            styles.settingHomePageModal_outher,
            {
              padding: 15,
              paddingBottom: insets.bottom + 15,
              paddingTop: insets.top + 15,
            },
          ]}
        >
          <TouchableOpacity
            style={{ width: "100%", flex: 1 }}
            onPress={() => setHomeModal(false)}
          ></TouchableOpacity>
          <View style={styles.homeModal_inner}>
            <View style={{ width: "70%" }}>
              <Text style={styles.centerTextModalHome}>
                “Şarjgo” {t("konumuzu kullanılabilsin mi")}?
              </Text>
            </View>
            <Text style={styles.textHeaderModalHomePage}>
              {t(
                "Harita üzerinde konumuzu yakın lokasyon ve istasyonları görüntüleyebilmek için konumu izni vermelisiniz"
              )}
            </Text>
            <View style={{ width: "100%", flex: 1 }}>
              <MapView
                style={{ width: "100%", height: "100%" }}
                initialRegion={coordinates}
              >
                <Marker coordinate={coordinates} />
              </MapView>
            </View>
            <View style={{ width: "100%" }}>
              <MapSwichLine label={t("Bir  kez izin ver")} />
              <MapSwichLine label={t("Uygulamayı Kullanırken İzin Ver")} />
              <MapSwichLine label={t("İzin Verme")} />
            </View>
          </View>
          <TouchableOpacity
            style={{ width: "100%", flex: 1 }}
            onPress={() => setHomeModal(false)}
          ></TouchableOpacity>
        </View>
      </Modal>
      {/* modal open end */}
      {/* info Modal start */}
      <Modal
        style={{
          zIndex: 9,
        }}
        transparent={true}
        visible={infoModal}
      >
        <View style={styles.modalOuther}>
          <TouchableOpacity
            onPress={() => setInfoModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
          <View style={styles.modal_inner_main}>
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{ gap: 10 }}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.centerTextModalHome}>
                {t("Simge ve Anlamları")}
              </Text>
              <View style={styles.headerModal_info}>
                <Text style={styles.minimalHeaderInfoModal}>{t("Tip")}</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i1.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>AC</Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i2.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>DC</Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i3.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Hızlı")}
                  </Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i4.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Favori")}
                  </Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i5.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>Hızlı</Text>
                </View>
              </View>
              <View style={styles.headerModal_info}>
                <Text style={styles.minimalHeaderInfoModal}>{t("Durum")}</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i6.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Müsait")}
                  </Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i7.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Meşgul")}
                  </Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i8.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Bilinmiyor")}
                  </Text>
                </View>
              </View>
              <View style={styles.headerModal_info}>
                <Text style={styles.minimalHeaderInfoModal}>{t("Bilgi")}</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i9.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Hızlı")}
                  </Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i10.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Çok Hızlı")}
                  </Text>
                </View>
                <View style={styles.iconInfoModalTop}>
                  <Image
                    style={styles.imagesInfoIcon}
                    source={require("../../../assets/images/system/infoImages/i11.png")}
                    resizeMode="contain"
                  />
                  <Text style={styles.centerTextIconInfoModal}>
                    {t("Bakımda")}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.purpleButton}
                onPress={() => setInfoModal(false)}
              >
                <Text style={styles.purpleButton_text}>{t("Anladım")}</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
          <TouchableOpacity
            onPress={() => setInfoModal(false)}
            style={{ width: "100%", flex: 1 }}
          ></TouchableOpacity>
        </View>
      </Modal>
      {/* info Modal end */}
      {/* actionModal start */}
      <ActionSheet isOpen={isFilterOpen} onClose={onFilterClose}>
        <ScrollView
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <Actionsheet.Item
            style={{
              alignItems: "center",
              backgroundColor: colors.color_white,
              width: width * 1,
            }}
          >
            <FilterPageComp />
          </Actionsheet.Item>
        </ScrollView>
      </ActionSheet>
    </View>
  );
};

export default homePage;
