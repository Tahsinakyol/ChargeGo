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
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const WalletCreitCard = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false);
  const [clicked, setClicked] = useState(1);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    { id: 1, bankName: "Akbank", cardnumber: "34** **** **** **34" },
    { id: 2, bankName: "Akbank", cardnumber: "34** **** **** **34" },
    { id: 3, bankName: "Akbank", cardnumber: "34** **** **** **34" },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.white_walletLine}
        onPress={() => setClicked(item.id)}
      >
        <View
          style={{
            width: "100%",
            height: 40,
            gap: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, gap: 5 }}>
            <Text style={styles.swichSettingDetailText}>{item.bankName}</Text>
            <Text
              style={[styles.swichSettingDetailText, { fontWeight: "700" }]}
            >
              {item.cardnumber}
            </Text>
          </View>
          {clicked == item.id ? (
            <>
              <View
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={24}
                  color="#EC6047"
                />
              </View>
            </>
          ) : null}
        </View>
      </TouchableOpacity>
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
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ width: "100%", gap: 10 }}
              showsVerticalScrollIndicator={false}
            />
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

export default WalletCreitCard;
