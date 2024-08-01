import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { AntDesign } from "@expo/vector-icons";

import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const AllCreditCard = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const navigation = useNavigation();
  const [sawState, setSawState] = useState(1);
  const data = [
    { id: 1, name: "Yakup Yilmaz", cardNumber: "34** **** **** **34" },
    { id: 2, name: "Finans Bank", cardNumber: "34** **** **** **34" },
  ];
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={[
          styles.favoriPage_outher,
          { alignItems: "center", padding: 15 },
        ]}
        onPress={() => setSawState(item.id)}
      >
        <View style={{ gap: 5, flex: 1 }}>
          <Text style={styles.activeLangText}>{item.name}</Text>
          <Text
            style={[styles.activeLangText, { fontWeight: "500", fontSize: 18 }]}
          >
            {item.cardNumber}
          </Text>
        </View>
        {sawState == item.id ? (
          <>
            <AntDesign name="checkcircleo" size={24} color="#EC6047" />
          </>
        ) : null}
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
      <Menu header={t("Kredi Kartlarım")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <KeyboardAvoidingView
          style={{ width: "100%", flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <FlatList
            contentContainerStyle={{ width: "100%", gap: 15 }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.purpleButton}
          onPress={() => navigation.navigate("pages/profilFile/addCreitCard")}
        >
          <Text style={styles.purpleButton_text}>{t("Kart Ekle")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllCreditCard;
