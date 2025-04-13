import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";

type ApartmentListItem = {
  apartment: any;
  containerStyle: ViewStyle;
};

const ApartmentListItem = ({
  apartment,
  containerStyle = {},
}: ApartmentListItem) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image}></Image>
      <View style={styles.content}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          Good apartment in middle of San Francisco
        </Text>
        <View style={styles.footer}>
          <Text style={styles.price}>${apartment.price}</Text>
          <Text style={styles.rating}>
            ☆{apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 20,
    overflow: "hidden",
  },
  title: {
    fontFamily: "InterBold",
    marginBottom: 10,
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  content: {
    padding: 10,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  description: {
    color: "gray",
  },
  price: {
    fontWeight: "bold",
  },
  rating: {},
});

export default ApartmentListItem;
