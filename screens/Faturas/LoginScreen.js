// React Packages
import { useState } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

// Custom Components
import Button from '../../components/Button/Button';

// Main Component
export default function LoginScreen() {
  const [cpf, setCPF] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () => {
    console.log('CPF:', cpf);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.formField}>
        <Text style={styles.label}>CPF</Text>
        <TextInput inputMode="numeric" textContentType="username" maxLength={11} style={styles.input} onChangeText={text => setCPF(text)}/>

        <Text style={styles.label}>Senha</Text>
        <TextInput textContentType="password" secureTextEntry={true} style={styles.input} onChangeText={text => setPassword(text)}/>
      </View>

      <Button label="Entrar" onPress={handleLogin}/>
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