import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import GobackMenu from "../Components/goBackMenu";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const CreateMain = () => {
  const { t } = useTranslation();
  const {
    brand = t("Marka Seçiniz"),
    model = t("Model Seçiniz"),
    serial = t("Seri Seçiniz"),
  } = useLocalSearchParams();
  const dispatch = useDispatch();
  const { GeneralResponse } = useSelector((state) => state);
  //   dispatch(SetGlobalCar("register"));
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);

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
      <GobackMenu header={t("Araç Ekle")} />
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              width: "100%",
              paddingVertical: 20,
              gap: 15,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View style={{ width: "100%", gap: 3 }}>
              <Text style={styles.textCreateCardSelect}>
                {t("Marka Seçiniz")}
              </Text>
              <TouchableOpacity
                style={styles.cardChooseSelectButton}
                onPress={() =>
                  navigation.navigate("pages/carFile/chooseCarPage", {
                    banner: t("Araç  Markasını Seçiniz"),
                    searchHolder: t("Marka Ara"),
                    searchSaw: "open",
                    sender: "brand",
                  })
                }
              >
                <Text style={styles.cardChooseSelectButtonText}>{brand}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", gap: 3 }}>
              <Text style={styles.textCreateCardSelect}>
                {t("Model Seçiniz")}
              </Text>
              <TouchableOpacity
                style={styles.cardChooseSelectButton}
                onPress={() =>
                  navigation.navigate("pages/carFile/chooseCarPage", {
                    banner: "Model",
                    searchHolder: "",
                    searchSaw: "close",
                    sender: "model",
                  })
                }
              >
                <Text style={styles.cardChooseSelectButtonText}>{model}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", gap: 3 }}>
              <Text style={styles.textCreateCardSelect}>
                {t("Seri Seçiniz")}
              </Text>
              <TouchableOpacity
                style={styles.cardChooseSelectButton}
                onPress={() =>
                  navigation.navigate("pages/carFile/chooseCarPage", {
                    banner: t("Güç"),
                    searchHolder: "",
                    searchSaw: "close",
                    sender: "serial",
                  })
                }
              >
                <Text style={styles.cardChooseSelectButtonText}>{serial}</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%", gap: 3 }}>
              <Text style={styles.textCreateCardSelect}>{t("Plaka")}</Text>
              <TextInput
                style={styles.registerInputCreateCard}
                placeholder={t("Plakanızı Yazınız")}
                placeholderTextColor={"gray"}
              />
            </View>
            <View style={{ width: "100%", gap: 3 }}>
              <Text style={styles.textCreateCardSelect}>{t("Araç İsmi")}</Text>
              <TextInput
                style={styles.registerInputCreateCard}
                placeholder={t("Araç İsmini Yazınız")}
                placeholderTextColor={"gray"}
              />
            </View>

            <View
              style={{
                width: "100%",
                gap: 15,
                alignItems: "center",
                paddingVertical: 15,
              }}
            >
              <View style={{ width: "100%" }}>
                <Text style={styles.addCardRegisterText}>
                  Aracınızı eklemeniz, şarj başlatmak istediğinizde tahmini süre
                  ve fiyat hesabı pyapılması açısından kolaylık sağlamaktadır.
                </Text>
              </View>
              <View style={{ width: "100%" }}>
                <Text style={styles.addCardRegisterText}>
                  Varsayılan Aracınızı değiştirmek istediğiniz aracın üstüne
                  basılı tutun.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {GeneralResponse.globalCar == "register" ? (
          <>
            <View
              style={{
                width: "100%",
                gap: 15,
                alignItems: "center",
                paddingVertical: 15,
                paddingBottom: 30,
              }}
            >
              <View style={{ width: "100%", flexDirection: "row", gap: 5 }}>
                <TouchableOpacity
                  style={styles.orangegeAddCarRegisterButton}
                  onPress={() =>
                    navigation.navigate("pages/loginFile/loginPage")
                  }
                >
                  <Text style={styles.orangegeAddCarRegisterButton_text}>
                    {t("Sonra Ekle")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate("pages/carFile/sawCard")}
                  style={[
                    styles.orangegeAddCarRegisterButton,
                    { backgroundColor: "#01B763" },
                  ]}
                >
                  <Text style={styles.orangegeAddCarRegisterButton_text}>
                    {t("Kaydet")}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                width: "100%",
                gap: 15,
                alignItems: "center",
                paddingVertical: 15,
                paddingBottom: 30,
              }}
            >
              <TouchableOpacity
                style={styles.purpleButton}
                onPress={() => navigation.navigate("pages/carFile/sawCard")}
              >
                <Text style={styles.purpleButton_text}>{t("Kaydet")}</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default CreateMain;
