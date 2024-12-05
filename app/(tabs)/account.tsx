import React from "react";
import { Text } from "@/components/ui/text";
import { SafeAreaView } from "@/components/ui/safe-area-view";

export default function AccountScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-black">
      <Text className="font-bold" size="xl">
        Account Screen!
      </Text>
    </SafeAreaView>
  );
}
