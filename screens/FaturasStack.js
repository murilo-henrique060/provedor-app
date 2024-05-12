// React Packages
import { createContext, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Custom Packages
import User from '../services/user';

// Contexts
import CurrentUserContext from '../contexts/CurrentUserContext';

// Screens
import LoginScreen from './Faturas/LoginScreen';
import FaturasScreen from './Faturas/FaturasScreen';

const Stack = createStackNavigator();

// Main Component
export default function FaturasStack() {
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
          <Stack.Screen name="Faturas" component={FaturasScreen} options={{ headerLeft: () => null, gestureEnabled: false }} /> :
          <Stack.Screen name="Login" component={LoginScreen} />
        }
      </Stack.Navigator>
    </CurrentUserContext.Provider>
  );
};