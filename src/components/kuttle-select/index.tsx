import {Box} from "@chakra-ui/react";
import {Select as ReactSelect, type SelectComponent} from "chakra-react-select";


export const Select: SelectComponent = (props) => {
  return (
    <Box
      w="full"
      bg="white">
      <ReactSelect {...props} />
    </Box>
  );
};
