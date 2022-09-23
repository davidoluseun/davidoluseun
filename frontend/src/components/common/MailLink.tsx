import { Link, Flex, Divider, useColorMode } from "@chakra-ui/react";

const VMailLink = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="aside"
      right="0"
      direction="column"
      position="fixed"
      width={{ lg: "126px", xl: "200px" }}
      display={{ base: "none", lg: "flex" }}
      align="center"
    >
      <Divider
        mb="5"
        height="90px"
        orientation="vertical"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
      />

      <Link
        p="2"
        isExternal
        _hover={{ textDecor: "none" }}
        style={{ writingMode: "vertical-rl" }}
        href="mailto:a.davidoluseun@gmail.com"
      >
        a.davidoluseun@gmail.com
      </Link>
    </Flex>
  );
};

export default VMailLink;
