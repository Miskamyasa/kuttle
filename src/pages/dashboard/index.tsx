import React from "react";

import {Button, Flex, Heading} from "@chakra-ui/react";


export const Dashboard: React.FC = () => (
  <React.Fragment>
    <Flex
      my={5}
      mx={12}
      align="center"
      justify="space-between">
      <Heading size="lg">Dashboard</Heading>
      <Button>Add new Region</Button>
    </Flex>
    <div className="mt-3 mb-2 mr-3">
      <p className="text-lg">Tailwind</p>
    </div>
  </React.Fragment>
);
