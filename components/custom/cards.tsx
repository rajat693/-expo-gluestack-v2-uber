import React from "react";
import { Pressable } from "@/components/ui/pressable";
import { Badge, BadgeText } from "@/components/ui/badge";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";

export const Card1 = ({
  title,
  img_path,
  promo,
  image_className,
}: {
  title: string;
  img_path: string;
  promo?: boolean;
  image_className?: string;
}) => {
  return (
    <Pressable
      className={`flex flex-row relative bg-background-50 rounded-xl justify-between p-3 h-28`}
    >
      {promo && (
        <Badge className="absolute -top-4 left-[40%] bg-green-700 rounded-md">
          <BadgeText className="text-white capitalize">Promo</BadgeText>
        </Badge>
      )}
      <VStack className="justify-end">
        <Text className="text-typography-800 font-medium">{title}</Text>
      </VStack>
      <Image source={img_path} alt="image" className={`${image_className}`} />
    </Pressable>
  );
};

export const Card2 = ({
  title,
  img_path,
}: {
  title: string;
  img_path: any;
}) => {
  return (
    <Pressable className={`items-center p-3 bg-background-50 rounded-xl h-32`}>
      <Image source={img_path} alt="image" />
      <Text className="text-typography-800 font-medium">{title}</Text>
    </Pressable>
  );
};
