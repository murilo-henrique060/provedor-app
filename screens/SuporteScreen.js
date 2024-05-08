// React Packages
import { View, Text, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';

// Custom Packages
import formatPhone from '../utils/phoneFormatter';

// Custom Components
import Button from '../components/Button/Button';

// Main Component
export default function SuporteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Entre em contato pelo WhatsApp pelo número:</Text>
      <Text style={styles.phoneNumber}>{ formatPhone(process.env.EXPO_PUBLIC_SUPPORT_PHONE_NUMBER) }</Text>

      <Button icon="whatsapp" label="Acessar o Whatsapp" style={styles.button} onPress={() => { Linking.openURL(`https://wa.me/${process.env.EXPO_PUBLIC_SUPPORT_PHONE_NUMBER}`) }}/>
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
});