import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

const index = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Maps (Airbnb)" }} />
      <Text style={styles.text}>Mape, airbnb tip, expo bottom sheet</Text>
      <Link href={"/aplikacije/aplikacija4/airbnb"} asChild>
        <Button title="Go to AirBNB map" />
      </Link>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    paddingVertical: 10,
    fontSize: 15,
    flex: 1,
  },
});

export default index;
