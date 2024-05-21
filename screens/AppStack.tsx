import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ColorScheme from '@themes/ColorScheme';
import ThemeContext from '@contexts/ThemeContext';

const BottomTab = createBottomTabNavigator();

function HomeScreen() {
  return null;
}

export default function AppStack() {
  const { theme } = useContext(ThemeContext) as { theme: ColorScheme };

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