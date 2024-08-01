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
import { Ionicons } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const NotificationPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const data = [
    { id: 1, name: "E-Şarj İstasyonlarına yeni lokasyonlar eklendi." },
    {
      id: 2,
      name: "Yeni kampanya: Şarj başına %10 indirim! Detaylar için tıkla.",
    },
    {
      id: 3,
      name: "En yakın istasyon dolmak üzere! Yerini ayırtmayı unutma.",
    },
    {
      id: 4,
      name: "Şarj işlemi tamamlandı. Güvenli sürüşler!",
    },
    {
      id: 5,
      name: "Yeni puan kazandınız! Harcamak için uygulamayı açın",
    },
    {
      id: 6,
      name: "Favori istasyonunda bakım çalışması var. Alternatif rotalar için tıklayın",
    },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.notificationMain_outher}>
        <Ionicons name="notifications-outline" size={20} color="#EC6047" />
        <View style={{ flex: 1 }}>
          <Text style={styles.textWalletButton}>{item.name}</Text>
        </View>
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
      <Menu header={t("Bildirim")} />
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
            contentContainerStyle={{ width: "100%", gap: 15 }}
          />
        </View>
      </View>
    </View>
  );
};

export default NotificationPage;
