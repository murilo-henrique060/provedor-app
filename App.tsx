import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import { ThemeContextProvider } from "@contexts/ThemeContext";

import AppStack from "@screens/AppStack";

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}