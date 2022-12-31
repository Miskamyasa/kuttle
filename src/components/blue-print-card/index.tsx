import React, {useMemo} from "react";

import {
  BoxProps,
  Heading,
  HStack,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";

import {Blueprint} from "../../services/BlueprintService";
import {DetailsCard, Detail} from "../details-card/DetailsCard";


export type BluePrintCardProps = BoxProps & {
  blueprint: Blueprint,
  isActive?: boolean,
};

export const BluePrintCard: React.FC<BluePrintCardProps> = ({
  blueprint,
  isActive,
  ...boxProps
}) => {
  const details = useMemo(() => {
    const d: Detail[] = [];
    d.push({
      title: "Default version",
      value: blueprint.versions[0].toString(),
    });
    d.push({
      title: "Last version",
      value: blueprint.versions.slice(-1).toString(),
    });
    d.push({
      title: "Default m/costs",
      value: "$" + blueprint.costs.monthly.toString() + "/mo",
    });
    return d;
  }, [blueprint]);

  return (
    <Flex
      {...boxProps}
      flexDirection="column"
      justifyContent="space-between"
      w={480}
      h={180}
      bg="white"
      gap={2}
      p={4}
      pb={2}
      shadow={isActive ? "kuttle.pink" : "none"}>
      <VStack>
        <Heading
          as="h2"
          size="md"
          mt={2}
          noOfLines={1}>
          {blueprint.name}
        </Heading>
        <Text
          size="md"
          mt={2}
          noOfLines={[1, 2]}>
          {blueprint.description}
        </Text>
      </VStack>
      <HStack
        gap={5}
        display="flex"
        justifyContent="center">
        {details.map((detail) => (
          <DetailsCard
            key={detail.title + detail.value}
            detail={detail} />
        ))}
      </HStack>
    </Flex>
  );
};
