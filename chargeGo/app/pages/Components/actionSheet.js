import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Actionsheet, Button, Center, useDisclose } from "native-base";
import useThemeColors from "../../../assets/css/useThemeColors";

const ActionSheet = ({ isOpen, onClose, children }) => {
  const colors = useThemeColors();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose} style={{ width: "100%" }}>
      <Actionsheet.Content
        style={{
          backgroundColor: colors.color_white,
          gap: 10,
          width: "100%",
        }}
      >
        {children}
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default ActionSheet;
