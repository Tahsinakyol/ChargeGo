import { View, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import createStyles from "../../../assets/css/style";
import GobackMenu from "../Components/goBackMenu";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { SetGlobalCharge } from "../../redux/action";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const sarjMain = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <GobackMenu header={t("İşlemler")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          padding: 15,
          alignItems: "center",
          gap: 10,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            width: "100%",
            flex: 1,
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.imagesSharge}
            source={require("../../../assets/images/system/shargeImages/sarj1.png")}
          />
          <Text style={styles.shargeText_Bottom}>
            {t("Soketinizin aracınıza takılı olduğundan emin olun")}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            width: "100%",
            flex: 1,
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.imagesSharge}
            source={require("../../../assets/images/system/shargeImages/sarj2.png")}
          />
          <Text style={styles.shargeText_Bottom}>
            {t("Ödeme Yöntemini seçin")}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            width: "100%",
            flex: 1,
          }}
        >
          <Image
            resizeMode="contain"
            style={styles.imagesSharge}
            source={require("../../../assets/images/system/shargeImages/sarj3.png")}
          />
          <Text style={styles.shargeText_Bottom}>
            {t("Qr ile şarja başlayabilirsiniz")}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            height: 100,
          }}
        >
          <View style={styles.checkedChargeCenter}>
            {checked == true ? (
              <>
                <AntDesign name="check" size={18} color="#3BC908" />
              </>
            ) : null}
          </View>
          <Text style={styles.textOkaysChecked_charge}>
            {t("Anladım bir daha gösterme")}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => {
            navigation.navigate("pages/sarjFile/myCarsPage"),
              dispatch(SetGlobalCharge("start"));
          }}
        >
          <Text style={styles.purpleButton_text}>{t("Sarj Baslat")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default sarjMain;
