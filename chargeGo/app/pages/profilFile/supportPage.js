import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { Octicons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SupportPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [{ id: 1, name: t("Sık Sorulan Sorular") }];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.notificationMain_outher}
        onPress={() => navigation.navigate("pages/profilFile/sssPage")}
      >
        <Octicons name="question" size={20} color="#EC6047" />
        <View style={{ flex: 1 }}>
          <Text style={styles.textWalletButton}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Yardım & Destek")} />
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
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ width: "100%", gap: 10 }}
          />
        </View>
      </View>
    </View>
  );
};

export default SupportPage;
