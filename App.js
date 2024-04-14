import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialCommunityIcons } from 'react-native-vector-icons';

import HomeScreen from './screens/HomeScreen';
import ServicosStack from './screens/ServicosStack';
import SuporteScreen from './screens/SuporteScreen';

function TabIcon({ name, color, focused }) {
  return (
    <MaterialCommunityIcons name={focused ? name : name + '-outline'} color={color} size={30} />
  );

}

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#bbb',
        tabBarStyle :{
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: '#3f58df'
        },

        headerTitleAlign: 'center',
        headerTintColor: '#fff',
        headerBackground: () => (
          <View style={{ backgroundColor: '#3f58df', height: 80 }} />
        ),
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: (props) => (
            <TabIcon name="home" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Serviços Stack"
        component={ServicosStack}
        options={{
          tabBarLabel: 'Serviços',
          tabBarIcon: (props) => (
            <TabIcon name="toolbox" {...props} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Faturas"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Faturas',
          tabBarIcon: (props) => (
            <TabIcon name="file-document" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Suporte"
        component={SuporteScreen}
        options={{
          tabBarLabel: 'Suporte',
          tabBarIcon: (props) => (
            <TabIcon name="message-text" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}