import { View, TouchableOpacity, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import createStyles from "../../../assets/css/style";
import { useNavigation } from "expo-router";
import { Fontisto } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import useThemeColors from "../../../assets/css/useThemeColors";
import { useTranslation } from "react-i18next";
const CardCharge = ({
  type = "success",
  date,
  start,
  end,
  name,
  address,
  time,
  energy,
  kg,
  gpx,
  price = 0,
  errorExpain = "",
}) => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View style={styles.chargeCard_outher}>
      <View style={styles.cardChargeBanner}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <Fontisto name="date" size={14} color="#EC6047" />
          <Text style={styles.textWalletButton}>{date}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <MaterialIcons name="access-time" size={16} color="#4316B7" />
          <Text style={styles.textWalletButton}>
            {start}-{end}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
          <AntDesign name="checkcircle" size={16} color="#3BC908" />
          <Text style={styles.textWalletButton}>{t("Tamamlandı")}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          style={{ width: 30, height: 30 }}
          resizeMode="contain"
          source={require("../../../assets/images/orangeMarker.png")}
        />
        <View style={{ flex: 1, gap: 5 }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Image
              resizeMode="contain"
              style={{ width: 50, height: 25 }}
              source={require("../../../assets/images/system/brand/brand2.png")}
            />
            <Text style={styles.activeLangText}>{name}</Text>
          </View>
          <Text style={[styles.dateAndHoursWallet, { fontSize: 14 }]}>
            {address}
          </Text>
        </View>
      </View>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", gap: 2 }}>
          <Text style={styles.orangeChargeCompText}>{t("Şarj Süresi")} </Text>
          <Text style={styles.purpleChargeCompText}>{time}</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", gap: 2 }}>
          <Text style={styles.orangeChargeCompText}>{t("Alınan Enerji")}</Text>
          <Text style={styles.purpleChargeCompText}>{energy} kW</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", gap: 2 }}>
          <Text style={styles.orangeChargeCompText}>CO2 {t("Kazanımı")} </Text>
          <Text style={styles.purpleChargeCompText}>{kg} kg</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", gap: 10, width: "100%" }}>
        <View style={styles.detailChargeCard}>
          {type == "success" ? (
            <>
              <AntDesign name="checkcircle" size={16} color="#3BC908" />
            </>
          ) : (
            <>
              <FontAwesome name="times" size={15} color="#FF0000" />
            </>
          )}
          <Text
            style={
              type == "success"
                ? styles.chargeCopmpTextBottom
                : [styles.chargeCopmpTextBottom, { color: "#FF0000" }]
            }
          >
            {t("Cüzdan Ödeme")}
          </Text>
        </View>
        <View style={styles.detailChargeCard}>
          <FontAwesome name="flash" size={16} color="#EC6047" />
          <Text style={styles.chargeCopmpTextBottom}>+ {gpx} GPX</Text>
        </View>
        <View style={styles.detailChargeCard}>
          <FontAwesome
            name="money"
            size={15}
            color={type == "success" ? "#3BC908" : "#EC6047"}
          />
          <Text
            style={
              type == "success"
                ? [styles.chargeCopmpTextBottom, { color: "#3BC908" }]
                : [styles.chargeCopmpTextBottom, { color: "#EC6047" }]
            }
          >
            {price}.00 TL
          </Text>
        </View>
      </View>
      {type != "success" ? (
        <>
          <View style={styles.orangeAlertBottom}>
            <AntDesign name="warning" size={24} color="#EC6047" />
            <View style={{ flex: 1 }}>
              <Text style={styles.seeBtwLeftText}>{errorExpain}</Text>
            </View>
          </View>
        </>
      ) : null}
    </View>
  );
};

export default CardCharge;
