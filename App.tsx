import { NavigationContainer } from "@react-navigation/native";

import AppStack from "@screens/AppStack";

import { ThemeContextProvider } from "@contexts/ThemeContext";

export default function App() {
  return (
    <ThemeContextProvider>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </ThemeContextProvider>
  );
}