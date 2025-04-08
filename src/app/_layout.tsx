import { Slot, SplashScreen, Stack } from "expo-router";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { useEffect } from "react";
export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({ Inter: Inter_900Black });
  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "snow" },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Aplikacije" }} />
    </Stack>
  );
}
