import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import createStyles from "../../../assets/css/style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import Menu from "../Components/menu";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useState } from "react";
import ActionSheet from "../Components/actionSheet";
import { useDisclose, Actionsheet } from "native-base";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const SssPage = () => {
  const { height, width } = Dimensions.get("window");
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [menu, setMenu] = useState(1);
  const colors = useThemeColors();
  const styles = createStyles(colors);
  const {
    isOpen: isCallSheetOpen,
    onOpen: onCallSheetOpen,
    onClose: onCallSheetClose,
  } = useDisclose();
  const {
    isOpen: isMessageSheetOpen,
    onOpen: onMessageSheetOpen,
    onClose: onMessageSheetClose,
  } = useDisclose();
  const [whatsappModal, setWhatsappModal] = useState(false);
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: colors.color_bge,
      }}
    >
      <StatusBar style="light" />
      <Menu header={t("Bize Ulaşın")} />
      <View
        style={{
          width: "100%",
          flex: 1,
          paddingBottom: insets.bottom + 15,
          paddingTop: 15,
          paddingHorizontal: 15,
        }}
      >
        <View style={{ width: "100%", flex: 1 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ width: "100%", gap: 15 }}
          >
            <TouchableOpacity
              onPress={onCallSheetOpen}
              style={[
                styles.sssPage_outher,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  padding: 15,
                },
              ]}
            >
              <MaterialIcons name="support-agent" size={24} color="#EC6047" />
              <Text style={styles.textWalletButton}>
                {t("Müşteri Hizmetlerini Ara")}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onMessageSheetOpen}
              style={[
                styles.sssPage_outher,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  padding: 15,
                },
              ]}
            >
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={24}
                color="#EC6047"
              />
              <Text style={styles.textWalletButton}>{t("Mesaj Gönderin")}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setWhatsappModal(true)}
              style={[
                styles.sssPage_outher,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  padding: 15,
                },
              ]}
            >
              <FontAwesome name="whatsapp" size={24} color="#3CBF0E" />
              <Text style={styles.textWalletButton}>
                {t("Whatsapp Mesajı Gönder")}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>

      <ActionSheet isOpen={isCallSheetOpen} onClose={onCallSheetClose}>
        <Actionsheet.Item style={styles.actionSheetPhone}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              width: "100%",
            }}
          >
            <AntDesign name="phone" size={24} color={colors.color_black} />
            <Text style={styles.actionTextPhone}>
              {t("Ara")} 0533 236 65 64
            </Text>
          </View>
        </Actionsheet.Item>
        <Actionsheet.Item
          style={[
            styles.actionSheetPhone,
            {
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#FF0000",
            },
          ]}
          onPress={onCallSheetClose}
        >
          <Text
            style={[
              styles.actionTextPhone,
              { textAlign: "center", fontWeight: "700" },
            ]}
          >
            {t("Vazgeç")}
          </Text>
        </Actionsheet.Item>
      </ActionSheet>

      <ActionSheet isOpen={isMessageSheetOpen} onClose={onMessageSheetClose}>
        <Actionsheet.Item
          style={{
            alignItems: "center",
            backgroundColor: colors.color_white,
            width: width * 1,
          }}
        >
          <View
            style={{
              width: width * 1,
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={[
                styles.actionTextPhone,
                { marginBottom: 15, textAlign: "center" },
              ]}
            >
              {t("Mesaj Gönder")}
            </Text>
            <View style={styles.lineModalIn_action}>
              <AntDesign name="user" size={14} color="#4316B7" />
              <Text style={styles.chargeCopmpTextBottom}>Fırat Oruç</Text>
            </View>
            <View style={styles.lineModalIn_action}>
              <AntDesign name="mail" size={14} color="#4316B7" />
              <Text style={styles.chargeCopmpTextBottom}>
                firatoruc@gmail.com
              </Text>
            </View>
            <View style={styles.lineModalIn_action_area}>
              <AntDesign name="message1" size={14} color="#4316B7" />
              <View style={{ flex: 1 }}>
                <TextInput
                  multiline={true}
                  style={styles.messageAreaShhet}
                  placeholderTextColor={"gray"}
                  placeholder={t("Lütfen Mesajınızı Yazınız")}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.purpleButton}>
              <Text style={styles.purpleButton_text}>{t("Ödeme Yap")}</Text>
            </TouchableOpacity>
          </View>
        </Actionsheet.Item>
      </ActionSheet>
      <Modal transparent={true} visible={whatsappModal}>
        <View style={styles.whatsappModal}>
          <TouchableOpacity
            onPress={() => setWhatsappModal(false)}
            style={{ flex: 1, width: "100%" }}
          ></TouchableOpacity>
          <View style={styles.modalCenterWp}>
            <Text style={styles.purpleTextSee}>
              {t("Whatsapp Bağlanıyrosunuz")}
            </Text>
            <Text style={styles.textWalletButton}>
              Whatsapp Bağlanıyorsunuz Müşteri hizmetlerimize bir kaç saniye
              bağlanmış olacaksınız Beklediğiniz için teşekkür ederiz.
            </Text>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() => setWhatsappModal(false)}
            >
              <Text style={styles.purpleButton_text}>{t("Vazgeç")}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setWhatsappModal(false)}
            style={{ flex: 1, width: "100%" }}
          ></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default SssPage;
