import * as React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  List,
  ListItem,
  LinkBox,
  LinkOverlay,
  Link,
  Icon,
  useColorMode,
  VisuallyHidden,
  Button,
} from "@chakra-ui/react";
import { HiLink } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

type ProjectsProps = {
  projects: projectTypes[];
};

const Projects = ({ projects: allProjects }: ProjectsProps) => {
  const { colorMode } = useColorMode();
  const [showMore, setShowMore] = React.useState(false);

  const projects = !showMore ? allProjects.slice(0, 6) : allProjects;

  const handleShowMoreToggle = () => setShowMore(!showMore);

  return (
    <Flex
      py="60px"
      as="section"
      id="projects"
      align="center"
      direction="column"
    >
      <Box>
        <Heading
          as="h2"
          mb="12"
          textAlign="center"
          fontSize="40px"
          lineHeight="1.3"
        >
          Projects
        </Heading>
        <List
          gridGap="5"
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {projects.map((project) => (
            <ListItem
              p="5"
              key={project._id}
              borderRadius="8px"
              border="1px solid rgba(0, 0, 0, 0.23)"
              borderColor={colorMode === "dark" ? "borderLight" : ""}
            >
              <LinkBox
                h="100%"
                display="flex"
                flexDir="column"
                justifyContent="space-between"
              >
                <Box>
                  <Box mb="4">
                    <Link p="2" isExternal href={project.repo}>
                      <VisuallyHidden>Github Repository</VisuallyHidden>
                      <Icon as={FiGithub} boxSize="5" />
                    </Link>
                    <Link p="2" isExternal href={project.link}>
                      <VisuallyHidden>Website</VisuallyHidden>
                      <Icon as={HiLink} boxSize="5" />
                    </Link>
                  </Box>
                  <Heading
                    as="h3"
                    mb="4"
                    fontSize="18px"
                    lineHeight="1.3"
                    fontWeight="semibold"
                  >
                    <LinkOverlay isExternal href={project.link}>
                      {project.name}
                    </LinkOverlay>
                  </Heading>
                  <Text noOfLines={6} fontSize="16px">
                    {project.desc}
                  </Text>
                </Box>
                <Box>
                  <List display="flex" mt="5">
                    {project.stack.map((s) => (
                      <ListItem key={project._id + s} mr="4" fontSize="12px">
                        {s}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box>

      <Button mt="10" onClick={handleShowMoreToggle}>
        {!showMore ? "Show More" : "Show Less"}
      </Button>
    </Flex>
  );
};

export default Projects;
