import { extendTheme } from "@chakra-ui/react";
import { Heading } from "./Heading";
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
import { Text } from "./Text";
import { Button } from "./Button";
import { Tabs } from "./Tabs";
import { Tag } from "./Tag";

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
    Tabs,
    Tag,
  },
});
