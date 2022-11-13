import { Flex, HStack, Icon } from "@chakra-ui/react";
import { Bell, Gear } from "phosphor-react";
import { Avatar } from "../avatar";
import { Logo } from "../logo";

export const Header: React.FC = () => {
  return (
    <Flex
      w="full"
      bg="kuttle.black"
      alignItems="center"
      justifyContent="space-between"
      pl={2}
      pr={4}
      py={1}
    >
      <Logo />
      <HStack>
        <Icon color="kuttle.white" w={6} h={6}>
          <Gear size="24px" />
        </Icon>
        <Icon color="kuttle.white" w={6} h={6}>
          <Bell size="24px" />
        </Icon>
        <Avatar name="John Smith" />
      </HStack>
    </Flex>
  );
};
