import type { Theme } from "@emotion/react";

export const darkTheme: Theme = {
  color: {
    eventBlock: "rgb(115, 186, 168)",
    location: "rgb(234, 174, 93)",
    background: "#314149",
    font: {
      onBackground: "#fff",
      onForeground: "#000",
      link: "rgb(80, 160, 238)",
    },
  },
};

export const lightTheme: Theme = {
  color: {
    eventBlock: "rgb(115, 186, 168)",
    location: "rgb(234, 174, 93)",
    background: "#EFEFEF",
    font: {
      onBackground: "#000",
      onForeground: "#fff",
      link: "rgb(0, 0, 238)",
    },
  },
};
