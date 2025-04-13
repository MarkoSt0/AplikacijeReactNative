import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useMemo, useState } from "react";
import { Stack } from "expo-router";
import MapView, { Callout, Marker } from "react-native-maps";
import apartments from "assets/aplikacija4/apartments.json";
import CustomMarker from "@/components/apliakcija5/CustomMarker";
import ApartmentListItem from "@/components/apliakcija5/ApartmentListItem";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetView,
} from "@gorhom/bottom-sheet";

const AirbnbScreen = () => {
  const snapPoints = useMemo(() => [75, "50%", "90%"], []);
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} initialRegion={region}>
        {apartments.map((apart) => (
          <CustomMarker
            key={apart.id}
            apart={apart}
            onPress={() => setSelectedApartment(apart)}
          />
        ))}
      </MapView>
      {/* Display selected Aparment */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={{
            position: "absolute",
            bottom: Number(snapPoints[0]),
            left: 10,
            right: 10,
          }}
        ></ApartmentListItem>
      )}
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        // ref={bottomSheetRef}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ padding: 10, gap: 10 }}
            renderItem={({ item }) => (
              <ApartmentListItem apartment={item}></ApartmentListItem>
            )}
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
  page: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 15,
  },
});

export default AirbnbScreen;
