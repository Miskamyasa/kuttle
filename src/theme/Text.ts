import {ComponentStyleConfig} from "@chakra-ui/theme";


export const Text: ComponentStyleConfig = {
  defaultProps: {
    size: "md",
  },
  sizes: {
    xs: {
      fontSize: "xs",
      lineHeight: "16px",
    },
    sm: {
      fontSize: "sm",
      lineHeight: "18px",
    },
    md: {
      fontSize: "lg",
      lineHeight: "24px",
    },
    lg: {
      fontSize: "xl",
      lineHeight: "27px",
    },
    xl: {
      fontSize: "2xl",
      lineHeight: "36px",
    },
  },
};
