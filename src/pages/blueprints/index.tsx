import { Flex, Text, VStack } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Blueprint, BlueprintService } from "../../services/BlueprintService";
import { BluePrintCard } from "../../components/blue-print-card";

export const Blueprints: React.FC = () => {
  const [bluePrints, setBlueprints] = useState<Blueprint[]>();

  const [activeBlueprintId, setActiveBlueprintId] = useState<string>();

  useEffect(() => {
    BlueprintService.fetchBlueprints().then((data) => setBlueprints(data));
  }, []);

  const handleBlueprintClick = useCallback((blueprint: Blueprint) => {
    setActiveBlueprintId(blueprint.id);
  }, []);

  return (
    <>
      <Flex my={5} mx={12} align="center" justify="space-between">
        <Text size="lg">Blueprints</Text>
      </Flex>
      <VStack w={560} gap={4}>
        {bluePrints &&
          bluePrints.map((blueprint) => (
            <BluePrintCard
              onClick={() => handleBlueprintClick(blueprint)}
              key={blueprint.id}
              isActive={blueprint.id === activeBlueprintId}
              blueprint={blueprint}
            />
          ))}
      </VStack>
    </>
  );
};
