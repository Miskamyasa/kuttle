import {Box, BoxProps, Flex, Image} from "@chakra-ui/react";

import KuttleLogoImage from "../../assets/KuttleLogoImage.svg";
import KuttleLogoText from "../../assets/KuttleLogoText.svg";
import React from "react";


export const Logo: React.FC<BoxProps> = (props) => (
  <Flex
    {...props}
    alignItems="center">
    <Box
      borderRadius="full"
      bg="kuttle.white">
      <Image
        src={KuttleLogoImage}
        alt="kuttle"
        w={10}
        h={10} />
    </Box>
    <Image
      ml={3}
      src={KuttleLogoText}
      alt="kuttle"
      h={5} />
  </Flex>
);
