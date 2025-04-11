import { View, Text, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import MarkdownDisplay from "@/components/aplikacija3/MarkdownDisplay";

const text = `
  # Markdown
  Rad sa tekstom na stranicama, uz pomoc markdown (github), slikama, linkovima
  **u React Native-u**
`;

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Markdown application" }} />
      <MarkdownDisplay children={text} />
      <Link href={"/aplikacije/aplikacija3/markdown"} asChild>
        <Button title="Go to markdown" />
      </Link>
    </View>
  );
};

export default index;
