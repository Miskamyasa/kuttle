import React from "react";

import {Image, BoxProps, Flex, Text} from "@chakra-ui/react";


export const Avatar: React.FC<BoxProps & { name?: string, img?: string }> = ({
  name,
  img,
  ...box
}) => {
  if (img) {
    return (
      <Image
        src={img}
        alt={name || "Avatar"}
        w={6}
        h={6}
        borderRadius="full" />
    );
  }

  const letters = name
    ?.split(" ")
    .map((p) => p.charAt(0).toUpperCase())
    .join("");

  return (
    <Flex
      bg="kuttle.gradient"
      {...box}
      w={6}
      h={6}
      borderRadius="full"
      align="center"
      justify="center">
      <Text
        size="sm"
        color="kuttle.white"
        fontWeight="semibold">
        {letters}
      </Text>
    </Flex>
  );
};
