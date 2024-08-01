import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { BarChart, XAxis, YAxis } from "react-native-svg-charts";
import * as scale from "d3-scale";
import { Select } from "native-base";
import SelectComp from "./select";
import { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useTranslation } from "react-i18next";
const data = [5, 10, 15, 20, 25, 20, 15, 10, 5, 10, 15, 20, 25, 20, 15, 10];

const BarChartComponent = () => {
  const contentInset = { top: 10, bottom: 10 };
  const [service, setService] = useState("");
  const { t } = useTranslation();
  return (
    <View style={{ width: "100%" }}>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <View
          style={{ width: "30%", backgroundColor: "#dadada", borderRadius: 5 }}
        >
          <Select
            fontSize={10}
            textAlignVertical={"center"}
            borderWidth={0}
            _actionSheet={{
              useRNModal: true,
            }}
            style={[
              {
                width: "100%",
                color: "#000",
                fontSize: 10,
                height: "100%",
                height: 30,
                marginTop: -5,
              },
            ]}
            selectedValue={service}
            minWidth="100%"
            accessibilityLabel={t("Seçiniz")}
            placeholder={t("Seçiniz")}
            dropdownIcon={
              <FontAwesome
                name="chevron-down"
                color={"#000"}
                size={10}
                style={{
                  marginRight: 15,
                  marginTop: -5,
                }}
              />
            }
            _selectedItem={{
              bg: "teal.600",
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Bugün" value="Bugün" />
            <Select.Item label="Yarın" value="Yarın" />
          </Select>
        </View>
      </View>
      <View style={{ height: 130, padding: 0, flexDirection: "row" }}>
        <YAxis
          data={data}
          contentInset={contentInset}
          svg={{
            fill: "grey",
            fontSize: 10,
          }}
          numberOfTicks={10}
          formatLabel={(value) => `${value}`}
        />
        <View style={{ flex: 1, marginLeft: 5 }}>
          <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill: "#4316B7" }}
            contentInset={contentInset}
            spacingInner={0.5}
            gridMin={0}
          />
          <XAxis
            style={{ marginHorizontal: -10 }}
            data={data}
            scale={scale.scaleBand}
            formatLabel={(value, index) => `${6 + index * 1}`}
            contentInset={{ left: 5, right: 5 }}
            svg={{ fontSize: 10, fill: "black" }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "purple",
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
  },
});

export default BarChartComponent;
