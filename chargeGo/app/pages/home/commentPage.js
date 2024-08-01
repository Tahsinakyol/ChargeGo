import {
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  FlatList,
  Text,
  Image,
  Animated,
  Modal,
  ScrollView,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Select } from "native-base";
import Menu from "../Components/menu";
import SelectComp from "../Components/select";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const CommentPage = () => {
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
        paddingBottom: insets.bottom + 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Yorum Yazınız")} />
      <View style={{ width: "100%", flex: 1 }}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{ gap: 10, padding: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            multiline
            style={styles.inputMessagePage}
            placeholder={t("Mesaj Yazınız")}
            placeholderTextColor={"gray"}
          />
          <View style={styles.BannerCheckPage_outher}>
            <TouchableOpacity
              style={styles.centerImagesAdd_checkedPage}
              onPress={() => navigation.navigate("pages/home/cameraPage")}
            >
              <AntDesign name="camerao" size={32} color="gray" />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={{ width: "100%", paddingHorizontal: 15 }}>
        <TouchableOpacity style={styles.purpleButton}>
          <Text style={styles.purpleButton_text}>{t("Gönder")}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CommentPage;
