import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import React from "react";

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
    fontFamily: ['Poppins', 'sans-serif'].join(','),
    h1: {
      fontWeight: '600',
      fontSize: '60px',
      lineHeight: '80px',
      color: '#003876',
    },
    h2: {
      fontWeight: '500',
      fontSize: '60px',
      lineHeight: '90px',
      color: '#000000',
    },
    body1: {
      fontSize: '16px',
      color: '#433E3E',
      fontWeight: '400',
    },
    body2: {
      fontSize: '16px',
      color: '#000000',
      fontWeight: '400',
    },
    subtitle2: {
      fontWeight: '600',
      fontSize: '32px',
    },
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
