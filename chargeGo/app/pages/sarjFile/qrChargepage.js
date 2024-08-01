import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import createStyles from "../../../assets/css/style";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const qrChargepage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const imageSources = [
    require("../../../assets/images/system/brand/brand1.png"),
    require("../../../assets/images/system/brand/brand2.png"),
    require("../../../assets/images/system/brand/brand3.png"),
  ];
  const imageSources_second = [
    require("../../../assets/images/system/brand/b1.png"),
    require("../../../assets/images/system/brand/b2.png"),
    require("../../../assets/images/system/brand/b3.png"),
    require("../../../assets/images/system/brand/b4.png"),
    require("../../../assets/images/system/brand/b5.png"),
  ];
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: insets.top + 15,
        paddingBottom: insets.bottom + 15,
        paddingHorizontal: 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
            gap: 15,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.qrPageHeader}>
            {t("Lütfen Karekod Okutunuz")}
          </Text>
          <TouchableOpacity
            style={styles.qr_outher}
            onPress={() => navigation.navigate("pages/sarjFile/socketPage")}
          >
            <Image
              style={{ width: "90%", height: "90%" }}
              resizeMode="contain"
              source={require("../../../assets/images/system/qrImage.png")}
            />
          </TouchableOpacity>
          <Text style={styles.centerqrTextBottom}>
            {t("Anlaşmalı Olduğumuz Markalar")}
          </Text>
          <View style={styles.qrBrandImages_outher}>
            {imageSources.map((source, index) => (
              <Image
                key={index}
                style={styles.imagesBrand}
                resizeMode="contain"
                source={source}
              />
            ))}
          </View>
          <Text style={styles.centerqrTextBottom}>
            {t("Yakında Bu İstasyonlarda Hesabımızda")}
          </Text>
          <View style={styles.qrBrandImages_outher}>
            {imageSources_second.map((source_second, index) => (
              <Image
                key={index}
                style={styles.imagesBrand}
                resizeMode="contain"
                source={source_second}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default qrChargepage;
