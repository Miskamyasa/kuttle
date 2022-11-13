import { BoxProps, VStack, Text } from "@chakra-ui/react";

export type DetailsCardProps = BoxProps & {
  detail: Detail;
};

export type Detail = {
  title: string;
  value: string;
};

export const DetailsCard: React.FC<DetailsCardProps> = ({
  detail,
  ...boxProps
}) => {
  return (
    <VStack h={12} w={76} bg="kuttle.gray" {...boxProps}>
      <Text size="xs" color="kuttle.gray.strong">
        {detail.title}
      </Text>
      <Text size="sm" fontWeight="medium">
        {detail.value}
      </Text>
    </VStack>
  );
};
