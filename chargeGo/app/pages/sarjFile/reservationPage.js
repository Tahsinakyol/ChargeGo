import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import createStyles from "../../../assets/css/style";
import Menu from "../Components/menu";
import { Calendar } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import { ScrollView } from "native-base";
import { useState } from "react";
import SelectComp from "../Components/select";
import { Select } from "native-base";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const RezervationPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  LocaleConfig.locales["tr"] = {
    monthNames: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    monthNamesShort: [
      "Oca",
      "Şub",
      "Mar",
      "Nis",
      "May",
      "Haz",
      "Tem",
      "Ağu",
      "Eyl",
      "Eki",
      "Kas",
      "Ara",
    ],
    dayNames: [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ],
    dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
    today: "Bugün",
  };

  LocaleConfig.defaultLocale = "tr";
  const [selectedDate, setSelectedDate] = useState("");

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <Menu header={t("Rezervasyon")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingTop: 15,
          paddingBottom: insets.bottom + 15,
          paddingHorizontal: 15,
          gap: 15,
        }}
      >
        <StatusBar style="light" />

        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingVertical: 15, gap: 15 }}
          >
            <View
              style={{
                width: "100%",
              }}
            >
              <Calendar
                style={{
                  borderRadius: 10,
                  backgroundColor: colors.color_white,
                }}
                onDayPress={onDayPress}
                markedDates={{
                  [selectedDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: colors.color_sliderPurple,
                  },
                }}
                theme={{
                  backgroundColor: colors.color_white,
                  calendarBackground: colors.color_white,
                  selectedDayBackgroundColor: colors.color_sliderPurple,
                  selectedDayTextColor: colors.color_white,
                  todayTextColor: colors.color_sliderPurple,
                  arrowColor: colors.color_sliderPurple,
                  borderRadius: 10,
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                backgroundColor: colors.color_white,
                borderRadius: 10,
                padding: 10,
              }}
            >
              <SelectComp label={t("Saat Seçiniz")} holder={t("Saat Seçiniz")}>
                <Select.Item label="10.00 AM" value="10.00 AM" />
                <Select.Item label="11.00 AM" value="11.00 AM" />
              </SelectComp>
            </View>
          </ScrollView>
        </View>
        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() =>
            navigation.navigate("pages/sarjFile/seeRezervationPage")
          }
        >
          <Text style={styles.purpleButton_text}>{t("İleri")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RezervationPage;
