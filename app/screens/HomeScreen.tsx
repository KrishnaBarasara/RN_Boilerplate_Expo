import { View, Text, Button } from "react-native";
import React from "react";
import { useUsersQuery } from "../services/query/useAuthQuery";

export default function HomeScreen() {
  const { data, isLoading, error, refetch } = useUsersQuery();

  const throwError = () => {
    throw new Error("Testing Error Boundary");
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading users</Text>;

  return (
    <View style={{ padding: 20 }}>
      <Button title="Refresh" onPress={refetch} />

      {data?.map((u: any) => (
        <Text key={u.id}>{u.name}</Text>
      ))}
      <Button title="Test Error Boundary" onPress={throwError} />
    </View>
  );
}
