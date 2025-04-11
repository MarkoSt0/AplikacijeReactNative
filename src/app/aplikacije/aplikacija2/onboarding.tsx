import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { router, Stack } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  FadeIn,
  FadeOut,
  SlideInLeft,
  SlideOutRight,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "book-open",
    title: "Welcome to my applications",
    description:
      "This is project with my learning of React Native and Expo through different applications.",
  },
  {
    icon: "mobile-alt",
    title: "Second app: Onboard",
    description:
      "This is mobile application where i learned how to make onboard, style UI for unboard, working with animations, changing UI etc.",
  },
  {
    icon: "people-arrows",
    title: "Future apps",
    description:
      "There is a plan to make a lot of different applications with different learning phases.",
  },
];

const OnboardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const lastScreen = screenIndex === onboardingSteps.length - 1;
    if (lastScreen) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };
  const onBack = () => {
    if (screenIndex === 0) {
      endOnboarding();
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };
  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };
  runOnJS(() => true);
  const swipe = Gesture.Simultaneous(
    Gesture.Fling().runOnJS(true).direction(Directions.RIGHT).onStart(onBack),
    Gesture.Fling().runOnJS(true).direction(Directions.LEFT).onStart(onContinue)
  );
  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar barStyle={"light-content"} />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, i) => (
          <View
            key={i}
            style={[
              styles.stepIndicator,
              {
                backgroundColor: screenIndex === i ? "ghostwhite" : "gray",
              },
            ]}
          ></View>
        ))}
      </View>
      <GestureDetector gesture={swipe}>
        <View style={styles.pageContent} key={screenIndex}>
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={150}
              color="#FFDA11"
            />
          </Animated.View>
          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>
            <Animated.Text
              style={styles.description}
              entering={SlideInRight.delay(200)}
            >
              {data.description}
            </Animated.Text>
            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageContent: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
    padding: 20,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontFamily: "InterBold",
    letterSpacing: 1,
    marginVertical: 10,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 50,
  },
  description: {
    color: "gray",
    fontSize: 18,
    fontFamily: "InterSemi",
    lineHeight: 27,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  button: {
    backgroundColor: "#302E38",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#FDFDFD",
    fontFamily: "InterSemi",
    padding: 15,
    paddingHorizontal: 25,
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    marginTop: 25,
    gap: 8,
  },
  stepIndicator: {
    flex: 1,
    height: 4,
    backgroundColor: "gray",
    borderRadius: 10,
  },
});
export default OnboardingScreen;
