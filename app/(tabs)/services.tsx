import React from "react";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Divider } from "@/components/ui/divider";
import { VStack } from "@/components/ui/vstack";
import { Grid, GridItem } from "@/components/ui/grid";
import { Card1, Card2 } from "@/components/custom/cards";

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

        <Grid
          className="gap-x-4 gap-y-5 mt-10"
          _extra={{ className: "grid-cols-6" }}
        >
          <GridItem className="" _extra={{ className: "col-span-3" }}>
            <Card1
              title="Trip"
              img_path={require("../../assets/images/car.png")}
              promo
            />
          </GridItem>
          <GridItem className="" _extra={{ className: "col-span-3" }}>
            <Card1
              title="Intercity"
              img_path={require("../../assets/images/car_people.png")}
              promo
            />
          </GridItem>
          <GridItem className="" _extra={{ className: "col-span-2" }}>
            <Card2
              title="Rentals"
              img_path={require("../../assets/images/cars2.png")}
            />
          </GridItem>
          <GridItem className="" _extra={{ className: "col-span-2" }}>
            <Card2
              title="Reserve"
              img_path={require("../../assets/images/calender.png")}
            />
          </GridItem>
          <GridItem className="" _extra={{ className: "col-span-2" }}>
            <Card2
              title="Group Ride"
              img_path={require("../../assets/images/car.png")}
            />
          </GridItem>
        </Grid>
      </VStack>

      <Divider className="h-1.5 bg-typography-50 my-7" />

      <VStack className="px-4">
        <Text className="font-semibold" size="2xl">
          Get anything done
        </Text>

        <Grid
          className="gap-4 mt-5"
          _extra={{ className: "grid-cols-2" }}
        >
          <GridItem className="" _extra={{ className: "col-span-1" }}>
            <Card1
              title="Package"
              img_path={require("../../assets/images/box.png")}
              image_className='h-12 w-12 self-center mr-4'
            />
          </GridItem>
          <GridItem className="" _extra={{ className: "col-span-1" }}>
            <Card1
              title="Store pick-up"
              img_path={require("../../assets/images/store.png")}
            />
          </GridItem>
        </Grid>
      </VStack>
    </SafeAreaView>
  );
}
