import { View, Text, Switch } from "react-native";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import useThemeColors from "../../../assets/css/useThemeColors";
const MapSwichLine = ({ label }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#dadada",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
      }}
    >
      <Text
        style={[
          styles.textHeaderModalHomePage,
          { fontWeight: "700", fontSize: 12 },
        ]}
      >
        {label}
      </Text>
      <Switch
        trackColor={{ false: "#767577", true: "#EC6047" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default MapSwichLine;
