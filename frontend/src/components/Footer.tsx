import {
  Box,
  Flex,
  Text,
  Icon,
  Link,
  VisuallyHidden,
  useColorMode,
} from "@chakra-ui/react";
import { MdFavorite } from "react-icons/md";
import { FaTwitter, FaGithub, FaPhone, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex p="5" as="footer" direction="column" align={{ base: "center" }}>
      <Box my="2">
        <Link
          p="2"
          isExternal
          display="inline-block"
          href="https://github.com/davidoluseun"
        >
          <VisuallyHidden>Github</VisuallyHidden>
          <Icon
            boxSize="5"
            as={FaGithub}
            color={colorMode === "light" ? "#000" : "#fff"}
          />
        </Link>

        <Link
          p="2"
          isExternal
          display="inline-block"
          href="https://www.linkedin.com/in/oluwaseun-anifowose-460001165/"
        >
          <VisuallyHidden>LinkedIn</VisuallyHidden>
          <Icon as={FaLinkedinIn} boxSize="5" />
        </Link>

        <Link
          p="2"
          isExternal
          display="inline-block"
          href="https://twitter.com/ADavidOluseun"
        >
          <VisuallyHidden>Twitter</VisuallyHidden>
          <Icon as={FaTwitter} boxSize="5" />
        </Link>

        <Link href="tel:09154105623" p="2" display="inline-block">
          <VisuallyHidden>Phone number</VisuallyHidden>
          <Icon as={FaPhone} boxSize="5" />
        </Link>
      </Box>

      <Box>
        <Text>
          Made with{" "}
          <Text as="em" verticalAlign="sub">
            <VisuallyHidden>love</VisuallyHidden>
            <Icon as={MdFavorite} boxSize="5" color="#dc004e" />
          </Text>{" "}
          by <Link href="#">aod</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
