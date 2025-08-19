import { createContext, useContext, useState, type FC, type ReactNode } from "react";
import { darkTheme, lightTheme } from "../styles/theme";

const ThemeContext = createContext({ theme: "dark", toggle: () => {}, getTheme: () => darkTheme });

// eslint-disable-next-line react-refresh/only-export-components
export const useVienconTheme = () => useContext(ThemeContext);

export const VienconThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const toggle = () => setTheme(s => s === 'dark' ? 'light' : 'dark');
  const getTheme = () => theme === 'dark' ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ theme, toggle, getTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}