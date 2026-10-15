import React from "react";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import { View, ActivityIndicator } from "react-native";
import { useAuthStore } from "../store/Zustand/authStore";
import AppStack from "./AppStack";

export default function RootNavigator() {
  // Zustand rehydration flag
  const rehydrated = useAuthStore((state) => state.rehydrated);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  // ⛔ IMPORTANT: Wait until Zustand loads data from AsyncStorage
  if (!rehydrated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // After rehydration: decide screen flow
  return isLoggedIn ? <AppStack /> : <AuthNavigator />;
}
