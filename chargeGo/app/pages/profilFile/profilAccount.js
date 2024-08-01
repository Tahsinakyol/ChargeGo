import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import Menu from "../Components/menu";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import SelectComp from "../Components/select";
import { Select } from "native-base";
import RegisterContent from "../Components/registerContent";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ProfilAccount = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const [activeMenu, setActiveMenu] = useState(1);
  const [swich, setSwich] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <Menu header={t("Hesabım")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          gap: 10,
        }}
      >
        <StatusBar style="light" />

        <View style={styles.accountBanner}>
          <TouchableOpacity
            onPress={() => setActiveMenu(1)}
            style={
              activeMenu == 1
                ? styles.activeAccount
                : [styles.activeAccount, { opacity: 0.5 }]
            }
          >
            {activeMenu == 1 ? (
              <>
                <AntDesign name="check" size={22} color="#EC6047" />
              </>
            ) : null}
            <Text style={[styles.profilNameCenter, { fontSize: 13 }]}>
              {t("Bireysel")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveMenu(2)}
            style={
              activeMenu == 2
                ? styles.activeAccount
                : [styles.activeAccount, { opacity: 0.5 }]
            }
          >
            {activeMenu == 2 ? (
              <>
                <AntDesign name="check" size={22} color="#EC6047" />
              </>
            ) : null}
            <Text style={[styles.profilNameCenter, { fontSize: 13 }]}>
              {t("Kurumsal")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
          >
            <View
              style={[
                styles.accountBanner,
                { flexDirection: "column", gap: 10 },
              ]}
            >
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>{t("Ad")}</Text>
                <TextInput
                  placeholder={t("Adınızı Yazınız")}
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                  value="Fırat"
                />
              </View>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>{t("Soyad")}</Text>
                <TextInput
                  placeholder={t("Soyadınızı Yazınız")}
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                  value="Oruç"
                />
              </View>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>Email</Text>
                <TextInput
                  placeholder="Eposta adresinizi Yazınız"
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                  value="fıratoruç@gmail.com"
                  keyboardType="email"
                />
              </View>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>
                  {t("Doğum Tarihi")}
                </Text>
                <TextInput
                  placeholder={t("Doğum Tarihinizi Yazınız")}
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                  value="19.02.1995"
                />
              </View>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>
                  {t("T.C Kimlik Numarası")}
                </Text>
                <TextInput
                  placeholder={t("T.C Kimlik Numaranızı Yazınız")}
                  style={styles.inputRegisters}
                  placeholderTextColor={"gray"}
                  value="11223344557"
                  keyboardType="numeric"
                  maxLength={11}
                />
              </View>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>
                  {t("Telefon Numarası")}
                </Text>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: colors.color_lightgray,
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <TextInput
                      placeholder={t("Telefon Numaranızı Yazınız")}
                      style={[styles.inputRegisters, { borderBottomWidth: 0 }]}
                      placeholderTextColor={"gray"}
                      value="0533 333 33 33"
                      keyboardType="numeric"
                    />
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("pages/profilFile/changePhoneNumber")
                    }
                  >
                    <Text style={styles.accountChangePhoneNumber}>
                      {t("Değiştir")}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {activeMenu == 2 ? (
              <>
                <View
                  style={[
                    styles.accountBanner,
                    { flexDirection: "column", gap: 10 },
                  ]}
                >
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>
                      {t("Firma Unvanı")}
                    </Text>
                    <TextInput
                      placeholder={t("Firma Unvanını Yazınız")}
                      style={styles.inputRegisters}
                      placeholderTextColor={"gray"}
                      value="Applife Ltd. Şti."
                    />
                  </View>
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>{t("Telefon")}</Text>
                    <TextInput
                      placeholder={t("Firma Telefon Yazınız")}
                      style={styles.inputRegisters}
                      placeholderTextColor={"gray"}
                      value="0212 222 22 22"
                    />
                  </View>
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>
                      {t("Vergi No")}
                    </Text>
                    <TextInput
                      placeholder={t("Vergi Numarasını Yazınız")}
                      style={styles.inputRegisters}
                      placeholderTextColor={"gray"}
                      value="0343434"
                      keyboardType="numeric"
                    />
                  </View>
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>
                      {t("Vergi Dairesi")}
                    </Text>
                    <TextInput
                      placeholder={t("Vergi Dairesini Yazınız")}
                      style={styles.inputRegisters}
                      placeholderTextColor={"gray"}
                      value="Bakırköy"
                    />
                  </View>
                </View>
              </>
            ) : null}
            <View
              style={[
                styles.accountBanner,
                { flexDirection: "column", gap: 10 },
              ]}
            >
              <SelectComp holder={t("Ülke Seçiniz")} label={t("Ülke")}>
                <Select.Item label="Türkiye" value="Türkiye" />
              </SelectComp>
              <SelectComp holder={"Şehir Seçiniz"} label={t("Şehir")}>
                <Select.Item label="Aksaray" value="Aksaray" />
              </SelectComp>
              <SelectComp holder={"İlçe Seçiniz"} label={t("İlçe")}>
                <Select.Item label="Merkez" value="Merkez" />
              </SelectComp>
              <View style={styles.inputAndHeadersTops}>
                <Text style={styles.inputRegisterTops}>{t("Adres")}</Text>
                <TextInput
                  multiline
                  placeholder={t("Adres Yazınız")}
                  style={styles.inputRegisters_area}
                  placeholderTextColor={"gray"}
                />
              </View>
            </View>
            {activeMenu == 2 ? (
              <>
                <View style={[styles.accountBanner, { gap: 5 }]}>
                  <Text style={styles.inputRegisterTops}>
                    {t("Fatura Adresi")}
                  </Text>
                  <TouchableOpacity
                    style={
                      swich == false
                        ? styles.orangeSwichAccountPage
                        : [
                            styles.orangeSwichAccountPage,
                            {
                              justifyContent: "flex-end",
                              backgroundColor: "#EC6047",
                            },
                          ]
                    }
                    onPress={() => setSwich(!swich)}
                  >
                    <View style={styles.orangeSwichCircle}></View>
                  </TouchableOpacity>
                </View>
              </>
            ) : null}
            {swich == true ? (
              <>
                <View
                  style={[
                    styles.accountBanner,
                    { flexDirection: "column", gap: 10 },
                  ]}
                >
                  <SelectComp holder={"Ülke Seçiniz"} label={t("Ülke")}>
                    <Select.Item label="Türkiye" value="Türkiye" />
                  </SelectComp>
                  <SelectComp holder={"Şehir Seçiniz"} label={t("Şehir")}>
                    <Select.Item label="Aksaray" value="Aksaray" />
                  </SelectComp>
                  <SelectComp holder={"İlçe Seçiniz"} label={t("İlçe")}>
                    <Select.Item label="Merkez" value="Merkez" />
                  </SelectComp>
                  <View style={styles.inputAndHeadersTops}>
                    <Text style={styles.inputRegisterTops}>{t("Adres")}</Text>
                    <TextInput
                      multiline
                      placeholder={t("Adres Yazınız")}
                      style={styles.inputRegisters_area}
                      placeholderTextColor={"gray"}
                    />
                  </View>
                </View>
              </>
            ) : null}
            <View
              style={{
                width: "100%",
                padding: 15,
                gap: 15,
                backgroundColor: colors.color_white,
                borderRadius: 10,
              }}
            >
              <RegisterContent
                explain={
                  "Kampanya veya duyurulardan SMS ile haberdar olmak istiyorum."
                }
              />
              <RegisterContent
                explain={
                  "Kampanya ve duyurulardan . e-mail ile haberdar olmak istiyorum."
                }
              />
            </View>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() => navigation.navigate("pages/profilFile/adressPage")}
            >
              <Text style={styles.purpleButton_text}>
                {activeMenu == 1 ? t("Güncelle") : t("Devam")}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfilAccount;
