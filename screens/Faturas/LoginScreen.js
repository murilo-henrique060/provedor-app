// React Packages
import { Text, View, TextInput, StyleSheet } from 'react-native';

// Custom Components
import Button from '../../components/Button/Button';

// Main Component
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.label}>Senha</Text>
      <TextInput style={styles.input}/>

      <Button label="Entrar"/>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  title: {
    paddingBottom: 20,

    fontSize: 32,
    fontWeight: 'bold',
  },
  label: {
    width: '100%',
    
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 50,
    marginVertical: 10,
    padding: 10,

    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
  }
});