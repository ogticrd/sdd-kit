import { CssBaseline, ThemeProvider } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";

import { theme } from "../theme";

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
