import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps } from "@chakra-ui/styled-system";

const breakpoints = {
  sm: "480px",
  md: "600px",
  lg: "960px",
  xl: "1280px",
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#fff", "#161b22")(props),
      color: mode("#000", "#fff")(props),
      fontSize: "18px",
    },

    button: {
      bg: "#022d5f !important",
      color: "#fff",
      _focus: {
        boxShadow: mode(
          "0 0 0 2px #000 !important",
          " 0 0 0 2px #fff !important"
        )(props),
      },
    },

    a: {
      _focus: {
        boxShadow: mode(
          "0 0 0 2px #000 !important",
          " 0 0 0 2px #fff !important"
        )(props),
      },
    },
  }),
};

const components = {
  Alert: {
    variants: {
      success: {
        container: {
          bg: "#198754",
        },
      },
      error: {
        container: {
          bg: "#dc3545",
        },
      },
    },
  },
};

const theme = extendTheme({
  breakpoints,
  styles,
  components,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    dark: "#161b22",
    borderLight: "#30363d",
    borderDark: "rgba(0, 0, 0, 0.23)",
    primary: "#022d5f",
    error: "#ff3548",
  },
});

export default theme;
