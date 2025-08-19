import { css, Global, ThemeProvider } from "@emotion/react";
import { Events } from "./components/events";
import { theme } from "./styles/theme";
import type { Theme } from "@emotion/react";
import { TableHeaders } from "./components/header";
import { ScheduleGrid } from "./components/grid";

const getGlobalStyle = (theme: Theme) => css`
  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.color.background};
    color: ${theme.color.font.onBackground};
  }

  * {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={(theme) => getGlobalStyle(theme)} />
      <ScheduleGrid>
        <TableHeaders />
        <Events />
      </ScheduleGrid>
    </ThemeProvider>
  );
}

export default App;
