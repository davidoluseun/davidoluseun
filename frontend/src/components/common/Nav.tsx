import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

type NavProps = {
  isOpen: boolean;
};

const Nav = ({ isOpen }: NavProps) => {
  return (
    <Flex
      as="nav"
      id="nav"
      width="100%"
      align="center"
      justify="flex-end"
      maxW={{ lg: "80%" }}
      mr={{ lg: "14" }}
      direction={{ base: "column", lg: "row" }}
      flexBasis={{ base: "100%", lg: "auto" }}
      display={{ base: isOpen ? "flex" : "none", lg: "flex" }}
    >
      <NavLink to="home" href="/#home" text="Home" />
      <NavLink to="services" href="/#services" text="Services" />
      <NavLink to="about" href="/#about" text="About" />
      <NavLink to="projects" href="/#projects" text="Projects" />
      <NavLink to="contact" href="/#contact" text="Contact" />
    </Flex>
  );
};

export default Nav;
