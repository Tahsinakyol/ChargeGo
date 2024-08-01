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
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Select } from "native-base";
import Menu from "../Components/menu";
import SelectComp from "../Components/select";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const CheckDetail = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { slug } = useLocalSearchParams();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const { t } = useTranslation();
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
      <Menu header={slug} />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ gap: 10, padding: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.headerCheckedDetail}>{t("Aracım")}</Text>
          <View style={styles.checkDetailBannerCard}>
            <View style={styles.leftBannerCheck}>
              <Image
                resizeMode="contain"
                style={{ width: "90%", height: "90%" }}
                source={require("../../../assets/images/system/togg.png")}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={styles.headerCheckedDetail}>Togg</Text>
                <Text style={styles.headerCheckedDetail}>Model TX10</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("pages/sarjFile/myCarsPage")}
              >
                <Text style={styles.orangeChargeCompText}>{t("Değiştir")}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.checkDetailOrangePaage}>{t("Açıklama")}</Text>
          <View
            style={[styles.checkDetailBannerCard, { flexDirection: "column" }]}
          >
            <TextInput
              placeholder="Açıklama Yazınız"
              style={[
                styles.inputRegisters_area,
                { padding: 0, paddingBottom: 10 },
              ]}
              multiline
              placeholderTextColor={"gray"}
              value="Bu istasyonda şarj ederken bekleme dinlenme alanları çok iyi.  Ortalama 1 saat boyunca hem eğlendik hemde aracımızı şarj ettik."
            />
            <TextInput
              placeholder="Açıklama Yazınız"
              style={[styles.inputRegisters, { padding: 0 }]}
              placeholderTextColor={"gray"}
              value="100"
            />
            {slug != "Şarj Ediyorum" ? (
              <>
                <SelectComp holder={"Bekliyorum"} label={"Bekliyorum"}>
                  <Select.Item label="1 Saat" value="1 Saat" />
                </SelectComp>
              </>
            ) : null}
          </View>
          <View
            style={{
              width: "100%",
              minHeight: height * 0.3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={[
                styles.centerImagesAdd_checkedPage,
                { backgroundColor: "#fff" },
              ]}
            >
              <AntDesign name="camerao" size={24} color="gray" />
              <Text
                style={{ fontSize: 11, color: "gray", textAlign: "center" }}
              >
                {t("Fotoğraf Yükle")}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 15 }}>
        <TouchableOpacity style={styles.purpleButton}>
          <Text style={styles.purpleButton_text}>{t("Gönder")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckDetail;
