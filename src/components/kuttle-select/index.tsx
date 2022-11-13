import { Select as ReactSelect } from "chakra-react-select";
import type { SelectComponent } from "chakra-react-select";
import { Box } from "@chakra-ui/react";

export const Select: SelectComponent = (props) => {
  return (
    <Box w="full" bg="white">
      <ReactSelect {...props} />
    </Box>
  );
};
