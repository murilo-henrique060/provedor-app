// React Packages
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const TopTab = createMaterialTopTabNavigator();

function FaturasScreen({ route: {params: { state }}}) {
  return (
    <ScrollView>
      <View>
        <Text>{state}</Text>
      </View>
    </ScrollView>
  )
}

// Main Component
export default function FaturasStack() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Faturas Abertas" component={FaturasScreen} initialParams={{ state: 'abertas' }}/>
      <TopTab.Screen name="Faturas Vencidas" component={FaturasScreen} initialParams={{ state: 'vencidas' }}/>
    </TopTab.Navigator>
  )
}

// Styles