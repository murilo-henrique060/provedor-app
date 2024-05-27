import { createStackNavigator } from '@react-navigation/stack';

import Header from '@components/Navigation/Header';

import ServiceScreen from "@screens/AppScreens/ServiceScreens/ServiceScreen";
import SpeedTestScreen from "@screens/AppScreens/ServiceScreens/SpeedTestScreen";

const Stack = createStackNavigator();

export default function ServicesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: Header,
      }}
    >
      <Stack.Screen
        name="Services"
        component={ServiceScreen}
        initialParams={{
          title: "Serviços",
          canGoBack: false,
        }}
      />
      <Stack.Screen
        name="Speed Test"
        component={SpeedTestScreen}
        initialParams={{
          title: "Teste de Velocidade",
        }}
      />
      <Stack.Screen
        name="My IP"
        component={ServiceScreen}
        initialParams={{
          title: "Meu IP",
        }}
      />
    </Stack.Navigator>
  );
}