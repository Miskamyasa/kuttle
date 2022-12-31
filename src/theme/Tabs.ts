import {tabsAnatomy} from "@chakra-ui/anatomy";
import {createMultiStyleConfigHelpers} from "@chakra-ui/react";


const {defineMultiStyleConfig} = createMultiStyleConfigHelpers(
  tabsAnatomy.keys
);

export const Tabs = defineMultiStyleConfig({
  variants: {
    line: {
      tab: {
        fontWeight: "bold",
        fontSize: "14px",
        padding: "13px",
        paddingLeft: "24px",
        paddingRight: "24px",
        lineHeight: "24px",
        color: "kuttle.black",
        border: "none",
        whiteSpace: "nowrap",
        _selected: {
          color: "kuttle.black",
          bg: "kuttle.gray",
        },
      },
      tablist: {
        border: "none",
      },
    },
  },
});
