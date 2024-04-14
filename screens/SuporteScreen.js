import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const SuporteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Entre em contato pelo WhatsApp pelo número:</Text>
      <Text style={styles.phoneNumber}>(91) 9 9249-5001</Text>
      <TouchableHighlight style={{borderRadius: 5}} onPress={() => { Linking.openURL('https://wa.me/5591992495001') }}>
        <View style={styles.button}>
          <MaterialCommunityIcons name="whatsapp" size={26} color="#fff"/>
          <Text style={styles.buttonText}>Acessar o WhatsApp</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#25d366',
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: '#fff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SuporteScreen;