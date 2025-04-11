import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const DetaljiAplikacije = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Aplikacija2: Onboarding" }} />
      <Link href={"/aplikacije/aplikacija2/onboarding"} asChild>
        <Button title="Go to onboarding" />
      </Link>
      <Text style={{ fontFamily: "Inter", fontSize: 15 }}>
        Rad sa pocetnom stranom (Onboarding), vise onboard stranica da se
        menjaju, animacije :)
      </Text>
      <Text style={{ fontFamily: "Inter", fontSize: 15 }}>
        Pogledati na netu sta je onboard page za vise informacija.
      </Text>
      <Text>Dodatno: Rad sa Expo Icons - ikoniceeee</Text>
      <Text>React Gestures (swipe left, right)</Text>
      <Text>React Reanimated animacije</Text>
    </View>
  );
};

export default DetaljiAplikacije;
