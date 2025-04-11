import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import Markdown from "react-native-markdown-display";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import MarkdownDisplay from "@/components/aplikacija3/MarkdownDisplay";

const template = `Neki tekst`;

const markdown = () => {
  const [content, setContent] = useState(template);
  return (
    <View style={styles.page}>
      <TextInput
        value={content}
        multiline
        style={styles.input}
        onChange={setContent}
      />
      <MarkdownDisplay children={content} />
    </View>
  );
};

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: "InterBlack",
    color: "#404040",
    marginTop: 10,
    marginBottom: 5,
  },
  body: {
    fontSize: 16,
    fontFamily: "Inter",
  },
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: "whitesmoke",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
    flex: 1,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
    borderRadius: 10,
  },
});

export default markdown;
