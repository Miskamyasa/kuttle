import {
  Heading,
  VStack,
  HStack,
  Text,
  Box,
  Button,
  Image,
  Grid,
  GridItem,
  Tag,
  Wrap,
} from "@chakra-ui/react";

import {Select} from "../../components/kuttle-select";


const TypographyHeading: React.FC = () => (
  <VStack
    gap={4}
    align="flex-start">
    <Heading
      as="h1"
      size="xl">
      Typography (Heading)
    </Heading>
    <Heading
      as="h1"
      size="xl">
      Heading size=XL
    </Heading>
    <Heading
      as="h1"
      size="lg">
      Heading size=LG
    </Heading>
    <Heading
      as="h2"
      size="md">
      Heading size=MD (default)
    </Heading>
    <Heading
      as="h3"
      size="sm">
      Heading size=SM
    </Heading>
    <Heading
      as="h3"
      size="XS">
      Heading size=XS
    </Heading>
  </VStack>
);

const TypographyText: React.FC = () => (
  <VStack
    gap={4}
    align="flex-start">
    <Heading
      as="h1"
      size="xl">
      Typography (Text)
    </Heading>
    <Text size="xl">Text size=XL</Text>
    <Text size="lg">Text size=LG</Text>
    <Text>Text size=MD (default)</Text>
    <Text size="sm">Text size=SM</Text>
    <Text size="xs">Text size=XS</Text>
  </VStack>
);

const Shadows: React.FC = () => (
  <VStack
    gap={4}
    align="flex-start">
    <Heading
      as="h1"
      size="xl">
      Shadows
    </Heading>
    <HStack gap={4}>
      <Box
        shadow="kuttle.default"
        w={20}
        h={20} />
      <Box
        shadow="kuttle.pink"
        w={20}
        h={20} />
    </HStack>
  </VStack>
);

const Radii: React.FC = () => (
  <VStack
    gap={4}
    align="flex-start">
    <Heading
      as="h1"
      size="xl">
      Radii
    </Heading>
    <Grid
      gap={4}
      templateColumns="repeat(4, 1fr)">
      <Box
        w={20}
        h={20}
        borderRadius="none"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>None</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="sm"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>SM</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="base"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>Base</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="md"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>MD</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="lg"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>LG</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="xl"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>XL</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="2xl"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>2XL</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="3xl"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>3XL</Text>
      </Box>
      <Box
        w={20}
        h={20}
        borderRadius="full"
        textAlign="center"
        pt={5}
        shadow="kuttle.default">
        <Text>Full</Text>
      </Box>
    </Grid>
  </VStack>
);

const Tags: React.FC = () => (
  <VStack
    gap={4}
    align="flex-start">
    <Heading
      as="h1"
      size="xl">
      Tag
    </Heading>
    <HStack gap={4}>
      <Tag>Default</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </HStack>
  </VStack>
);

const Buttons: React.FC = () => (
  <VStack
    gap={4}
    align="flex-start">
    <Heading
      as="h1"
      size="xl">
      Buttons
    </Heading>
    <Wrap spacing={4}>
      <VStack
        gap={4}
        align="flex-start">
        <Button size="xs">Default, XS</Button>
        <Button size="sm">Default, SM</Button>
        <Button size="md">Default, MD (Default size)</Button>
        <Button size="lg">Default, LG</Button>
        <Button size="xl">Default, XL</Button>
      </VStack>
      <VStack
        gap={4}
        align="flex-start">
        <Button
          variant="outline"
          size="xs">
          Outline, XS
        </Button>
        <Button
          variant="outline"
          size="sm">
          Outline, SM
        </Button>
        <Button
          variant="outline"
          size="md">
          Outline, MD (Default size)
        </Button>
        <Button
          variant="outline"
          size="lg">
          Outline, LG
        </Button>
        <Button
          variant="outline"
          size="xl">
          Outline, XL
        </Button>
      </VStack>
      <VStack
        gap={4}
        align="flex-start">
        <Button
          variant="highlight"
          size="xs">
          Highlight, XS
        </Button>
        <Button
          variant="highlight"
          size="sm">
          Highlight, SM
        </Button>
        <Button
          variant="highlight"
          size="md">
          Highlight, MD (Default size)
        </Button>
        <Button
          variant="highlight"
          size="lg">
          Highlight, LG
        </Button>
        <Button
          variant="highlight"
          size="xl">
          OutHighlightline, XL
        </Button>
      </VStack>
    </Wrap>
  </VStack>
);

const options = [
  {value: "chocolate", label: "Chocolate"},
  {value: "strawberry", label: "Strawberry"},
  {value: "vanilla", label: "Vanilla"},
];

const Selects: React.FC = () => (
  <VStack
    gap={4}
    w="60">
    <Heading
      as="h1"
      size="xl">
      Select
    </Heading>
    <Select
      size="sm"
      placeholder="SM size"
      options={options} />
    <Select
      size="md"
      placeholder="MD size"
      options={options} />
    <Select
      size="lg"
      placeholder="LG size"
      options={options} />
  </VStack>
);

export const UIKit: React.FC = () => {
  return (
    <Wrap spacing="28">
      <TypographyHeading />

      <TypographyText />

      <Shadows />

      <Radii />

      <Tags />

      <Buttons />

      <Selects />

    </Wrap>
  );
};
