import React from "react";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import {
  ServiceItem1,
  ServiceItem2,
  ServiceItem3,
} from "../../components/ServiceItem";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import { HStack } from "@/components/ui/hstack";

export default function ServicesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <VStack className="px-4">
        <Heading className="text-typography-700 my-4" size="3xl">
          Services
        </Heading>
        <Text className="font-semibold" size="2xl">
          Go anywhere, get anything
        </Text>

        <HStack className="gap-4 mt-12 w-full">
          <ServiceItem1
            title="Trip"
            icon={require("../../assets/images/car.png")}
            promo
          />
          <ServiceItem1
            title="Intercity"
            icon={require("../../assets/images/car_people.png")}
            promo
          />
        </HStack>
        <HStack className="gap-4 mt-4 w-full">
          <ServiceItem2
            title="Rentals"
            icon={require("../../assets/images/cars2.png")}
            className="col-span-2"
          />
          <ServiceItem2
            title="Reserve"
            icon={require("../../assets/images/calender.png")}
            className="col-span-2"
          />
          <ServiceItem2
            title="Group Ride"
            icon={require("../../assets/images/car.png")}
            className="col-span-2"
          />
        </HStack>
      </VStack>

      <Divider className="h-1 bg-typography-50 my-6" />

      <VStack className="px-4">
        <Text className="font-semibold" size="2xl">
          Get anything done
        </Text>
        <HStack className="gap-4 mt-8 w-full">
          <ServiceItem3
            title="Package"
            icon={require("../../assets/images/box.png")}
          />
          <ServiceItem1
            title="Store pick-up"
            icon={require("../../assets/images/store.png")}
          />
        </HStack>
      </VStack>
    </SafeAreaView>
  );
}
