import {ComponentStyleConfig} from "@chakra-ui/react";


export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 500,
    borderRadius: "none",
  },
  variants: {
    solid: {
      bg: "kuttle.gray",
      color: "kuttle.gray.strong",
      border: "1px solid",
      borderColor: "kuttle.gray.strong",
      _hover: {
        bg: "kuttle.gray",
        shadow: "kuttle.default",
      },
    },
    outline: {
      bg: "kuttle.gradient",
      backgroundClip: "text",
      textFillColor: "transparent",
      borderColor: "kuttle.pink",
      _hover: {
        bg: "kuttle.gradient",
        backgroundClip: "text",
        textFillColor: "transparent",
        shadow: "kuttle.pink",
      },
      _active: {
        bg: "kuttle.gradient",
        backgroundClip: "text",
        textFillColor: "transparent",
      },
    },
    highlight: {
      bg: "kuttle.gradient",
      color: "kuttle.white",
      _hover: {
        shadow: "kuttle.pink",
      },
    },
  },
  sizes: {
    xs: {
      fontSize: "xs",
      height: "24px",
      lineHeight: 2,
    },
    sm: {
      fontSize: "sm",
      height: "36px",
      lineHeight: 3,
    },
    md: {
      fontSize: "md",
      height: "44px",
      lineHeight: 4,
    },
    lg: {
      fontSize: "lg",
      height: "60px",
      lineHeight: 5,
    },
    xl: {
      px: 6,
      fontSize: "xl",
      height: "72px",
      lineHeight: 6,
    },
  },
};
