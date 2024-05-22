import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import Header from "@components/Navigation/Header";
import BottomTabBar from "@components/Navigation/BottomTabBar";

import ThemeContext from "@contexts/ThemeContext";

const BottomTab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      {/* Home screen content */}
    </View>
  );
}
function tabBarIcon(name) {
  return ({ color, focused }: { color: string, focused: boolean }) => (
    <MaterialCommunityIcons name={focused ? name : name + "-outline"} color={color} style={styles.tabBarIcon} />
  );

}

export default function AppStack() {
  const { theme } = useContext(ThemeContext);

  const colors = StyleSheet.create({
    container: {
      backgroundColor: theme.body,
    },
    tabBar: {
      backgroundColor: theme.primary,
    },
  });

  return (
    <BottomTab.Navigator
      tabBar={BottomTabBar}
      sceneContainerStyle={colors.container}
      screenOptions={{
        header: Header,
        tabBarActiveTintColor: theme.textPrimary,
        tabBarInactiveTintColor: theme.textPrimary + "80",
        tabBarHideOnKeyboard: true,
        tabBarStyle: [styles.tabBar, colors.tabBar],
      }}
    >
      <BottomTab.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          title: "Ínicio",
          tabBarIcon: tabBarIcon("home"),
        }}
      />
      <BottomTab.Screen
        name="Services Stack"
        component={HomeScreen}
        options={{
          title: "Serviços",
          tabBarIcon: tabBarIcon("toolbox"),
        }}
      />
      <BottomTab.Screen
        name="User Area Stack"
        component={HomeScreen}
        options={{
          title: "Área do Usuário",
          tabBarIcon: tabBarIcon("account"),
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={HomeScreen}
        options={{
          title: "Suporte",
          tabBarIcon: tabBarIcon("message-text"),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
  },
  tabBarIcon: {
    fontSize: 24,
  },
});