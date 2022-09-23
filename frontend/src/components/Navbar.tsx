import { Flex, useColorMode, useDisclosure } from "@chakra-ui/react";
import NavToggler from "./common/NavToggler";
import ThemeToggler from "./common/ThemeToggler";
import Nav from "./common/Nav";
import Logo from "./common/Logo";

const Navbar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Flex
      top="0"
      as="header"
      align="center"
      zIndex="sticky"
      position="sticky"
      justify="space-between"
      color="rgba(240, 246, 252, 0.8)"
      py={{ base: "10px", lg: "6.5px" }}
      wrap={{ base: "wrap", lg: "nowrap" }}
      px={{ base: "18px", lg: "10", xl: "76px" }}
      bg={colorMode === "light" ? "primary" : "dark"}
      borderBottom={colorMode === "dark" ? "1px solid #30363d" : ""}
    >
      <Logo />
      <NavToggler isOpen={isOpen} onToggle={onToggle} />
      <Nav isOpen={isOpen} />
      <ThemeToggler />
    </Flex>
  );
};

export default Navbar;
