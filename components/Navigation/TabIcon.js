// Assets
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function TabIcon({ name, color, focused }) {
  return <MaterialCommunityIcons name={focused ? name : name + '-outline'} color={color} size={30} />;
}