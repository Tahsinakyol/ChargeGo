import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
const { height, width } = Dimensions.get("window");
import { useTranslation } from "react-i18next";
import useThemeColors from "../../assets/css/useThemeColors";

const slides = [
  {
    id: "1",
    title: "Güçlü İşbirlikleri",
    description:
      "Türkiye’deki tüm elektrikli şarj istasyonları ile işbirliği yaparak, ihtiyacınız her zaman ve her yerde eşit imkana sunuyoruz.",
    image: require("../../assets/images/slider/Objects.png"),
  },
  {
    id: "2",
    title: "Kolay ve Hızlı Şarj",
    description:
      "Gelişmiş mobil uygulamamız sayesinde en yakın şarj istasyonunu bulabilir ve dakikalar içinde aracınızı şarj edebilirsiniz.",
    image: require("../../assets/images/slider/Objects.png"),
  },
  {
    id: "3",
    title: "Ekonomik Avantajlar",
    description:
      "Üyelerimize özel indirimler ve kampanyalar, etkinlikler ve azalan kullanım maliyetleriyle tasarruf edin.",
    image: require("../../assets/images/slider/Objects.png"),
  },
  {
    id: "4",
    title: "Çevre Dostu Çözümler",
    description:
      "Sürdürülebilir ve yeşil enerji kaynaklarına erişim sağlayarak, çevreyi korumanıza yardımcı oluyoruz.",
    image: require("../../assets/images/slider/Objects.png"),
  },
];

const IntroPage = () => {
  const colors = useThemeColors();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const { t } = useTranslation();

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.navigate("pages/loginFile/loginPage");
    }
  };

  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 15,
          paddingBottom: insets.bottom + 15,
          backgroundColor: colors.color_bge,
        },
      ]}
    >
      <StatusBar style="dark" />
      <FlatList
        data={slides}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <View style={{ width: "100%", padding: 15 }}>
              <Text style={[styles.title, { color: colors.color_black }]}>
                {item.title}
              </Text>
              <Text style={[styles.description, { color: colors.color_black }]}>
                {item.description}
              </Text>
            </View>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
      <View style={styles.footer}>
        <View style={styles.pagination}>
          {slides.map((_, index) => {
            const inputRange = [
              (index - 1) * 300,
              index * 300,
              (index + 1) * 300,
            ];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: "clamp",
            });
            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.3, 1, 0.3],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                style={[
                  styles.dot,
                  {
                    width: dotWidth,
                    opacity,
                    backgroundColor: colors.color_sliderPurple,
                  },
                ]}
                key={index.toString()}
              />
            );
          })}
        </View>
        <View style={{ width: "100%", padding: 15 }}>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.color_sliderPurple },
            ]}
            onPress={scrollTo}
          >
            <Text style={styles.buttonText}>
              {currentIndex === slides.length - 1 ? t("Devam") : t("İleri")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("pages/loginFile/loginPage")}
          >
            <Text
              style={[
                styles.skipButtonText,
                { color: colors.color_sliderPurple },
              ]}
            >
              {t("Atla")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: width * 1,
  },
  slide: {
    width: width * 1,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  image: {
    width: width * 1,
    height: "50%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    marginTop: 5,
  },
  footer: {
    width: "100%",
    alignItems: "center",
  },
  pagination: {
    flexDirection: "row",
    height: 10,
    marginTop: 15,
  },
  dot: {
    height: 7,
    width: 20,
    borderRadius: 5,
    marginHorizontal: 8,
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  skipButton: {
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default IntroPage;
