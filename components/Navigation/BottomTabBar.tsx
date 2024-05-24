import { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "@contexts/ThemeContext";

function Badge({ stateIndex, index, screen, navigation }) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    badgeIcon: {
      color: theme.textPrimary,
    },
    badgeText: {
      color: theme.textPrimary,
    },
  });

  const title = screen.params.title ?? screen.name;
  const isFocused = stateIndex === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: screen.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(screen.name, screen.params);
    }
  };  

  return (
    <TouchableOpacity style={[styles.badge]} key={index} onPress={onPress}>
      <MaterialCommunityIcons name={isFocused ? screen.params.icon :  screen.params.icon + "-outline" } style={[styles.badgeIcon, colors.badgeIcon]} />
      <Text style={[styles.badgeText, colors.badgeText]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default function BottomTabBar({state,navigation}) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    tabBar: {
      backgroundColor: theme.primary,
    },
  });

  const screens = state.routes;
  
  return (
    <View style={[styles.tabBar, colors.tabBar]}>
      {
        screens.map((screen, index) => <Badge key={index} screen={screen} stateIndex={state.index} index={index} navigation={navigation} />)
      }
    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingVertical: 10,
  },
  badge: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeIcon: {
    fontSize: 24,
  },
  badgeText: {
    fontSize: 12,
  }
});