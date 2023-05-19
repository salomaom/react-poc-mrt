import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: "#009265",
      secondary: "#F5A900",
    },
    space: {
      1: "8px",
      2: "16px",
      3: "24px",
    },
  },
});
