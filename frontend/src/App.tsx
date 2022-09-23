import * as React from "react";
import { ChakraProvider as Chakra, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Services from "./components/Services";
import SocialMedia from "./components/common/SocialMedia";
import MailLink from "./components/common/MailLink";
import ScrollToTop from "./components/common/ScrollToTop";
import Loader from "./components/common/Loader";
import Error from "./components/common/Error";
import { getProjects } from "./services/projectService";
import theme from "./theme/theme";

export const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [projects, setProjects] = React.useState<projectTypes[]>([]);

  React.useEffect(() => {
    let didCancel = false;

    const fetchInitBooks = async () => {
      setError(false);

      try {
        const { data } = await getProjects();
        if (!didCancel) setProjects(data);
      } catch (ex) {
        if (!didCancel) setError(true);
      }
      if (!didCancel) setLoading(false);
    };

    if (loading) fetchInitBooks();

    return () => {
      didCancel = true;
    };
  }, [loading]);

  const handleTryAgain = () => setLoading(true);

  return (
    <Chakra theme={theme}>
      {loading ? (
        <Loader />
      ) : (
        <>
          {error ? (
            <Error
              onTryAgain={handleTryAgain}
              text="An unexpected error occurred. Please try again."
            />
          ) : (
            <>
              <Navbar />
              <SocialMedia />
              <MailLink />
              <Box as="main" px={{ base: "18px", lg: "100px", xl: "200px" }}>
                <Hero />
                <Services />
                <About />
                <Projects projects={projects} />
                <Contact />
              </Box>
              <Footer />
              <ScrollToTop />
            </>
          )}
        </>
      )}
    </Chakra>
  );
};
