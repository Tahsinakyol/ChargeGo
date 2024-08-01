import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  Animated,
  Modal,
  ScrollView,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import {
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { SetGlobalCharge } from "../../redux/action";
import useThemeColors from "../../../assets/css/useThemeColors";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";
import {
  FontAwesome,
  Feather,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";
const Toolbar = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const opacity = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-width * 0.7)).current; // Initial position off-screen

  useEffect(() => {
    const fadeAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    fadeAnimation.start();

    return () => fadeAnimation.stop();
  }, [opacity]);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -width * 0.7,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [openModal, slideAnim, width]);
  // modal login start
  const [login, setLogin] = useState(true);
  // modal login end
  return (
    <>
      <View style={{ width: "100%" }}>
        <View style={[styles.Toolbar_outher, { paddingBottom: insets.bottom }]}>
          <TouchableOpacity
            style={styles.button_toolbar}
            onPress={() => {
              navigation.navigate("pages/home/homePage"), setOpenModal(false);
            }}
          >
            <Fontisto
              name="map-marker-alt"
              size={24}
              color={colors.color_purple}
            />
            <Text style={styles.toolvarText}>{t("İşlemler")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_toolbar}
            onPress={() => {
              navigation.navigate("pages/sarjFile/rezervationMain"),
                setOpenModal(false),
                dispatch(SetGlobalCharge("rezervation"));
            }}
          >
            <MaterialCommunityIcons
              name="calendar-clock-outline"
              size={24}
              color={colors.color_purple}
            />
            <Text style={styles.toolvarText}>{t("Rezervasyon")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_toolbar}>
            <Animated.Image
              style={[styles.effectImage, { opacity }]}
              resizeMode="contain"
              source={require("../../../assets/images/system/effect.png")}
            />
            <TouchableOpacity
              style={styles.toolBarCenterCircle}
              onPress={() => {
                navigation.navigate("pages/sarjFile/sarjMain"),
                  setOpenModal(false);
              }}
            >
              <Image
                style={styles.iconCenterToolbar}
                resizeMode="contain"
                source={require("../../../assets/images/system/toolbarIcon.png")}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_toolbar}
            onPress={() => {
              navigation.navigate("pages/profilFile/profilWallet"),
                setOpenModal(false);
            }}
          >
            <AntDesign name="wallet" size={24} color={colors.color_purple} />
            <Text style={styles.toolvarText}>{t("Cüzdan")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_toolbar}
            onPress={() => setOpenModal(true)}
          >
            <FontAwesome5 name="user" size={24} color={colors.color_purple} />
            <Text style={styles.toolvarText}>{t("Profil")}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={{
          zIndex: 9,
        }}
        transparent={true}
        visible={openModal}
        animationType="fade" // Optional: Add a fade effect when the modal appears
      >
        <View style={styles.leftModalMain}>
          <Animated.View
            style={[
              styles.inner_leftModal,
              {
                transform: [{ translateX: slideAnim }],
                paddingBottom: insets.bottom,
              },
            ]}
          >
            <View style={styles.bannerModalLeftMenu}>
              {login == false ? (
                <>
                  <View style={styles.loginNotHere}></View>
                  <View style={{ flex: 1, gap: 5 }}>
                    <Text style={{ color: "#fff", fontSize: 13 }}>
                      {t("Profilinizi Görmek için")}
                    </Text>
                    <Text style={{ color: "#fff", fontSize: 13 }}>
                      {t("giriş yapınız")}
                    </Text>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.loginLeftMenu_in}>
                    <View style={styles.loginProfileImage}>
                      <Image
                        style={styles.profilImagesCenter}
                        source={require("../../../assets/images/system/togg.png")}
                        resizeMode="cover"
                      />
                    </View>
                    <TouchableOpacity style={styles.cameraLeftMenu}>
                      <AntDesign
                        name="camera"
                        size={12}
                        color={colors.color_black}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1, gap: 2 }}>
                    <Text style={styles.helloLeftMenu}>{t("Merhaba")}</Text>
                    <Text style={styles.nameLeftMenu}>Tahsin Akyol</Text>
                  </View>
                </>
              )}
            </View>
            <View style={{ width: "100%", flex: 1 }}>
              <ScrollView
                style={{ width: "100%" }}
                contentContainerStyle={{ padding: 15, gap: 15 }}
                showsVerticalScrollIndicator={false}
              >
                {login == true ? (
                  <>
                    <View style={{ width: "100%" }}>
                      <View
                        style={{
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <View style={styles.profilBannerOne}>
                          <LinearGradient
                            start={{ x: 0.0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={["#071C67", "#FF6565"]}
                            style={styles.profilGradientCircle}
                          >
                            <FontAwesome6
                              name="battery-quarter"
                              size={16}
                              color="#fff"
                            />
                          </LinearGradient>
                          <Text style={styles.profilBannerCanter}>
                            {t("Şarj Oturumu")}
                          </Text>
                          <Text style={styles.bottomProfilBanners}>30</Text>
                        </View>
                        <View style={styles.profilBannerOne}>
                          <LinearGradient
                            start={{ x: 0.0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={["#071C67", "#FF6565"]}
                            style={styles.profilGradientCircle}
                          >
                            <FontAwesome name="flash" size={16} color="#fff" />
                          </LinearGradient>
                          <Text style={styles.profilBannerCanter}>
                            {t("Toplam Tüketim")}
                          </Text>
                          <Text style={styles.bottomProfilBanners}>
                            300 KWh
                          </Text>
                        </View>
                        <View style={styles.profilBannerOne}>
                          <LinearGradient
                            start={{ x: 0.0, y: 1 }}
                            end={{ x: 1, y: 1 }}
                            colors={["#071C67", "#FF6565"]}
                            style={styles.profilGradientCircle}
                          >
                            <FontAwesome name="flash" size={16} color="#fff" />
                          </LinearGradient>
                          <Text style={styles.profilBannerCanter}>
                            {t("CO2 Kazanımı")}
                          </Text>
                          <Text style={styles.bottomProfilBanners}>300 m²</Text>
                        </View>
                      </View>
                    </View>
                  </>
                ) : (
                  <>
                    <View
                      style={{
                        width: "100%",
                        padding: 15,
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                      }}
                    >
                      <TouchableOpacity
                        style={styles.buttonLoginLeftMenu}
                        onPress={() => {
                          navigation.navigate("pages/loginFile/mainLoginPage"),
                            setOpenModal(false);
                        }}
                      >
                        <Text style={{ color: "#fff", fontSize: 14 }}>
                          {t("Üye Girişi")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          setOpenModal(false),
                            navigation.navigate("pages/loginFile/registerPage");
                        }}
                        style={{ alignItems: "center", marginTop: 10 }}
                      >
                        <Text style={{ color: colors.color_black }}>
                          {t("Üye Değilmisiniz ?")}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                )}

                {login == true ? (
                  <>
                    <Text style={styles.purpleTextSee}>
                      {t("Hesap Bilgileri")}
                    </Text>
                    <View style={styles.profilButtons_main}>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/profilAccount"),
                            setOpenModal(false);
                        }}
                      >
                        <AntDesign name="user" size={18} color="#EC6047" />
                        <Text style={styles.textProfilesButtons}>
                          {t("Hesabım")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate(
                            "pages/profilFile/activityProfiles"
                          ),
                            setOpenModal(false);
                        }}
                      >
                        <MaterialCommunityIcons
                          name="chart-line-variant"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Aktiviteler")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/myBillPage"),
                            setOpenModal(false);
                        }}
                      >
                        <FontAwesome6
                          name="money-bill-alt"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Ödeme Detayları")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/chargeAction"),
                            setOpenModal(false);
                        }}
                      >
                        <Feather
                          name="battery-charging"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Şarj İşlemlerim")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/profilBill"),
                            setOpenModal(false);
                        }}
                      >
                        <Entypo
                          name="text-document"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Faturalarım")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/adressPage"),
                            setOpenModal(false);
                        }}
                      >
                        <Entypo name="location-pin" size={18} color="#EC6047" />
                        <Text style={styles.textProfilesButtons}>
                          {t("Adreslerim")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/profilCamping"),
                            setOpenModal(false);
                        }}
                      >
                        <AntDesign
                          name="notification"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Kampanya")}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={styles.transparentButton}
                      onPress={() => {
                        navigation.navigate("pages/profilFile/proPage"),
                          setOpenModal(false);
                      }}
                    >
                      <LinearGradient
                        start={{ x: 0.0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        colors={["#071C67", "#FF6565"]}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 7,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingHorizontal: 10,
                        }}
                      >
                        <Text
                          style={[styles.purpleButton_text, { color: "#fff" }]}
                        >
                          GPX Pro {t("Üyelik Al")}
                        </Text>
                        <AntDesign name="gift" size={24} color="#fff" />
                      </LinearGradient>
                    </TouchableOpacity>
                    <Text style={styles.purpleTextSee}>
                      {t("Ödeme Araçları")}
                    </Text>
                    <View style={styles.profilButtons_main}>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/profilWallet"),
                            setOpenModal(false);
                        }}
                      >
                        <AntDesign name="wallet" size={18} color="#EC6047" />
                        <Text style={styles.textProfilesButtons}>
                          {t("Cüzdan")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate(
                            "pages/profilFile/walletCreitCard"
                          ),
                            setOpenModal(false);
                        }}
                      >
                        <AntDesign
                          name="creditcard"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Kredi Kartı")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/pointPage"),
                            setOpenModal(false);
                        }}
                      >
                        <AntDesign name="gift" size={18} color="#EC6047" />
                        <Text style={styles.textProfilesButtons}>
                          GPX {t("Puan")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.profilMainButtons}>
                        <Feather name="credit-card" size={18} color="#EC6047" />
                        <Text style={styles.textProfilesButtons}>
                          {t("Ödeme Tipleri")}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.purpleTextSee}>{t("Aktiteler")}</Text>
                    <View style={styles.profilButtons_main}>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate(
                            "pages/profilFile/rezervationProfilPage"
                          ),
                            setOpenModal(false);
                        }}
                      >
                        <MaterialIcons
                          name="date-range"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Rezervasyonlarım")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/favoriPage"),
                            setOpenModal(false);
                        }}
                      >
                        <AntDesign name="hearto" size={18} color="#EC6047" />
                        <Text style={styles.textProfilesButtons}>
                          {t("Favorilerim")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.profilMainButtons}>
                        <FontAwesome5
                          name="comment-dots"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Yorumlarım")}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.profilMainButtons}>
                        <Feather
                          name="check-square"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>Chek-in</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.profilMainButtons}
                        onPress={() => {
                          navigation.navigate("pages/profilFile/profilCarPage"),
                            setOpenModal(false);
                        }}
                      >
                        <FontAwesome5
                          name="car-alt"
                          size={18}
                          color="#EC6047"
                        />
                        <Text style={styles.textProfilesButtons}>
                          {t("Araçlarım")}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : null}
                <Text style={styles.purpleTextSee}>{t("Sözleşmeler")}</Text>
                <View style={styles.profilButtons_main}>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/contentPage", {
                        slug: t("Şartlar ve Koşullar"),
                      }),
                        setOpenModal(false);
                    }}
                  >
                    <MaterialIcons
                      name="content-copy"
                      size={18}
                      color="#EC6047"
                    />
                    <Text style={styles.textProfilesButtons}>
                      {t("Şartlar ve Koşullar")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/contentPage", {
                        slug: t("Gizlilik Politikası"),
                      }),
                        setOpenModal(false);
                    }}
                  >
                    <MaterialIcons
                      name="content-copy"
                      size={18}
                      color="#EC6047"
                    />
                    <Text style={styles.textProfilesButtons}>
                      {t("Gizlilik Politikası")}
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.purpleTextSee}>{t("Hesap Ayarları")}</Text>
                <View style={styles.profilButtons_main}>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/preferPage"),
                        setOpenModal(false);
                    }}
                  >
                    <MaterialCommunityIcons
                      name="filter-variant"
                      size={18}
                      color="#EC6047"
                    />
                    <Text style={styles.textProfilesButtons}>
                      {t("Tercihler")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/notificationPage"),
                        setOpenModal(false);
                    }}
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={18}
                      color="#EC6047"
                    />
                    <Text style={styles.textProfilesButtons}>
                      {t("Bildirim")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/supportPage"),
                        setOpenModal(false);
                    }}
                  >
                    <AntDesign
                      name="questioncircleo"
                      size={18}
                      color="#EC6047"
                    />
                    <Text style={styles.textProfilesButtons}>
                      {t("Destek")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/contactUsPage"),
                        setOpenModal(false);
                    }}
                  >
                    <MaterialIcons
                      name="support-agent"
                      size={18}
                      color="#EC6047"
                    />
                    <Text style={styles.textProfilesButtons}>
                      {t("Bize Ulaşın")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/profilFile/settingPageSwc"),
                        setOpenModal(false);
                    }}
                  >
                    <Entypo name="cog" size={18} color="#EC6047" />
                    <Text style={styles.textProfilesButtons}>
                      {t("Ayarlar")}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.profilMainButtons}
                    onPress={() => {
                      navigation.navigate("pages/loginFile/loginPage"),
                        setOpenModal(false);
                    }}
                  >
                    <AntDesign name="logout" size={18} color="#EC6047" />
                    <Text style={styles.textProfilesButtons}>
                      {t("Çıkış Yap")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                width: "100%",
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 10,
                paddingBottom: 10,
                gap: 10,
              }}
            >
              <TouchableOpacity>
                <AntDesign
                  name="facebook-square"
                  size={20}
                  color={colors.color_black}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  name="instagram"
                  size={20}
                  color={colors.color_black}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome6
                  name="x-twitter"
                  size={20}
                  color={colors.color_black}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  name="youtube"
                  size={20}
                  color={colors.color_black}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <AntDesign
                  name="linkedin-square"
                  size={20}
                  color={colors.color_black}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                gap: 5,
                paddingBottom: insets.bottom + 10,
              }}
            >
              <Text
                style={{
                  color: colors.color_black,
                  opacity: 0.5,
                  fontSize: 14,
                }}
              >
                Charge Go Mobile
              </Text>
              <Text
                style={{
                  color: colors.color_black,
                  opacity: 0.5,
                  fontSize: 12,
                }}
              >
                {t("Versiyon")} 1
              </Text>
            </View>
          </Animated.View>
          <TouchableOpacity
            onPress={() => setOpenModal(false)}
            style={{ height: "100%", flex: 1 }}
          >
            <View style={styles.buttonArrowIcon}>
              <Ionicons name="chevron-back" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default Toolbar;
