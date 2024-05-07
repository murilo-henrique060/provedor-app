// React Packages
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

// Custom Components
import TabIcon from './components/Navigation/TabIcon';

// Screens
import HomeScreen from './screens/HomeScreen';
import ServicosStack from './screens/ServicosStack';
import FaturasStack from './screens/FaturasStack';
import SuporteScreen from './screens/SuporteScreen';

const Tab = createBottomTabNavigator();

// Main Component
export default function App() {
  return (
    <NavigationContainer>
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
          headerStyle: {
            backgroundColor: '#3f58df',
          },
        }}
      >
        <Tab.Screen name="Início" component={HomeScreen} options={{ tabBarLabel: 'Início', tabBarIcon: (props) => <TabIcon name="home" {...props} /> }}/>
        <Tab.Screen name="Serviços Stack" component={ServicosStack} options={{ tabBarLabel: 'Serviços', tabBarIcon: (props) => <TabIcon name="toolbox" {...props}/>, headerShown: false }}/>
        <Tab.Screen name="Faturas" component={FaturasStack} options={{ tabBarLabel: 'Faturas', tabBarIcon: (props) => <TabIcon name="file-document" {...props}/>, headerShown: false  }}/>
        <Tab.Screen name="Suporte" component={SuporteScreen} options={{ tabBarLabel: 'Suporte', tabBarIcon: (props) => <TabIcon name="message-text" {...props}/> }}/>
      </Tab.Navigator>
      <StatusBar style="light" backgroundColor="#3f58df"/>
    </NavigationContainer>
  );
}