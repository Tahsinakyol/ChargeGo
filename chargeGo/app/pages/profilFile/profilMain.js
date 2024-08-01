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
import { ScrollView } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Toolbar from "../Components/toolbar";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
const ProfilMain = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: "#4816BD",
      }}
    >
      <StatusBar style="light" />
      <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
        <View
          style={{
            width: width * 0.4,
            height: width * 0.4,
            backgroundColor: "#4219b5",
            borderRadius: width * 0.2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: width * 0.32,
              height: width * 0.32,
              backgroundColor: "#3d16ab",
              borderRadius: width / 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: width * 0.26,
                height: width * 0.26,
                backgroundColor: "#35139a",
                borderRadius: width / 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
        </View>
        <View style={styles.bottomProfiles}>
          <View style={styles.profilImages}>
            <Image
              style={styles.profilImagesCenter}
              source={require("../../../assets/images/system/slider.png")}
              resizeMode="cover"
            />
            <TouchableOpacity style={styles.buttonImagesProfile}>
              <AntDesign name="camerao" size={12} color={colors.color_black} />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", flex: 1 }}>
            <ScrollView
              style={{ width: "100%" }}
              contentContainerStyle={{ padding: 15, gap: 10 }}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.profilNameCenter}>Fırat Oruç</Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 15,
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
                  <Text style={styles.profilBannerCanter}>Şarj Oturumu</Text>
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
                  <Text style={styles.profilBannerCanter}>Toplam Tüketim</Text>
                  <Text style={styles.bottomProfilBanners}>300 KWh</Text>
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
                  <Text style={styles.profilBannerCanter}>CO2 Kazanımı</Text>
                  <Text style={styles.bottomProfilBanners}>300 m²</Text>
                </View>
              </View>
              <Text style={styles.purpleTextSee}>Hesap Bilgileri</Text>
              <View style={styles.profilButtons_main}>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/profilAccount")
                  }
                >
                  <AntDesign name="user" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Hesabım</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/activityProfiles")
                  }
                >
                  <MaterialCommunityIcons
                    name="chart-line-variant"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>Aktiviteler</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/myBillPage")
                  }
                >
                  <FontAwesome6
                    name="money-bill-alt"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>
                    Ödeme Detayları
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/chargeAction")
                  }
                >
                  <Feather name="battery-charging" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>
                    Şarj İşlemlerim
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/profilBill")
                  }
                >
                  <Entypo name="text-document" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Faturalarım</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/adressPage")
                  }
                >
                  <Entypo name="location-pin" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Adreslerim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/profilCamping")
                  }
                >
                  <AntDesign name="notification" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Kampanya</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.transparentButton}
                onPress={() => navigation.navigate("pages/profilFile/proPage")}
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
                  <Text style={styles.purpleButton_text}>
                    GPX Pro Üyelik Al
                  </Text>
                  <AntDesign name="gift" size={24} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.purpleTextSee}>Ödeme Araçları</Text>
              <View style={styles.profilButtons_main}>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/profilWallet")
                  }
                >
                  <AntDesign name="wallet" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Cüzdan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/walletCreitCard")
                  }
                >
                  <AntDesign name="creditcard" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Kredi Kartı</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/pointPage")
                  }
                >
                  <AntDesign name="gift" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>GPX Puan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilMainButtons}>
                  <Feather name="credit-card" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Ödeme Tipleri</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.purpleTextSee}>Aktiteler</Text>
              <View style={styles.profilButtons_main}>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate(
                      "pages/profilFile/rezervationProfilPage"
                    )
                  }
                >
                  <MaterialIcons name="date-range" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>
                    Rezervasyonlarım
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/favoriPage")
                  }
                >
                  <AntDesign name="hearto" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Favorilerim</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilMainButtons}>
                  <FontAwesome5 name="comment-dots" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Yorumlarım</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profilMainButtons}>
                  <Feather name="check-square" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Chek-in</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/profilCarPage")
                  }
                >
                  <FontAwesome5 name="car-alt" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Araçlarım</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.purpleTextSee}>Sözleşmeler</Text>
              <View style={styles.profilButtons_main}>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/contentPage", {
                      slug: "Şartlar ve Koşullar",
                    })
                  }
                >
                  <MaterialIcons
                    name="content-copy"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>
                    Şartlar ve Koşullar
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/contentPage", {
                      slug: "Gizlilik Politikası",
                    })
                  }
                >
                  <MaterialIcons
                    name="content-copy"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>
                    Gizlilik Politikası
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.purpleTextSee}>Hesap Ayarları</Text>
              <View style={styles.profilButtons_main}>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/preferPage")
                  }
                >
                  <MaterialCommunityIcons
                    name="filter-variant"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>Tercihler</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/notificationPage")
                  }
                >
                  <Ionicons
                    name="notifications-outline"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>Bildirim</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/supportPage")
                  }
                >
                  <AntDesign name="questioncircleo" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Destek</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/contactUsPage")
                  }
                >
                  <MaterialIcons
                    name="support-agent"
                    size={18}
                    color="#EC6047"
                  />
                  <Text style={styles.textProfilesButtons}>Bize Ulaşın</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/profilFile/settingPageSwc")
                  }
                >
                  <Entypo name="cog" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Ayarlar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.profilMainButtons}
                  onPress={() =>
                    navigation.navigate("pages/loginFile/loginPage")
                  }
                >
                  <AntDesign name="logout" size={18} color="#EC6047" />
                  <Text style={styles.textProfilesButtons}>Çıkış Yap</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <Toolbar />
    </View>
  );
};

export default ProfilMain;
