import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import createStyles from "../../../assets/css/style";
import GobackMenu from "../Components/goBackMenu";
import {
  View,
  Dimensions,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import SuccessModal from "../Components/successModal";
import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SawCard = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [successModal, setSuccessModal] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const clickledHome = () => {
    setSuccessModal(true);
    setTimeout(() => {
      setSuccessModal(false);
      navigation.navigate("pages/home/homePage");
    }, 2000);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: insets.bottom + 15,
        paddingTop: insets.top + 15,
        paddingHorizontal: 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <GobackMenu header={t("Araç Ekle")} />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            width: "100%",
            paddingVertical: 30,
            alignItems: "center",
            gap: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Image
            resizeMode="contain"
            style={styles.carCreateSeeImage}
            source={require("../../../assets/images/system/togg.png")}
          />
          <View style={styles.generateBorderCarAdded}>
            <View style={styles.bottomTextGenerateAddCar}>
              <Text style={styles.addCarDetailText}>Toog</Text>
            </View>
            <View style={styles.bottomTextGenerateAddCar}>
              <Text style={styles.addCarDetailText}>Tx 10</Text>
            </View>
            <View style={styles.bottomTextGenerateAddCar}>
              <Text style={styles.addCarDetailText}>75 kW</Text>
            </View>
            <View style={styles.bottomTextGenerateAddCar}>
              <Text style={styles.addCarDetailText}>34 FRT 34</Text>
            </View>
            <View
              style={[
                styles.bottomTextGenerateAddCar,
                { borderBottomWidth: 0 },
              ]}
            >
              <Text style={styles.addCarDetailText}>Şirket Aracı</Text>
            </View>
          </View>
          <View style={{ width: "100%" }}>
            {GeneralResponse.globalCar == "register" ? (
              <>
                <TouchableOpacity
                  style={styles.addCar_button_orange}
                  onPress={clickledHome}
                >
                  <Text style={styles.buttonAddCArdGenText}>
                    {t("Araç Ekle")}
                  </Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.addCar_button_Purple}>
                  <Text style={styles.buttonAddCArdGenText}>{t("Kaydet")}</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </ScrollView>
      </View>
      <SuccessModal
        setOpenModal={setSuccessModal}
        openModal={successModal}
        modalHeader={t("Kayıt Başarılı")}
        modalDetail={t("AnaSayfaya Yönlendiriliyor")}
      />
    </View>
  );
};

export default SawCard;
