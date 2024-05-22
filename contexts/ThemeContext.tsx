import { ReactNode, createContext, useState } from "react";
import { useColorScheme } from "react-native";

import ColorScheme from "@themes/interfaces/ColorScheme";
import Themes from "@themes/Themes";

const defaultColorScheme = process.env.EXPO_PUBLIC_COLOR_SCHEME ?? "default";

const ThemeContext = createContext({
  systemTheme: "",
  setSystemTheme: (theme: "light" | "dark") => {},
  colorScheme: "",
  setColorScheme: (colorScheme: string) => {},
  theme: {} as ColorScheme,
});

export default ThemeContext;

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [systemTheme, setSystemTheme] = useState(useColorScheme() ?? "light");
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  const theme = Themes[colorScheme][systemTheme];

  return (
    <ThemeContext.Provider value={{ systemTheme, setSystemTheme, colorScheme, setColorScheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}