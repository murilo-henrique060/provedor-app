import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ServicosScreen from './Servicos/ServicosScreen';
import SpeedTestScreen from './Servicos/SpeedTestScreen';
import WhatIsMyIpScreen from './Servicos/WhatIsMyIpScreen';

const Stack = createStackNavigator();

const ServicosStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerBackground: () => (
          <View style={{ backgroundColor: '#3f58df', height: "100%" }} />
        ),
      }}
    >
      <Stack.Screen name="Serviços" component={ServicosScreen} />
      <Stack.Screen name="Teste de Velocidade" component={SpeedTestScreen} />
      <Stack.Screen name="Meu Ip" component={WhatIsMyIpScreen} />
    </Stack.Navigator>
  );
};


export default ServicosStack;