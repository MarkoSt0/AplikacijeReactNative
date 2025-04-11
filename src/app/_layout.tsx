import { Slot, SplashScreen, Stack } from "expo-router";
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";
export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    Inter: Inter_400Regular,
    InterBold: Inter_900Black,
    InterSemi: Inter_600SemiBold,
  });
  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "snow" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Aplikacije" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
