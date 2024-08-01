import { Image, Text, View } from "react-native";
import createStyles from "../../../assets/css/style";
import useThemeColors from "../../../assets/css/useThemeColors";
const CheckInComponenet = ({ type = 1 }) => {
  const colors = useThemeColors();
  const styles = createStyles(colors);
  return (
    <View style={styles.checkIn_outher}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 10,
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderBottomColor: "#f5f5f5",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          {type != 0 ? (
            <>
              <Image
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
                source={
                  type == 1
                    ? require("../../../assets/images/chargeIcons/charge1.png")
                    : type == 2
                    ? require("../../../assets/images/chargeIcons/charge2.png")
                    : type == 3
                    ? require("../../../assets/images/chargeIcons/charge3.png")
                    : type == 4
                    ? require("../../../assets/images/chargeIcons/charge4.png")
                    : require("../../../assets/images/chargeIcons/charge5.png")
                }
              />
            </>
          ) : null}
          <Image
            style={{ width: 45, height: 45, borderRadius: 100 }}
            resizeMode="cover"
            source={require("../../../assets/images/chargeIcons/user.jpg")}
          />
          <View>
            <Text style={[styles.textChargeOneHead, { fontWeight: "700" }]}>
              Yakup Yılmaz
            </Text>
            <Text style={[styles.textChargeOneHead]}>Tesla Y</Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={[styles.textChargeOneHead, { fontWeight: "700" }]}>
            Bügün
          </Text>
          <Text style={[styles.textChargeOneHead, { fontWeight: "700" }]}>
            07:20 AM
          </Text>
        </View>
      </View>
      <View style={{ width: "100%" }}>
        <Text style={styles.textChargeOneHead}>
          Şarj istasyonu istasyonu çok temiz ve hızlı şarj var bu konuda herkesi
          buraya bekleriz.
        </Text>
      </View>
    </View>
  );
};

export default CheckInComponenet;
