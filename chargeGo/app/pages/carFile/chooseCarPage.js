import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Image,
  FlatList,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import GobackMenu from "../Components/goBackMenu";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import useThemeColors from "../../../assets/css/useThemeColors";
const ChooseCarPage = () => {
  const { banner, searchHolder = "Marka Ara", sender } = useLocalSearchParams();
  const { searchSaw = "close" } = useLocalSearchParams();
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const dataBrand = [
    { id: 1, name: "Audi" },
    { id: 2, name: "Bmv" },
  ];
  const dataModel = [
    { id: 1, name: "Roadster" },
    { id: 2, name: "Model S" },
    { id: 3, name: "Model X" },
    { id: 4, name: "Model Y" },
    { id: 5, name: "Model Z" },
  ];
  const dataSerial = [
    { id: 1, name: "40" },
    { id: 2, name: "40 w / Supercharger" },
    { id: 3, name: "60" },
    { id: 4, name: "60 w / Supercharger" },
  ];
  const renderItem = ({ item }) => {
    const goesPage = () => {
      if (sender == "brand") {
        navigation.navigate("pages/carFile/createMain", { brand: item.name });
      } else if (sender == "model") {
        navigation.navigate("pages/carFile/createMain", { model: item.name });
      } else {
        navigation.navigate("pages/carFile/createMain", { serial: item.name });
      }
    };
    return (
      <TouchableOpacity style={styles.renderChooser} onPress={goesPage}>
        <Text style={styles.textAddCarRender}>{item.name}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="gray" />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        paddingBottom: insets.bottom + 15,
        paddingTop: insets.top + 15,
        paddingHorizontal: 15,
        backgroundColor: colors.color_bge,
      }}
    >
      <GobackMenu header={banner} />
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            contentContainerStyle={{
              width: "100%",
              paddingVertical: 20,
              gap: 15,
            }}
            showsVerticalScrollIndicator={false}
          >
            {searchSaw == "open" ? (
              <>
                <View style={styles.searchAddCard_outher}>
                  <TouchableOpacity style={styles.iconSearchhed}>
                    <Feather
                      name="search"
                      size={24}
                      color={colors.color_sliderPurple}
                    />
                  </TouchableOpacity>
                  <TextInput
                    placeholderTextColor={"gray"}
                    placeholder={searchHolder}
                    style={styles.inputSearchCardPage}
                  />
                </View>
              </>
            ) : null}
            <FlatList
              showsVerticalScrollIndicator={false}
              data={
                sender == "brand"
                  ? dataBrand
                  : sender == "model"
                  ? dataModel
                  : dataSerial
              }
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ width: "100%", gap: 10 }}
            />
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChooseCarPage;
