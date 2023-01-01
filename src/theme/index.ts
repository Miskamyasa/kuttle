import {extendTheme} from "@chakra-ui/react";

import {Button} from "./Button";
import {Heading} from "./Heading";
import {Tag} from "./Tag";
import {Text} from "./Text";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  global,
  letterSpacings,
  lineHeights,
  radii,
  shadows,
  space,
} from "./tokens";


export const kuttieThemeV1 = extendTheme({
  styles: {
    ...global,
  },
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  shadows,
  space,
  radii,
  components: {
    Heading,
    Text,
    Button,
    Tag,
  },
});
