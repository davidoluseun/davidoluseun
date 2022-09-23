import { Box, IconButton } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { CgMenuRight } from "react-icons/cg";

type NavTogglerProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const NavToggler = ({ isOpen, onToggle }: NavTogglerProps) => {
  return (
    <Box display={{ lg: "none" }} mr="50px">
      <IconButton
        p={{ base: "2", lg: "3" }}
        bg="transparent !important"
        border="1px solid"
        borderColor="transparent"
        aria-controls="nav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={onToggle}
        _focus={{ boxShadow: "0 0 0 2px #fff !important" }}
        icon={isOpen ? <MdClose size="24px" /> : <CgMenuRight size="24px" />}
      />
    </Box>
  );
};

export default NavToggler;
