import React from "react";
import { View, Text } from "react-native";
import createStyles from "../../../assets/css/style";
import { Select } from "native-base";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
const SelectComp = (props) => {
  let label = props.label;
  let children = props.children;
  let holder = props.holder;
  let onValueChanges = props.onValueChanges;
  const [service, setService] = useState("");
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View style={styles.inputAndHeadersTops}>
      <Text style={styles.inputRegisterTops}>{label}</Text>
      <View style={styles.bttonDateTimedAndSelected}>
        <Select
          fontSize={14}
          textAlignVertical={"center"}
          borderWidth={0}
          _actionSheet={{
            useRNModal: true,
          }}
          style={[
            {
              width: "100%",
              color: colors.color_black,
              fontSize: 14,
              height: "100%",
            },
          ]}
          selectedValue={service}
          minWidth="100%"
          accessibilityLabel={holder}
          placeholder={holder}
          dropdownIcon={
            <FontAwesome
              name="chevron-down"
              color={colors.color_black}
              style={{
                marginRight: 15,
              }}
            />
          }
          _selectedItem={{
            bg: "teal.600",
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          {children}
        </Select>
      </View>
    </View>
  );
};

export default SelectComp;
