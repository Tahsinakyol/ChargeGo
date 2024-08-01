import { View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import createStyles from "../../../assets/css/style";
import { useNavigation } from "expo-router";
import useThemeColors from "../../../assets/css/useThemeColors";

const SwichSetting = ({ header, detail }) => {
  const navigation = useNavigation();
  const [swiched, setSwiched] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View style={styles.swichSetting_outher}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={[styles.accountChangePhoneNumber, { fontSize: 13 }]}>
          {header}
        </Text>
        <TouchableOpacity
          onPress={() => setSwiched(!swiched)}
          style={
            swiched == false
              ? styles.swichhedSetting
              : styles.swichhedSetting_active
          }
        >
          <View style={styles.circleSwichSetting}></View>
        </TouchableOpacity>
      </View>
      <Text style={styles.swichSettingDetailText}>{detail}</Text>
    </View>
  );
};

export default SwichSetting;
