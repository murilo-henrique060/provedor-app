import { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "@contexts/ThemeContext";

export default function NavigationButton({ icon, label, goTo }: { icon: any, label: string, goTo: string }) {
  const { theme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const colors = StyleSheet.create({
    container: {
      borderColor: theme.secondary,
    },
    icon: {
      color: theme.secondary,
    },
    label: {
      color: theme.secondary,
    },
  });

  const onPress = () => {
    navigation.navigate(...[goTo, { title: label }] as never);
  }

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={[styles.container, colors.container]}>
        <MaterialCommunityIcons name={icon} style={[styles.icon, colors.icon]} />
        <Text style={[styles.label, colors.label]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "46%",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: undefined,
    aspectRatio: 1,
    padding: 10,

    borderRadius: 20,
    borderWidth: 5,
  },
  icon: {
    fontSize: 50,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});