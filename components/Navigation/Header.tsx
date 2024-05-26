import { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Header as CustomHeader, getHeaderTitle } from "@react-navigation/elements";
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "@contexts/ThemeContext";

function headerLeft(paramCanGoBack=true) {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const colors = StyleSheet.create({
    icon: {
      color: theme.textPrimary,
    }
  });

  const onPress = () => {
    navigation.goBack();
  }

  const canGoBack =  navigation.canGoBack() && paramCanGoBack;

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      {canGoBack && <MaterialCommunityIcons name="arrow-left" style={[styles.icon, colors.icon]} />}
    </TouchableOpacity>
  );
}

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

export default function Header({ route }) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    header: {
      backgroundColor: theme.primary,
    },
    headerTitle: {
      color: theme.textPrimary,
    }
  });

  const title = route.params.title ?? route.name;

  return (
    <CustomHeader
      title={title}
      headerLeft={() => headerLeft(route.params.canGoBack)}
      headerRight={headerRight}
      headerTitleAlign="center"
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