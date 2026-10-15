import { View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useCreatePost } from "../services/query/useAuthQuery";

export default function CreatePostScreen() {
  const createPost = useCreatePost();
  const [title, setTitle] = useState("");

  return (
    <View>
      <TextInput value={title} onChangeText={setTitle} placeholder="Title" />

      <Button
        title="Create Post"
        onPress={() => createPost.mutate({ title })}
        disabled={createPost.isPending}
      />
    </View>
  );
}
