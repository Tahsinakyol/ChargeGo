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
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Toolbar from "../Components/toolbar";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilWallet = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    {
      id: 1,
      type: 1,
      name: "Para Transferi - Cüzdana ",
      hour: "11: 30",
      date: "01.06.2024",
      price: 15,
    },
    {
      id: 2,
      type: 2,
      name: "Şarj İşlemi - Ödeme",
      hour: "11: 30",
      date: "01.06.2024",
      price: 15,
    },
    {
      id: 3,
      type: 1,
      name: "Para Transferi - Cüzdana ",
      hour: "11: 30",
      date: "01.06.2024",
      price: 15,
    },
    {
      id: 4,
      type: 1,
      name: "Para Transferi - Cüzdana ",
      hour: "11: 30",
      date: "01.06.2024",
      price: 15,
    },
    {
      id: 5,
      type: 2,
      name: "Şarj İşlemi - Ödeme ",
      hour: "11: 30",
      date: "01.06.2024",
      price: 15,
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingBottom: 15,
          gap: 10,
          backgroundColor: colors.color_white,
          padding: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: colors.color_border,
        }}
      >
        <View style={{ flexDirection: "row", flex: 1, gap: 5 }}>
          <Image
            style={{ width: 15, height: 15 }}
            resizeMode="contain"
            source={
              item.type == 1
                ? require("../../../assets/images/system/walletVector1.png")
                : require("../../../assets/images/system/walletVector2.png")
            }
          />
          <View style={{ flex: 1, gap: 2 }}>
            <Text style={[styles.textWalletButton, { fontWeight: "700" }]}>
              {item.name}
            </Text>
            <Text style={styles.dateAndHoursWallet}>
              {item.hour} {item.date}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Text style={[styles.textWalletButton, { fontWeight: "700" }]}>
            {item.price}.00 ₺
          </Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={18}
            color={colors.color_black}
          />
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
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Cüzdan")} menuType="filter" />
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
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              gap: 10,
            }}
          >
            <LinearGradient
              style={{
                width: "100%",
                height: 120,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
              colors={["#B2164E", "#411982"]}
            >
              <Text style={styles.priceWalletCenterText}>
                ₺800,<Text style={{ fontSize: 20 }}>48</Text>
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={require("../../../assets/images/system/walletIcon2.png")}
                  />
                  <Text style={{ fontSize: 13, color: "#fff" }}>3600 GPX</Text>
                </View>
                <View
                  style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
                >
                  <Image
                    style={{ width: 18, height: 18 }}
                    resizeMode="contain"
                    source={require("../../../assets/images/system/wallatIcon1.png")}
                  />
                  <Text style={{ fontSize: 13, color: "#fff" }}>
                    1 Şarj Hediye
                  </Text>
                </View>
              </View>
            </LinearGradient>
            <View style={{ width: "100%", flexDirection: "row", gap: 10 }}>
              <TouchableOpacity
                style={styles.walletBannerButton}
                onPress={() =>
                  navigation.navigate("pages/sarjFile/qrChargepage")
                }
              >
                <MaterialIcons name="qr-code" size={20} color="#EC6047" />
                <Text style={styles.textWalletButton}>{t("QR İşlemleri")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.walletBannerButton}
                onPress={() => navigation.navigate("pages/profilFile/addMoney")}
              >
                <Octicons name="credit-card" size={20} color="#EC6047" />
                <Text style={styles.textWalletButton}>{t("Para Yükle")}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.walletBannerButton}
                onPress={() =>
                  navigation.navigate("pages/profilFile/walletCreitCard")
                }
              >
                <MaterialCommunityIcons
                  name="credit-card-check-outline"
                  size={20}
                  color="#EC6047"
                />
                <Text style={styles.textWalletButton}>
                  {t("Kredi Kartlarım")}
                </Text>
              </TouchableOpacity>
            </View>
            <LinearGradient
              style={{
                width: "100%",
                height: 80,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
              colors={["#FF0000", "#4316B7"]}
              start={[0, 0]}
              end={[1, 1]}
            >
              <View
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                  source={require("../../../assets/images/system/walletLine.png")}
                />
              </View>
              <View style={{ flex: 1, justifyContent: "center", gap: 2 }}>
                <Text style={{ fontSize: 13, color: "#fff" }}>
                  ZES {t("İstasyonlarında")}
                </Text>
                <Text
                  style={{ fontSize: 15, color: "#fff", fontWeight: "600" }}
                >
                  %5 {t("indirimli şarj edebilrisiniz.")}{" "}
                </Text>
              </View>
            </LinearGradient>
            <View style={styles.walletBannerSecond}>
              <Text style={[styles.textWalletButton, { fontWeight: "700" }]}>
                {t("İşlemler")}
              </Text>
              <TouchableOpacity>
                <Text style={styles.purpleTextSee}>{t("Tümünü Göster")}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ width: "100%", gap: 10 }}
              showsVerticalScrollIndicator={false}
            />
          </ScrollView>
        </View>
      </View>
      <Toolbar />
    </View>
  );
};

export default ProfilWallet;
