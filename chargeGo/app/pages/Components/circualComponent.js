import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { Circle } from "react-native-svg";
import createStyles from "../../../assets/css/style";
import useThemeColors from "../../../assets/css/useThemeColors";
const CircualComponents = ({ percentage, cost }) => {
  const radius = 70;
  const strokeWidth = 11;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: "100%",
      }}
    >
      <Svg width={radius * 2 + strokeWidth} height={radius * 2 + strokeWidth}>
        <Circle
          stroke="#1C0089"
          fill="none"
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#00ff00"
          fill="none"
          cx={radius + strokeWidth / 2}
          cy={radius + strokeWidth / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
        />
      </Svg>
      <View style={styles.textContainer}>
        <Text style={styles.icon}>⚡</Text>
        <Text style={styles.percentageText}>{`%${percentage}`}</Text>
        <Text style={styles.costText}>{`1 kWs : ${cost} TL`}</Text>
      </View>
    </View>
  );
};

export default CircualComponents;
