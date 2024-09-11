import React from "react";
import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";

export default function HomeScreen() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text className="font-bold" size="xl">
        Home Screen!
      </Text>
    </View>
  );
}
