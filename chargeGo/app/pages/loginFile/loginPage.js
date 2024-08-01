import { View, Dimensions, Image, TouchableOpacity, Text } from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import useThemeColors from "../../../assets/css/useThemeColors";
const loginPage = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={[
        styles.loginMainLine,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar style="light" />
      <View style={styles.login_inner}>
        <View
          style={{
            width: "100%",
            flex: 1,
            gap: 15,
            padding: 15,
            paddingTop: 45,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.logoLoginPage}
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            width: "100%",
            flex: 3,
            gap: 15,
            padding: 15,
            paddingTop: 45,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity style={styles.button_socials}>
            <View style={styles.iconButtonSocial}>
              <Image
                style={styles.iconSocials_button}
                resizeMode="contain"
                source={require("../../../assets/images/socialIcon/google.png")}
              />
            </View>
            <View style={styles.innerTextSocials}>
              <Text style={styles.textLoginButtons}>Google ile Giriş</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_socials}>
            <View style={styles.iconButtonSocial}>
              <Image
                style={styles.iconSocials_button}
                resizeMode="contain"
                source={require("../../../assets/images/socialIcon/logos_facebook.png")}
              />
            </View>
            <View style={styles.innerTextSocials}>
              <Text style={styles.textLoginButtons}>Facebook ile Giriş</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_socials}>
            <View style={styles.iconButtonSocial}>
              <Image
                style={styles.iconSocials_button}
                resizeMode="contain"
                source={require("../../../assets/images/socialIcon/devicon_apple.png")}
              />
            </View>
            <View style={styles.innerTextSocials}>
              <Text style={styles.textLoginButtons}>Apple ile ile Giriş</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.orCenterTextPage}>
            <View style={styles.ortLeftRight}></View>
            <Text style={styles.orTextCenter}>veya</Text>
            <View style={styles.ortLeftRight}></View>
          </View>
          <TouchableOpacity
            style={styles.orangeLoginButton}
            onPress={() => navigation.navigate("pages/loginFile/mainLoginPage")}
          >
            <Text style={styles.orangeButtonText}>Üye Girişi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.buttonLastEnd_login,
              { justifyContent: "space-between" },
            ]}
            onPress={() => navigation.navigate("pages/loginFile/registerPage")}
          >
            <Text style={styles.whiteButtonEndPage}>Hesabınız Yokmu ? </Text>
            <Text style={[styles.whiteButtonEndPage, { color: "#1F93FF" }]}>
              Hesap Oluştur
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 15,
            gap: 15,
            padding: 15,
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={styles.transparentButton}
            onPress={() => navigation.navigate("pages/home/homePage")}
          >
            <Text style={styles.whiteButtonEndPage}>
              Misafir Olarak Devam Et
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default loginPage;
