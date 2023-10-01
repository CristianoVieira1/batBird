import React from "react";
import { ThemeProvider } from "styled-components/native";

import theme from ".";

const withTheme = (component: React.ReactNode) => (
  <ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export { withTheme };
