// React Packages
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

// Assets
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Main Component
export default function Card({ icon, label, goTo, navigation }) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(goTo)}>
      <View style={styles.card}>
        <MaterialCommunityIcons name={icon} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    width: '45%',
  },
  card: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,

    justifyContent: 'center',
    alignItems: 'center',
    
    rowGap: 10,
    padding: 10,

    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFA500',
  },
  icon: {
    height: 50,
    fontSize: 50,
    color: '#FFA500',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffa500',
  },
});