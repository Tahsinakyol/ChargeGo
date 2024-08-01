import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import SwichSetting from "../Components/swichSetting";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SettingPageSwc = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
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
      <StatusBar style="light" />
      <Menu header={t("Ayarlar")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: insets.bottom + 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            style={{ width: "100%" }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 15, paddingVertical: 15 }}
          >
            <SwichSetting
              header={t("Bildirimlere İzin Ver")}
              detail="Kampanya ve duyurular ile ilgili SMS almak istiyorum"
            />
            <SwichSetting
              header={t("Lokasyonlar")}
              detail="Kampanya ve duyurular ile ilgili SMS almak istiyorum"
            />
            <SwichSetting
              header="SMS"
              detail="Kampanya ve duyurular ile ilgili SMS almak istiyorum"
            />
            <SwichSetting
              header={t("E-posta")}
              detail="Kampanya ve duyurular ile ilgili SMS almak istiyorum"
            />
            <SwichSetting
              header={t("Arama")}
              detail="Kampanya ve duyurular ile ilgili SMS almak istiyorum"
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default SettingPageSwc;
