import {
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_700Bold,
  useFonts,
} from "@expo-google-fonts/public-sans";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";
import { ThemeProvider } from "styled-components";
import { Load } from "./components/Animations/Load";
import Routes, { navigationRef } from "./routes";
import theme from "./theme";

function App() {
  const [fontsLoaded] = useFonts({
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Load />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <StatusBar style="light" translucent backgroundColor="transparent" />
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
  return null;
}

export default () => (
  <RootSiblingParent>
    <App />
  </RootSiblingParent>
);
