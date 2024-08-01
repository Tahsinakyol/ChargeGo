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
import { FontAwesome6 } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import { LinearGradient } from "expo-linear-gradient";
import useThemeColors from "../../../assets/css/useThemeColors";

const MapPage_main = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const markers = [
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      image: require("../../../assets/images/system/togg.png"),
      title: "Marker 1",
      description: "Description for Marker 1",
    },
    {
      coordinate: {
        latitude: 37.78825,
        longitude: -122.4324,
      },
      image: require("../../../assets/images/system/togg.png"),
      title: "Marker 2",
      description: "Description for Marker 2",
    },
  ];

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <StatusBar style="light" />
      <MapView
        style={{ width: "100%", flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Image
              source={marker.image}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </Marker>
        ))}
      </MapView>
      <View
        style={{
          width: "100%",
          padding: 15,
          position: "absolute",
          bottom: insets.bottom + 15,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.purpleButton}>
            <Text style={styles.purpleButton_text}>Başla</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <LinearGradient
            colors={["#6ad990", "#5ac178"]}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome6 name="location-crosshairs" size={20} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MapPage_main;
