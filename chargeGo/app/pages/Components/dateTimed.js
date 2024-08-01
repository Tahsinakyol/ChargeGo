import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { tr } from "date-fns/locale";
import createStyles from "../../../assets/css/style";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const DateTimed = ({ label = "" }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const formatDate = (date) => {
    if (!date) return "";
    return format(new Date(date), "d MMMM yyyy", { locale: tr });
  };

  return (
    <View style={styles.inputAndHeadersTops}>
      <Text style={styles.inputRegisterTops}>{label}</Text>
      <TouchableOpacity
        onPress={showDatePicker}
        style={styles.bttonDateTimedAndSelected}
      >
        <Text style={{ color: colors.color_black }}>
          {selectedDate ? formatDate(selectedDate) : `${label} ${t("Seçiniz")}`}
        </Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

export default DateTimed;
