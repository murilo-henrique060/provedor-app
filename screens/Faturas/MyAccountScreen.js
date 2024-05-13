// React Packages
import { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

// Custom Packages
import User from '../../services/user';

// Contexts
import CurrentUserContext from '../../contexts/CurrentUserContext';

// Custom Components
import Button from '../../components/Button/Button';

// Main Component
export default function MyAccountScreen({ navigation }) {
  const { user, setUser } = useContext(CurrentUserContext);
  console.log(user);

  const logout = () => {
    User.logout();
    setUser(false);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <Text style={styles.title}>{user.name}</Text>

        <View style={styles.row}>
          <Text>CPF: </Text>
          <Text style={styles.value}>{user.cpfCnpj}</Text>
        </View>

        <View style={styles.buttonRow}>
          <Button icon="arrow-left" label="Voltar" onPress={() => navigation.goBack()}/>
          <Button icon="exit-to-app" label="Sair da Conta" style={{backgroundColor: "#d00"}} onPress={logout}/>
        </View>
      </View>
    </ScrollView>
  );
}

// Styles
const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    flexDirection: 'column',

    gap: 20,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',

    gap: 20,
  },
  value: {
    fontWeight: 'bold',
  }
});