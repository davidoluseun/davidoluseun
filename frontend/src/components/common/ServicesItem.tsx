import {
  Box,
  Text,
  Heading,
  Icon,
  GridItem,
  useColorMode,
  As,
} from "@chakra-ui/react";

type ServicesItemProps = {
  ItemIcon: As;
  title: string;
  text: string;
};

const ServicesItem = ({ ItemIcon, title, text }: ServicesItemProps) => {
  const { colorMode } = useColorMode();
  return (
    <GridItem
      p="5"
      border="1px solid rgba(0, 0, 0, 0.23)"
      borderRadius="8px"
      borderColor={colorMode === "dark" ? "borderLight" : ""}
    >
      <Box
        bg="primary"
        color="#fff"
        borderRadius="full"
        boxSize="100px"
        mx="auto"
        display="grid"
        placeContent="center"
      >
        <Icon boxSize="35px" as={ItemIcon} />
      </Box>

      <Heading
        as="h3"
        my="4"
        fontSize="18px"
        lineHeight="1.3"
        textAlign="center"
        fontWeight="semibold"
      >
        {title}
      </Heading>
      <Text textAlign="center">{text}</Text>
    </GridItem>
  );
};

export default ServicesItem;
