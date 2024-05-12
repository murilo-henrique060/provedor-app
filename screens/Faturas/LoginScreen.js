// React Packages
import { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

// Custom Packages
import User from '../../services/user';

// Contexts
import CurrentUserContext from '../../contexts/CurrentUserContext';

// Custom Components
import Button from '../../components/Button/Button';

// Main Component
export default function LoginScreen() {
  const { setUser } = useContext(CurrentUserContext);

  const [cpf, setCPF] = useState(null);
  const [password, setPassword] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    const userId = await User.login(cpf, password);

    if (userId) {
      setError(false);
      setUser(userId);
    } else{
      setError(true);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {error && <Text style={styles.errorLabel}>CPF e/ou senha incorreto(s)</Text>}

      <View style={styles.formField}>
        <Text style={styles.label}>CPF</Text>
        <TextInput inputMode="numeric" textContentType="username" maxLength={11} style={styles.input} onChangeText={text => setCPF(text)}/>

        <Text style={styles.label}>Senha</Text>
        <TextInput textContentType="password" secureTextEntry={true} style={styles.input} onChangeText={text => setPassword(text)}/>
      </View>

      <Button label={loading ? "Entrando..." : "Entrar"} loading={loading} onPress={handleLogin}/>
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

    backgroundColor: '#fff',
  },
  title: {
    paddingBottom: 20,

    fontSize: 32,
    fontWeight: 'bold',
  },
  errorLabel: {
    width: '100%',
    marginBottom: 10,

    textAlign: 'center',
    fontSize: 16,

    color: 'red',
  },
  formField: {
    width: '100%',
    marginBottom: 10,
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
  },
});