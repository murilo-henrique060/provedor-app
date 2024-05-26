import { useContext } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "@contexts/ThemeContext";

export default function BottomTabBar({ state, descriptors, navigation }) {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    tabBar: {
      backgroundColor: theme.primary,
    },
    badgeIcon: {
      color: theme.textPrimary,
    },
    badgeText: {
      color: theme.textPrimary,
    },
  });

  return (
    <View style={[styles.tabBar, colors.tabBar]}>
      {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
      
          const title = route.params.title ?? options.tabBarLabel ?? options.title ?? route.name;    
          const isFocused = state.index === index;
          
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.jumpTo(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          const opacityStyle = {
            opacity: isFocused ? 1 : 0.8,
          };

          if (route.params.hidden) return null;

          return (
            <TouchableOpacity style={[styles.badge, opacityStyle]} key={index} onPress={onPress} onLongPress={onLongPress}>
              <MaterialCommunityIcons name={isFocused ? route.params.icon :  route.params.icon + "-outline" } style={[styles.badgeIcon, colors.badgeIcon]} />
              <Text style={[styles.badgeText, colors.badgeText]}>{title}</Text>
            </TouchableOpacity>
          );
        })
      }
    </View>
  );
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