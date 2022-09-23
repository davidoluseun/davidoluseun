import { Link } from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";

type NavLinkProps = {
  to: string;
  href: string;
  text: string;
};

const NavLink = ({ to, href, text }: NavLinkProps) => {
  return (
    <Link
      as={ScrollLink}
      to={to}
      spy={true}
      offset={-60}
      smooth={"easeInOutQuint"}
      duration={300}
      activeClass="active"
      href={href}
      display="block"
      p={{ base: "3", lg: "10px" }}
      mx={{ lg: "2" }}
      my={{ base: "2", lg: "0" }}
      w="120px"
      textAlign="center"
      fontWeight="semibold"
      _hover={{ textDecor: "none", color: "#fff" }}
      _focus={{ boxShadow: "0 0 0 2px #fff !important" }}
    >
      {text}
    </Link>
  );
};

export default NavLink;
