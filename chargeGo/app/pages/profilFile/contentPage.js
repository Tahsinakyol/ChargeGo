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
import { useLocalSearchParams, useNavigation } from "expo-router";
import Menu from "../Components/menu";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardCharge from "../Components/cardCharge";
import { Entypo } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
const ProfilBill = () => {
  const { height, width } = Dimensions.get("window");
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { slug } = useLocalSearchParams();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={slug} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ width: "100%", gap: 10 }}
          >
            <Text style={styles.textWalletButton}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
              porta urna, ac scelerisque dolor. Praesent porttitor risus sed
              orci laoreet rutrum. Fusce fringilla, lectus eget porta malesuada,
              orci enim aliquam velit, eu viverra enim sem nec odio. Etiam et
              diam posuere urna fringilla placerat. Duis fermentum sapien
              tellus, vel laoreet odio auctor in. Maecenas eu condimentum lorem,
              in lobortis diam. Quisque elementum, nulla non pretium accumsan,
              ligula quam eleifend nisi, eget interdum diam ligula vel libero.
              Nullam ante purus, tempus sed imperdiet vel, eleifend sit amet
              velit. Sed eu sapien in lacus sollicitudin consectetur quis eu
              libero. Curabitur mollis nec diam et lobortis. Suspendisse nec
              felis non sem laoreet egestas. Pellentesque id tortor non leo
              venenatis volutpat. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos. Curabitur
              venenatis a erat at auctor. Quisque iaculis eros pellentesque mi
              placerat volutpat. Nullam orci odio, egestas id pellentesque non,
              condimentum vel ligula.
            </Text>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default ProfilBill;
