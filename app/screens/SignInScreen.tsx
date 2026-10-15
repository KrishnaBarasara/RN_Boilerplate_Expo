import { View, TextInput, Button, Text } from "react-native";
import React, { useState } from "react";
import { useAuthStore } from "../store/Zustand/authStore";

export default function SignInScreen({ navigation }: any) {
  const signIn = useAuthStore((state: any) => state.signIn);

  const [email, setEmail] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10 }}
        value={email}
        onChangeText={setEmail}
      />

      <Button title="Sign In" onPress={() => signIn(email)} />

      <Text onPress={() => navigation.navigate("SignUp")}>
        Don’t have an account? Sign Up
      </Text>
    </View>
  );
}
