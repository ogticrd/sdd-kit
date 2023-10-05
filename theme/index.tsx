import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import React from "react";

import "./index.css";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#003876",
    },
    secondary: {
      main: "#EE2A24",
    },
    info: {
      main: "#0087FF",
    },
    background: {
      default: "#EFF7FF",
    },
  },

  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderTop: "4px solid red",
          boxShadow: "0px 3px 6px #f3f3f3"
        }
      }
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: "16px",
          fontWeight: "400",
          color: "#003579",
          overflow: "unset",

          "& span": {
            color: red[500],
          },
        },
      },
    },
    MuiFormLabel: {
      defaultProps: {
        sx: {
          fontSize: "16px",
          fontWeight: "400",

          "& span": {
            color: red[500],
          },
        },
      },
    },
    // MuiTextField: {
    //   defaultProps: {
    //     sx: {
    //       '& .MuiInputBase-root': {
    //         background: '#F8F8F8',
    //       },
    //     }
    //   }
    // },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: "#0087FF",
          },
        },
      },
    }
  },
});

export const ThemeProvider = ({ children }: any) => {
  return (
    <MUIThemeProvider theme={theme}>
      {children}
    </MUIThemeProvider>
  );
}
