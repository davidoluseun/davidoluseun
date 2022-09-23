import { Box, Heading, Grid } from "@chakra-ui/react";
import { FaReact, FaServer, FaLaptopCode } from "react-icons/fa";
import ServicesItem from "./common/ServicesItem";

const Services = () => {
  return (
    <Box as="section" py="60px" id="services">
      <Heading mb="12" textAlign="center" fontSize="40px" lineHeight="1.3">
        What I Do
      </Heading>
      <Box
        mx="auto"
        maxW={{ sm: "480px", md: "600px", lg: "960px", xl: "1280px" }}
      >
        <Grid
          gap="20px"
          templateColumns={{
            lg: "repeat(3, 1fr)",
          }}
        >
          <ServicesItem
            ItemIcon={FaLaptopCode}
            title="Web Design"
            text="With HTML, CSS, JavaScript, Bootstrap and Wordpress, I design
                semantics, responsive and accessible websites. I pay great
                details to the internal functionality and overall user
                experience of the product."
          />
          <ServicesItem
            ItemIcon={FaReact}
            title="Frontend Web Development"
            text="I build scalable and modular front-end architectures which are
              responsive, aesthetically pleasing and accessible to all users
              on wide range of devices and platforms."
          />
          <ServicesItem
            ItemIcon={FaServer}
            title="Fullstack Web Development"
            text="I work on both front-end and back-end to develop fully fledge
              application providing end-to-end services, authentication,
              authorization and user-facing UI."
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
