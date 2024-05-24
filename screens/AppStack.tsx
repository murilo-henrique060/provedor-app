import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "@components/Navigation/Header";
import BottomTabBar from "@components/Navigation/BottomTabBar";

const BottomTab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      {/* Home screen content */}
    </View>
  );
}

export default function AppStack() {
  return (
    <BottomTab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{
        header: Header,
      }}
    >
      <BottomTab.Screen 
        name="Home"
        component={HomeScreen}
        initialParams={{
          title: "Ínicio",
          icon: "home",
        }}
      />
      <BottomTab.Screen
        name="Services Stack"
        component={HomeScreen}
        initialParams={{
          title: "Serviços",
          icon: "toolbox",
        }}
      />
      <BottomTab.Screen
        name="User Area Stack"
        component={HomeScreen}
        initialParams={{
          title: "Área do Usuário",
          icon: "account",
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={HomeScreen}
        initialParams={{
          title: "Suporte",
          icon: "message-text",
        }}
      />
    </BottomTab.Navigator>
  );
}