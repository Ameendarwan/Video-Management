/* eslint-disable import/prefer-default-export */
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2F65F6",
      dark: "#0240C7",
      900: "#0240C7",
      800: "#234feb",
      700: "#2F65F6",
      500: "#4685FD",
      300: "#6DAFFF",
      100: "#A4DAFF",
      50: "#E3F8FF",
    },
    secondary: {
      main: "#326eb3",
    },
    warning: {
      main: "#D3A117",
      dark: "#BF900F",
      contrastText: "#fff",
    },
    error: {
      main: "#D80909",
      dark: "#C70202",
    },
    success: {
      main: "#07B375",
      light: "#01915F",
    },
    info: {
      main: "#F3F5F8",
      dark: "#E7EBF1",
    },
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    grey: {
      800: "#222222",
      600: "#5F686E",
      400: "#96A1AC",
      300: "#C1CCDA",
      200: "#DAE4EB",
      100: "#F3F5F8",
      50: "#FAFBFC",
    },
    text: {
      primary: "#212526",
    },
    divider: "#e0e0e0",
  },
  typography: {
    htmlFontSize: 10,
    fontSize: 16,
    body1: {
      color: "#222222",
    },
    allVariants: {
      fontFamily: '"Poppins", sans-serif ',
      color: "#222222",
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
    },
    h1: {
      fontSize: "6.4rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "4.8rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "3.2rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "2.4rem",
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.8rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1.6rem",
      fontWeight: 400,
    },
    subtitle2: {
      fontSize: "1.4rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F5F8",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: `transparent`,
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme: baseTheme }) => ({
          minWidth: 0,
          ...(ownerState.size === "small" && {
            padding: `${baseTheme.spacing(0.25)} ${baseTheme.spacing(1.25)}`,
          }),
          ...(ownerState.size === "medium" && {
            padding: `${baseTheme.spacing(1)} ${baseTheme.spacing(2)}`,
          }),
          ...(ownerState.size === "large" && {
            padding: `${baseTheme.spacing(1)} ${baseTheme.spacing(4)}`,
          }),
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: "fit-content",
          textTransform: "uppercase",
        },
        label: ({ ownerState, theme: baseTheme }) => ({
          ...(ownerState.size === "medium" && {
            padding: `${baseTheme.spacing(0.5)} ${baseTheme.spacing(1.5)}`,
            fontSize: "1.4rem",
          }),
          ...(ownerState.size === "small" && {
            padding: `${baseTheme.spacing(0.25)} ${baseTheme.spacing(1)}`,
            fontSize: "1.2rem",
          }),
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme: baseTheme }) => ({
          borderRadius: `${baseTheme.spacing(0.5)}`,
          fontSize: "1.3rem",
          fontWeight: 600,
          backgroundColor: `${baseTheme.palette.common.black}`,
          color: `${baseTheme.palette.common.white}`,
        }),
        arrow: ({ theme: baseTheme }) => ({
          color: `${baseTheme.palette.common.black}`,
          fontSize: "1rem",
        }),
      },
    },
  },
});
