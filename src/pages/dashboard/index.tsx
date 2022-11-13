import { Button, Flex, Heading } from "@chakra-ui/react";

export const Dashboard: React.FC = () => (
  <>
    <Flex my={5} mx={12} align="center" justify="space-between">
      <Heading size="lg">Dashboard</Heading>
      <Button>Add new Region</Button>
    </Flex>
  </>
);
