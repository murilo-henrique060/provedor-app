// React Packages
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

// Custom Components
import Button from '../components/Button/Button';

// Main Component
const SuporteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Entre em contato pelo WhatsApp pelo número:</Text>
      <Text style={styles.phoneNumber}>(91) 9 9249-5001</Text>

      <Button style={styles.button} onPress={() => { Linking.openURL('https://wa.me/5591992495001') }}>
        <MaterialCommunityIcons name="whatsapp" style={styles.buttonIcon}/>
        <Text style={styles.buttonText}>Acessar o WhatsApp</Text>
      </Button>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
  },
  phoneNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#25d366',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonIcon: {
    fontSize: 26,
    color: '#fff',
  },
});

export default SuporteScreen;