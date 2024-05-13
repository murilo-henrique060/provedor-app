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

  const logout = () => {
    User.logout();
    setUser(false);
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.title}>Informações do Usuário</Text>

          <View style={styles.row}>
            <Text>Nome: </Text>
            <Text style={styles.value}>{user.name}</Text>
          </View>

          <View style={styles.row}>
            <Text>CPF: </Text>
            <Text style={styles.value}>{user.cpfCnpj}</Text>
          </View>

          <View style={styles.row}>
            <Text>E-mail: </Text>
            <Text style={styles.value}>{user.email}</Text>
          </View>

          <View style={styles.row}>
            <Text>Telefone: </Text>
            <Text style={styles.value}>{user.mobilePhone}</Text>
          </View>
        </View>

        <View style={styles.column}>
          <Text style={styles.title}>Endereço </Text>

          <View style={styles.row}>
            <Text>Endereço: </Text>
            <Text style={styles.value}>{user.address}</Text>
          </View>

          <View style={styles.row}>
            <Text>Complemento: </Text>
            <Text style={styles.value}>{user.complement}</Text>
          </View>

          <View style={styles.row}>
            <Text>CEP: </Text>
            <Text style={styles.value}>{user.postalCode}</Text>
          </View>

          <View style={styles.row}>
            <Text>País: </Text>
            <Text style={styles.value}>{user.country}</Text>
          </View>

          <View style={styles.row}>
            <Text>Estado: </Text>
            <Text style={styles.value}>{user.state}</Text>
          </View>

          <View style={styles.row}>
            <Text>Bairro: </Text>
            <Text style={styles.value}>{user.province}</Text>
          </View>
        </View>

          <View style={styles.buttonRow}>
            <Button icon="arrow-left" label="Voltar" onPress={() => navigation.goBack()}/>
            <Button icon="exit-to-app" label="Sair" style={{backgroundColor: "#d00"}} onPress={logout}/>
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
  column: {
    flexDirection: 'column',
    gap: 5,
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