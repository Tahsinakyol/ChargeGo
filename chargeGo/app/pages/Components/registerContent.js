import { Text, TouchableOpacity, View } from "react-native";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
const RegisterContent = ({ explain }) => {
  const [status, setStatus] = useState(false);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <TouchableOpacity
      style={styles.registerContent_top}
      onPress={() => setStatus(!status)}
    >
      <View
        style={status == true ? styles.activeRgContent : styles.pasiveRgContent}
      >
        {status == true ? (
          <>
            <AntDesign name="check" size={18} color="#fff" />
          </>
        ) : null}
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.textExplainRegisterContent}>{explain}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RegisterContent;
