import {
  Box,
  Text,
  Heading,
  Grid,
  GridItem,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { MdDoneAll } from "react-icons/md";
import AboutImg from "../images/about.jpg";

const About = () => {
  return (
    <Box as="section" py="60px" id="about">
      <Heading
        as="h2"
        mb="12"
        textAlign="center"
        fontSize="40px"
        lineHeight="1.3"
      >
        About
      </Heading>

      <Grid
        gap={{ md: "14" }}
        templateColumns={{ base: "1fr", md: "1fr .6fr" }}
      >
        <GridItem>
          <Text mb="4">
            I’m an engineering graduate of Federal University of Technology,
            Minna Nigeria. A Full-stack Web Developer with 2+ years of
            experience.
          </Text>
          <Text mb="4">
            I have profound understanding of Responsive Web Design and Web
            Accessibility. I implement pixel-perfect interfaces, passionate
            about building UIs that users love to use.
          </Text>

          <Text mb="4">Technologies I work with includes:</Text>

          <List display="grid" gridTemplateColumns="repeat(2, 1fr)">
            <Box>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                HTML
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                CSS
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                JavaScript
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                TypeScript
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                React
              </ListItem>
            </Box>

            <Box>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                Redux
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                Chakra UI
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                Node
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                Express
              </ListItem>
              <ListItem>
                <ListIcon as={MdDoneAll} color="primary" boxSize="5" />
                MongoDB
              </ListItem>
            </Box>
          </List>
        </GridItem>

        <GridItem
          maxW="300px"
          mt={{ base: "50px", md: "0" }}
          justifySelf={{ base: "center", md: "start" }}
        >
          <Image src={AboutImg} alt="Headshot" borderRadius="sm" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
