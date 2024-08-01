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
import { useNavigation } from "expo-router";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const CheckPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [heart, setHeart] = useState(false);
  const [star, setStar] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",

        paddingTop: insets.top,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <View style={styles.BannerCheckPage_outher}>
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
        <TouchableOpacity style={styles.centerImagesAdd_checkedPage}>
          <AntDesign name="camerao" size={32} color="gray" />
          <Text style={{ fontSize: 11, color: "gray", textAlign: "center" }}>
            {t("Fotoğraf Yükle")}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.checkContentDetail}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: insets.bottom + 15,
          }}
        >
          <Text style={styles.HeaderBottomCheckin}>Chek - in</Text>
          <TouchableOpacity
            style={styles.buttonCheckedDetail}
            onPress={() =>
              navigation.navigate("pages/home/checkDetail", {
                slug: t("Şarj Ediyorum"),
              })
            }
          >
            <Image
              style={{ width: 20, height: 25 }}
              resizeMode="contain"
              source={require("../../../assets/images/chargeIcons/charge1.png")}
            />
            <Text style={styles.boldChargeTextLine}>{t("Şarj Ediyorum")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCheckedDetail}
            onPress={() =>
              navigation.navigate("pages/home/checkDetail", {
                slug: t("Bekliyorum"),
              })
            }
          >
            <Image
              style={{ width: 20, height: 25 }}
              resizeMode="contain"
              source={require("../../../assets/images/chargeIcons/charge2.png")}
            />
            <Text style={styles.boldChargeTextLine}>{t("Bekliyorum")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCheckedDetail}
            onPress={() =>
              navigation.navigate("pages/home/checkDetail", {
                slug: t("Şarjım Full"),
              })
            }
          >
            <Image
              style={{ width: 20, height: 25 }}
              resizeMode="contain"
              source={require("../../../assets/images/chargeIcons/charge3.png")}
            />
            <Text style={styles.boldChargeTextLine}>{t("Şarjım Full")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCheckedDetail}
            onPress={() =>
              navigation.navigate("pages/home/checkDetail", {
                slug: t("Şarjım Olmuyor"),
              })
            }
          >
            <Image
              style={{ width: 20, height: 25 }}
              resizeMode="contain"
              source={require("../../../assets/images/chargeIcons/charge4.png")}
            />
            <Text style={styles.boldChargeTextLine}>{t("Şarjım Olmuyor")}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCheckedDetail}
            onPress={() =>
              navigation.navigate("pages/home/checkDetail", {
                slug: t("Mesaj Bırak"),
              })
            }
          >
            <Image
              style={{ width: 20, height: 25 }}
              resizeMode="contain"
              source={require("../../../assets/images/chargeIcons/charge5.png")}
            />
            <Text style={styles.boldChargeTextLine}>{t("Mesaj Bırak")}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default CheckPage;
