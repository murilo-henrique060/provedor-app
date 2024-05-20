// React Packages
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlashList } from "@shopify/flash-list";

// Custom Packages
import AssasController from '../../controllers/AssasController';
import CurrentUserContext from '../../contexts/CurrentUserContext';

// Custom Components
import Bill from '../../components/Bill-Invoice/Bill';
const TopTab = createMaterialTopTabNavigator();

function FaturasScreen({ route: {params: { state }}}) {
  const { user } = useContext(CurrentUserContext);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    AssasController.getBills(user, state).then(bills => {
      setBills(bills);
    });
  }, []);
  
  if (bills.length === 0) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#3f58df"/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {
        bills.length > 0 &&
        <FlashList
          data={bills}
          renderItem={({ item }) => <Bill bill={item} />}
          estimatedItemSize={92}
          contentContainerStyle={styles.list}
        />
      }
    </View>
  )
}

// Main Component
export default function FaturasStack() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Faturas Abertas" component={FaturasScreen} initialParams={{ state: 'PENDING' }}/>
      <TopTab.Screen name="Faturas Vencidas" component={FaturasScreen} initialParams={{ state: 'OVERDUE' }}/>
    </TopTab.Navigator>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  list: {
    padding: 20,
  }
});