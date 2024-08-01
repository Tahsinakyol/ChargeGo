import { Modal, View, Text, TouchableOpacity } from "react-native";
import createStyles from "../../../assets/css/style";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
const ModalGenerate = ({
  openModal = false,
  setOpenModal,
  modalHeader,
  modalDetail,
  modalType = "success",
  buttonText = "OK",
  click = () => setOpenModal(false),
}) => {
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
            <View
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  modalType == "success"
                    ? "#0EC470"
                    : modalType == "error"
                    ? "#FF0000"
                    : modalType == "rezervation"
                    ? "#EC6047"
                    : "#FF8A00",
              }}
            >
              {modalType == "success" ? (
                <>
                  <AntDesign name="check" size={34} color="#fff" />
                </>
              ) : modalType == "error" ? (
                <>
                  <FontAwesome name="times" size={24} color="#fff" />
                </>
              ) : modalType == "rezervation" ? (
                <>
                  <Fontisto name="date" size={24} color="#fff" />
                </>
              ) : (
                <>
                  <FontAwesome name="info" size={24} color="#fff" />
                </>
              )}
            </View>
          </View>
          <View style={styles.SuccessModal_intro}>
            <Text style={styles.textChooseHourspage}>{modalHeader}</Text>
            <View style={{ width: "100%", alignItems: "center" }}>
              <Text style={styles.seeBtwLeftText}>{modalDetail}</Text>
            </View>
            <TouchableOpacity
              onPress={click}
              style={{
                width: "100%",
                height: 50,
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor:
                  modalType == "success"
                    ? "#0EC470"
                    : modalType == "error"
                    ? "#FF0000"
                    : modalType == "rezervation"
                    ? "#EC6047"
                    : "#FF8A00",
              }}
            >
              <Text style={styles.purpleButton_text}>{buttonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalGenerate;
