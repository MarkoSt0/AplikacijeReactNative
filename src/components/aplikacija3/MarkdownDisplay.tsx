import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { Stack } from "expo-router";
import Markdown from "react-native-markdown-display";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const copy = `# 📱 MyMobileApp

Welcome to **MyMobileApp** – your all-in-one solution for managing tasks, notes, and reminders on the go.

---

## ✨ Features

- ✅ Easy-to-use interface
- 🔔 Smart reminders
- 📝 Note-taking with rich text
- 📅 Task calendar view
- ☁️ Cloud sync across devices

---

## 🚀 Getting Started

1. **Download** the app from the App Store or Google Play.
2. **Sign up** using your email or social login.
3. Start adding your **first task** or note.
4. To add an image: 
// ![Stormtroopocat](https://cdn.pixabay.com/photo/2023/10/06/15/15/disc-fungus-8298506_1280.jpg "The Stormtroopocat")
---

## 🧠 Tips & Tricks

> _“Swipe left to delete a task. Swipe right to complete it!”_

- Tap and hold a task to edit it.
- Use #tags to organize notes.
- Shake your phone to undo the last action (iOS only).

---

## ❓ FAQ

### How do I reset my password?

Go to 'Settings > Account > Reset Password'. You’ll get an email with instructions.

### Is my data secure?

Yes! All your data is encrypted and securely stored in the cloud.

---

## 📬 Contact Us

Need help? Feedback?  
Email us at: **support@mymobileapp.com**  
Or visit our website: [www.mymobileapp.com](https://www.mymobileapp.com)

---

_Thank you for using **MyMobileApp**!_ ❤️

`;

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <StatusBar barStyle={"dark-content"} />
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
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
    backgroundColor: "white",
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    padding: 10,
  },
});

export default MarkdownDisplay;
