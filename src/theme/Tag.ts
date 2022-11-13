import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  tagAnatomy.keys
);

export const Tag = defineMultiStyleConfig({
  baseStyle: {
    container: {
      py: 1,
      px: 2,
      borderRadius: 4,
    },
    label: {
      color: "kuttle.black",
    },
  },
  variants: {
    success: {
      container: {
        bg: "kuttle.success",
      },
    },
    warning: {
      container: {
        bg: "kuttle.warning",
      },
    },
    error: {
      container: {
        bg: "kuttle.error",
      },
    },
  },
});
