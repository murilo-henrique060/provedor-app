import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import ThemeContext from "@contexts/ThemeContext";

function Badge({ screen }) {
  const title = screen.options.title ?? screen.name;

  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default function BottomTabBar({ descriptors }) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    tabBar: {
      backgroundColor: theme.primary,
    },
  });

  const screens = Object.entries(descriptors)
  
  return (
    <View style={[styles.tabBar, colors.tabBar]}>
      {
        screens.map(([key, screen]) => <Badge screen={screen} key={key} />)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});