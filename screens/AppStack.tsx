import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Header from "@components/Navigation/Header";
import BottomTabBar from "@components/Navigation/BottomTabBar";

import HomeScreen from "@screens/AppScreens/HomeScreen";

const BottomTab = createBottomTabNavigator();

export default function AppStack() {
  return (
    <BottomTab.Navigator
      tabBar={(props) => <BottomTabBar {...props} />}
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
          canGoBack: false,
        }}
      />
      <BottomTab.Screen
        name="Services Stack"
        component={HomeScreen}
        initialParams={{
          title: "Serviços",
          icon: "toolbox",
          canGoBack: false,
        }}
      />
      <BottomTab.Screen
        name="User Area Stack"
        component={HomeScreen}
        initialParams={{
          title: "Área do Usuário",
          icon: "account",
          canGoBack: false,
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={HomeScreen}
        initialParams={{
          title: "Suporte",
          icon: "message-text",
          canGoBack: false,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={HomeScreen}
        initialParams={{
          title: "Configurações",
          hidden: true,
        }}
      />
    </BottomTab.Navigator>
  );
}