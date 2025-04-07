import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AppListItem from "./src/components/core/AppListItem";
const days = [...Array(24)].map((val, index) => index + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        // showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        renderItem={({ item }) => <AppListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    backgroundColor: "red",
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 5,
  },
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#9b4521",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});
