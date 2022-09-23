import {
  Flex,
  Link,
  VisuallyHidden,
  Icon,
  List,
  ListItem,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaPhone, FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  const { colorMode } = useColorMode();
  
  return (
    <Flex
      as="aside"
      align="center"
      direction="column"
      position="fixed"
      width={{ lg: "100px", xl: "200px" }}
      bottom="0"
      display={{ base: "none", lg: "flex" }}
    >
      <List>
        <ListItem>
          <Link
            p="3"
            isExternal
            display="inline-block"
            href="https://github.com/davidoluseun"
          >
            <VisuallyHidden>Github</VisuallyHidden>
            <Icon
              color={colorMode === "light" ? "#000" : "#fff"}
              as={FaGithub}
              boxSize="6"
            />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            p="3"
            isExternal
            display="inline-block"
            href="https://www.linkedin.com/in/oluwaseun-anifowose-460001165/"
          >
            <VisuallyHidden>LinkedIn</VisuallyHidden>
            <Icon as={FaLinkedinIn} boxSize="6" />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            p="3"
            isExternal
            display="inline-block"
            href="https://twitter.com/ADavidOluseun"
          >
            <VisuallyHidden>Twitter</VisuallyHidden>
            <Icon as={FaTwitter} boxSize="6" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="tel:09154105623" p="3" display="inline-block">
            <VisuallyHidden>Phone number</VisuallyHidden>
            <Icon as={FaPhone} boxSize="6" />
          </Link>
        </ListItem>
      </List>

      <Divider
        mt="5"
        borderColor={colorMode === "light" ? "#000" : "#fff"}
        orientation="vertical"
        height="90px"
      />
    </Flex>
  );
};

export default SocialMedia;
