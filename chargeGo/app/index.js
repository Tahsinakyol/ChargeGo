import { Image, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "expo-router";
import createStyles from "../assets/css/style";
import useThemeColors from "../assets/css/useThemeColors";
import * as SecureStore from "expo-secure-store";
import { useEffect } from "react";
import i18next from "i18next";

export default function Home() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  const styles = createStyles(colors);

  useEffect(() => {
    const setLanuage = async () => {
      try {
        const selectedLanguage = await SecureStore.getItemAsync("lang");
        if (selectedLanguage) {
          i18next.changeLanguage(selectedLanguage);
        }
      } catch (err) {
        console.log(err);
      }
    };

    setLanuage();
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="dark" />
      <TouchableOpacity
        onPress={() => navigation.navigate("pages/introPage")}
        style={{ width: "100%", alignItems: "center" }}
      >
        <Image
          style={styles.logoImage}
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
