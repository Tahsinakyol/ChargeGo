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
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const AddMoneySecond = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
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
      <Menu header={t("Para Yükleme")} menuType="filter" />
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
              gap: 10,
            }}
          >
            <View style={styles.orangeAlertBottom}>
              <AntDesign name="warning" size={24} color="#EC6047" />
              <View style={{ flex: 1 }}>
                <Text style={styles.seeBtwLeftText}>
                  Yatırılan tutar bir kaç dakika sonra cüzdanınıza
                  yansıyacaktır. ödme ile ilgil yaşanan herhangi bir problemde
                  destek bölümünden bize ulaşabilirsiniz.
                </Text>
              </View>
            </View>
            <View style={styles.white_walletLine}>
              <TextInput
                style={styles.inputWalletIntro}
                placeholder={t("Tutar Giriniz")}
                keyboardType="numeric"
                placeholderTextColor={"gray"}
              />
            </View>
            <TouchableOpacity style={styles.white_walletLine}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../../assets/images/methot/creitCardImage.png")}
                  resizeMode="contain"
                />
                <Text style={styles.activeLangText}>{t("Kredi Kartı")}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.white_walletLine}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../../assets/images/methot/appImage.png")}
                  resizeMode="contain"
                />
                <Text style={styles.activeLangText}>Apple PAY</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.white_walletLine}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <Image
                  style={{ width: 35, height: 35 }}
                  source={require("../../../assets/images/methot/googleImage.png")}
                  resizeMode="contain"
                />
                <Text style={styles.activeLangText}>Apple PAY</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => setOpenModal(true)}
        >
          <Text style={styles.purpleButton_text}>{t("Öde")}</Text>
        </TouchableOpacity>
      </View>
      <ModalGenerate
        openModal={openModal}
        setOpenModal={setOpenModal}
        modalHeader={t("Ödemeniz Onaylanmıştır")}
        modalDetail="Sonu **6564 kartınızdan . 1500 TL çekilmiştir Bakiyeniz bir kaç dakika sonra cüzdanınıza yansıyacaktır. "
        buttonText={t("Tamam")}
        click={() => {
          setOpenModal(false),
            navigation.navigate("pages/profilFile/profilWallet");
        }}
      />
    </View>
  );
};

export default AddMoneySecond;
