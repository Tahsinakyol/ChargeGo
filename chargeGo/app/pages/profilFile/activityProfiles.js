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
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardCharge from "../Components/cardCharge";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const ActivityProfiles = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    { id: 1, name: t("Giriş"), number: 10 },
    { id: 2, name: t("Yol Planlama"), number: 1 },
    { id: 3, name: t("Şarj Metre"), number: 2 },
    { id: 4, name: t("Chenk-in"), number: 4 },
  ];
  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: colors.color_border,
        }}
      >
        <Text style={styles.activeLangText}>{item.name}</Text>
        <Text style={styles.activeLangText}>{item.number}</Text>
      </View>
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
      <Menu header={t("Aktiviteler")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              width: "100%",
              backgroundColor: colors.color_white,
              paddingHorizontal: 10,
              borderRadius: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default ActivityProfiles;
