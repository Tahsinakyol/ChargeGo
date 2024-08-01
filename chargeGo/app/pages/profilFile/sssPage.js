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
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SssPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const [menu, setMenu] = useState(1);
  const data = [
    { id: 1, name: "Hangi ödeme yöntemleri kabul ediliyor?" },
    { id: 2, name: "Yakınlardaki şarj istasyonlarını nasıl bulabilirim?" },
    { id: 3, name: "Yakınlardaki şarj istasyonlarını nasıl bulabilirim?" },
  ];
  const renderItem = ({ item }) => {
    return (
      <View style={styles.sssPage_outher}>
        <TouchableOpacity
          onPress={() => setMenu(item.id)}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text style={styles.textWalletButton}>{item.name}</Text>
          <MaterialIcons
            name={
              menu != item.id ? "keyboard-arrow-right" : "keyboard-arrow-down"
            }
            size={24}
            color="#EC6047"
          />
        </TouchableOpacity>
        {menu == item.id ? (
          <>
            <Text style={[styles.textWalletButton, { fontSize: 12 }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              viverra nisl et ex pretium, ut consequat eros luctus. Donec
              venenatis auctor risus, in posuere tortor aliquam a.
            </Text>
          </>
        ) : null}
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
      <Menu header={t("Sık Sorulan Sorular")} />
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

export default SssPage;
