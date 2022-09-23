import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { MdBrightness4, MdBrightness7 } from "react-icons/md";

const ThemeToggler = () => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MdBrightness7, MdBrightness4);

  return (
    <IconButton
      p={{ base: "2", lg: "3" }}
      bg="transparent !important"
      border="1px solid"
      borderColor="transparent"
      position="absolute"
      right={{ base: "5", lg: "10", xl: "76px" }}
      top="10px"
      aria-label={`Switch to ${text} mode`}
      onClick={toggleColorMode}
      _focus={{ boxShadow: "0 0 0 2px #fff !important" }}
      icon={<SwitchIcon size="24px" />}
    />
  );
};

export default ThemeToggler;
