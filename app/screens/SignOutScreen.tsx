import { View, Text, Button } from "react-native";
import { useAuthStore } from "../store/Zustand/authStore";

export default function SignOutScreen() {
  const logout = useAuthStore((s) => s.logout);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Are you sure you want to sign out?
      </Text>

      <Button title="Sign Out" onPress={logout} />
    </View>
  );
}
