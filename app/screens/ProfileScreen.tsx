import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>

      <Button title="Sign Out" onPress={() => navigation.navigate("SignOut")} />
    </View>
  );
}
