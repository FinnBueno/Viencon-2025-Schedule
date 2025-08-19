import { createContext, useContext, useState, type FC, type ReactNode } from "react";

const ThemeContext = createContext({ theme: "dark", toggle: () => {} });

// eslint-disable-next-line react-refresh/only-export-components
export const useVienconTheme = () => useContext(ThemeContext);

export const VienconThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const toggle = () => setTheme(s => s === 'dark' ? 'light' : 'dark');
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}