// React Packages
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Custom Packages
import User from '../../services/user';

// Contexts
import CurrentUserContext from '../../contexts/CurrentUserContext';

// Custom Components
import Button from '../../components/Button/Button';

// Main Component
export default function FaturasScreen() {
  const { setUser } = useContext(CurrentUserContext);

  const handlePress = () => {
    User.logout();
    setUser(false);
  };

  return (
    <View style={styles.container}>
      <Text>Faturas</Text>
      <Button icon="exit-to-app" label="Sair" onPress={handlePress}/>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});