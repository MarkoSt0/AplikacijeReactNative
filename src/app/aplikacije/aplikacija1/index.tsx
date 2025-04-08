import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const DetaljiAplikacije = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Druga strana" }} />
      <Text style={{ fontFamily: "Inter", fontSize: 50 }}>
        DetaljiAplikacije1
      </Text>
    </View>
  );
};

export default DetaljiAplikacije;
