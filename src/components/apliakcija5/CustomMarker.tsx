import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";
import apartments from "assets/aplikacija4/apartments.json";

type Apartment = {
  apart: any;
  onPress: any;
};

const CustomMarker = ({ apart, onPress }: Apartment) => {
  return (
    <Marker
      onPress={onPress}
      key={apart.id}
      coordinate={{
        latitude: apart.latitude,
        longitude: apart.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderColor: "gray",
          borderWidth: 1,
          borderRadius: 20,
          padding: "auto",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>${apart.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
