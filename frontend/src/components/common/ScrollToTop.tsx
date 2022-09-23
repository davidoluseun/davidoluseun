import * as React from "react";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { animateScroll as scroll } from "react-scroll";
import { FaRocket } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const { colorMode } = useColorMode();

  const revealToTop = React.useCallback(() => {
    let halfHeight = document.body.clientHeight / 2;

    if (window.scrollY > halfHeight && isVisible === false) setIsVisible(true);

    if (window.scrollY < halfHeight && isVisible === true) setIsVisible(false);
  }, [isVisible]);

  React.useEffect(() => {
    window.addEventListener("scroll", revealToTop);

    return () => {
      window.removeEventListener("scroll", revealToTop);
    };
  }, [isVisible, revealToTop]);

  const handleToTop = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    scroll.scrollToTop({
      duration: 300,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Box display={isVisible ? "block" : "none"}>
      <IconButton
        bg="transparent !important"
        pt="2"
        border="1px solid"
        color={colorMode === "light" ? "#000" : "#fff"}
        borderColor="transparent"
        position="fixed"
        bottom="30px"
        right="20px"
        aria-label="Scroll to top"
        onClick={handleToTop}
        icon={<FaRocket style={{ transform: "rotate(315deg)" }} size="24px" />}
      />
    </Box>
  );
};

export default ScrollToTop;
