import { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Header as CustomHeader, getHeaderTitle } from "@react-navigation/elements";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "@contexts/ThemeContext";

function headerRight() {
  const { systemTheme, setSystemTheme, theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    icon: {
      color: theme.textPrimary,
    }
  });

  const toggleTheme = () => {
    const newTheme = systemTheme === "light" ? "dark" : "light";
    setSystemTheme(newTheme);
  }

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={toggleTheme}>
      {
        systemTheme === "light" ?
        <MaterialCommunityIcons name="white-balance-sunny" style={[styles.icon, colors.icon]} /> :
        <MaterialCommunityIcons name="weather-night" style={[styles.icon, colors.icon]} />
      }
    </TouchableOpacity>
  );
}

export default function Header({ options, route }) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    header: {
      backgroundColor: theme.primary,
    },
    headerTitle: {
      color: theme.textPrimary,
    }
  });

  const title = getHeaderTitle(options, route.name);

  return (
    <CustomHeader
      title={title}
      headerRight={headerRight}
      headerStyle={colors.header}
      headerTitleStyle={colors.headerTitle}
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    width: undefined,
    height: "100%",
    aspectRatio: 1,
  },
  icon: {
    fontSize: 24,
  }
});