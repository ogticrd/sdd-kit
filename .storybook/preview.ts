import { withThemeFromJSXProvider } from "@storybook/addon-styling";

import { theme } from "../theme";

import { CssBaseline, ThemeProvider } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
