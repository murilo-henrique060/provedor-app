import { ReactNode, createContext, useState } from "react";
import { Appearance, useColorScheme } from "react-native";

import ColorScheme from "@themes/interfaces/ColorScheme";
import Themes from "@themes/Themes";

const defaultColorScheme = process.env.EXPO_PUBLIC_COLOR_SCHEME ?? "default";

const ThemeContext = createContext({
  systemTheme: "light" as "light" | "dark",
  setSystemTheme: (theme: "light" | "dark") => {},
  colorScheme: "",
  setColorScheme: (colorScheme: string) => {},
  theme: {} as ColorScheme,
});

export default ThemeContext;

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const systemTheme = useColorScheme() ?? "light";
  const setSystemTheme = (theme: "light" | "dark") => Appearance.setColorScheme(theme);
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  const theme = Themes[colorScheme][systemTheme];

  return (
    <ThemeContext.Provider value={{ systemTheme, setSystemTheme, colorScheme, setColorScheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}