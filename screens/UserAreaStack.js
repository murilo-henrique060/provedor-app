// React Packages
import { createContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Packages
import User from '../services/user';

// Contexts
import CurrentUserContext from '../contexts/CurrentUserContext';

// Screens
import LoginScreen from './UserArea/LoginScreen';
import UserAreaScreen from './UserArea/UserAreaScreen';
import MyAccountScreen from './UserArea/MyAccountScreen';

const Stack = createStackNavigator();

// Main Component
export default function UserAreaStack() {
  const [user, setUser] = useState(User.isLogged());

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#3f58df',
          },
        }}
      >
        {
          user ?
          [
            <Stack.Screen name="Área do Usuário" component={UserAreaScreen} key={0}/>,
            <Stack.Screen name="Minha Conta" component={MyAccountScreen} key={1}/>
          ]
          :
          <Stack.Screen name="Login" component={LoginScreen}/>
        }
      </Stack.Navigator>
    </CurrentUserContext.Provider>
  );
};