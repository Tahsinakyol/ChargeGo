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
import ModalGenerate from "../Components/modalGenerate";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const PointPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    { id: 1, name: t("Paylaş"), point: 10 },
    { id: 2, name: t("İletişim Bilgilerini Güncelle"), point: 10 },
    { id: 3, name: t("Aracını Ekle"), point: 0 },
    { id: 4, name: t("Kredi Kartını Ekle"), point: 10 },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: colors.color_border,
        }}
      >
        <Text style={styles.activeLangText}>{item.name}</Text>
        {item.point > 0 ? (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  styles.orangeTextHeaderSeeRezervation,
                  { fontSize: 13, fontWeight: "700" },
                ]}
              >
                +{item.point} GPX
              </Text>
              <Foundation name="check" size={20} color="#3BC908" />
            </View>
          </>
        ) : null}
      </View>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: insets.bottom + 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Puan")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              gap: 15,
            }}
          >
            <View
              style={{
                width: "100%",
                backgroundColor: colors.color_white,
                borderRadius: 10,
                padding: 15,
                paddingTop: 0,
              }}
            >
              <FlatList
                contentContainerStyle={{ width: "100%" }}
                showsVerticalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </View>
            <Text style={styles.activeLangText}>{t("Paylaşım Kodu")}</Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={styles.buttonshare}>
                <Text style={styles.copyPurpleText}>
                  http ://yemdndfs.comfhfj
                </Text>
                <FontAwesome6
                  name="copy"
                  size={16}
                  color={colors.color_sliderPurple}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="sharealt"
                  size={20}
                  color={colors.color_sliderPurple}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.white_walletLine}>
              <Text style={styles.textWalletButton}>
                {t("Sizin Paylaşım Kodunuzla üye olan kişilerden.")} + 5 GPX{" "}
                {t("Kazanma Fırsatı")}
              </Text>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 15,
                }}
              >
                <Text
                  style={[
                    styles.orangeTextHeaderSeeRezervation,
                    { fontSize: 13, fontWeight: "700" },
                  ]}
                >
                  {t("Toplam")}
                </Text>
                <Text style={styles.rezervationBoldText_detail}>75 TL</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PointPage;
