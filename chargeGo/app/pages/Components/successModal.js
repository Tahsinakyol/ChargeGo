import { Modal, View, Text, ActivityIndicator } from "react-native";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SuccessModal = ({
  openModal = false,
  setOpenModal,
  modalHeader,
  modalDetail,
}) => {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <Modal
      style={{
        zIndex: 9,
      }}
      transparent={true}
      visible={openModal}
    >
      <View
        style={[
          styles.customModalOuter,
          { paddingTop: insets.top + 15, paddingBottom: insets.bottom + 15 },
        ]}
      >
        <View style={styles.successModal_innerTop}>
          <View style={styles.IconsCheckedTop}>
            <View style={styles.IconsCheckedTop_inner}>
              <AntDesign name="check" size={34} color={colors.color_white} />
            </View>
          </View>
          <View style={styles.SuccessModal_intro}>
            <Text style={styles.modalHeaderTextCenter}>{modalHeader}</Text>
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={styles.textCenterModalSuccess}>
                {t("Lütfen Bekleyin")}
              </Text>
              <Text style={styles.textCenterModalSuccess}>{modalDetail}</Text>
            </View>
            <ActivityIndicator size="large" color="#01B763" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
