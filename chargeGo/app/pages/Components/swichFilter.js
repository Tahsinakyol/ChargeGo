import { View, TouchableOpacity, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import createStyles from "../../../assets/css/style";
import { useNavigation } from "expo-router";
import useThemeColors from "../../../assets/css/useThemeColors";

const SwichFilter = ({
  header,
  type = 1,
  img = require("../../../assets/images/system/cgIcon.png"),
}) => {
  const navigation = useNavigation();
  const [swiched, setSwiched] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15,
      }}
    >
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        {type == 2 ? (
          <>
            <Image
              resizeMode="contain"
              style={{ width: 30, height: 30 }}
              source={img}
            />
          </>
        ) : null}
        <Text
          style={[
            styles.boldChargeTextLine,
            { fontWeight: "700", fontSize: 11 },
          ]}
        >
          {header}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setSwiched(!swiched)}
        style={
          swiched == false
            ? styles.swichhedSetting
            : styles.swichhedSetting_active_purple
        }
      >
        <View style={styles.circleSwichSetting}></View>
      </TouchableOpacity>
    </View>
  );
};

export default SwichFilter;
