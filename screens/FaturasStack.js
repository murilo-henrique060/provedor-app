// React Packages
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from './Faturas/LoginScreen';

const Stack = createStackNavigator();

// Main Component
export default function FaturasStack() {
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
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};