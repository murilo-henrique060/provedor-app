import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ThemeContext from "@contexts/ThemeContext";

const BottomTab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      {/* Home screen content */}
    </View>
  );
}

export default function AppStack() {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    container: {
      backgroundColor: theme.body,
    }
  });

  return (
    <BottomTab.Navigator sceneContainerStyle={colors.container}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
    </BottomTab.Navigator>
  );
}