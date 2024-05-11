// React Packages
import { View, Text } from 'react-native';

// Main Component
export default function FaturasScreen({ navigation }) {
  navigation.addListener('beforeRemove', (e) => {
    e.preventDefault();
  });

  return (
    <View>
      <Text>Faturas</Text>
    </View>
  );
}