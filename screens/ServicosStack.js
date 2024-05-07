// React Packages
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import ServicosScreen from './Servicos/ServicosScreen';
import SpeedTestScreen from './Servicos/SpeedTestScreen';
import WhatIsMyIpScreen from './Servicos/WhatIsMyIpScreen';

const Stack = createStackNavigator();

// Main Component
export default function ServicosStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#3f58df',
        },
      }}
    >
      <Stack.Screen name="Serviços" component={ServicosScreen} />
      <Stack.Screen name="Teste de Velocidade" component={SpeedTestScreen} />
      <Stack.Screen name="Meu Ip" component={WhatIsMyIpScreen} />
    </Stack.Navigator>
  );
};