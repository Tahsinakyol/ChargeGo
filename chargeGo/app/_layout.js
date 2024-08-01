import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { useFonts } from "expo-font";
import store from "../app/redux/store";
import "../assets/lang/i18n";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    mainFont: require("../assets/fonts/Mulish-VariableFont_wght.ttf"),
  });
  if (!fontLoaded) return <></>;

  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* <Stack.Screen name="index" options={{ headerShown: true }} /> */}
          <Stack.Screen name="index" />
        </Stack>
      </Provider>
    </NativeBaseProvider>
  );
}
