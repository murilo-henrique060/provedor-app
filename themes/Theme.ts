import ColorScheme from "@themes/ColorScheme";

/**
 * Theme
 * 
 * This is used to define the theme of the app.
 * It contains the color schemes for both light and dark mode.
 */
interface Theme {
  light: ColorScheme;
  dark: ColorScheme;
}

export default Theme;