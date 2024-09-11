import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { Badge, BadgeText } from "@/components/ui/badge";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Box } from "./ui/box";
import { HStack } from "./ui/hstack";

export const ServiceItem1 = ({
  title,
  icon,
  promo,
  className,
}: {
  title: string;
  icon: any;
  promo?: boolean;
  className?: string;
}) => {
  return (
    <Pressable
      className={`flex flex-row relative bg-background-50 rounded-xl justify-between ${className} p-3 flex-grow h-28`}
    >
      {promo && (
        <Badge className="absolute -top-4 left-[40%] bg-green-700 rounded-md">
          <BadgeText className="text-white capitalize text-md">Promo</BadgeText>
        </Badge>
      )}
      <VStack className="items-end justify-end">
        <Text className="text-typography-800">{title}</Text>
      </VStack>
      <Image source={icon} alt="image" />
    </Pressable>
  );
};

export const ServiceItem2 = ({
  title,
  icon,
  className,
}: {
  title: string;
  icon: any;
  className?: string;
}) => {
  return (
    <Pressable
      className={`items-center p-3 bg-background-50 rounded-xl ${className} flex-grow`}
    >
      <Image source={icon} alt="image" />
      <Text className="text-typography-800">{title}</Text>
    </Pressable>
  );
};

export const ServiceItem3 = ({
  title,
  icon,
  promo,
  className,
}: {
  title: string;
  icon: any;
  promo?: boolean;
  className?: string;
}) => {
  return (
    <Pressable
      className={`flex flex-row relative bg-background-50 rounded-xl justify-between ${className} p-3 flex-grow h-28`}
    >
      <VStack className="items-end justify-end">
        <Text className="text-typography-800">{title}</Text>
      </VStack>
      <Box className="w-12 h-10 self-center">
        <Image
          source={icon}
          alt="image"
          className="object-contain h-full w-full"
        />
      </Box>
    </Pressable>
  );
};
