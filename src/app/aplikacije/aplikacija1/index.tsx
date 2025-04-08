import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DetaljiAplikacije = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Aplikacija1" }} />
      <Text style={{ fontFamily: "Inter", fontSize: 15 }}>
        U sustini cela aplikacija.
      </Text>
      <Text>Nauceno: Pravljenje projekta, organizacija, fajlovi</Text>
      <Text>FlatList, SplashScreen(Kod ucitavanja), Ucitavanje fontova</Text>
      <Text>Rad sa _layout.tsx(Nesto sto ce svaki korisnicki UI imati)</Text>
      <Text>Ubacivanje u _layout.tsx Stack ili Slot</Text>
      <Text>ExpoRouter (kako da iammo vise prozora)</Text>
      <Text>Kreiranje komponenti</Text>
      <Text>Expo TS, aliasi! (kako da komponente lakse referenciramo)</Text>
      <Text></Text>
    </View>
  );
};

export default DetaljiAplikacije;
