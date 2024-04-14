import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

const WhatIsMyIpScreen = () => {
  const [ready, setReady] = React.useState(false);

  const [ipAddress, setIPAddress] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [mapUrl, setMapUrl] = React.useState('');

  const getIPAddress = async () => {
    try {
      setReady(false);
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIPAddress(data.ip);

      const locationResponse = await fetch(`http://ip-api.com/json/${data.ip}`);
      const locationData = await locationResponse.json();

      setLocation(`${locationData.city}, ${locationData.regionName}, ${locationData.country}`);

      setMapUrl(`https://www.google.com/maps/search/?api=1&query=${locationData.lat},${locationData.lon}`);

    } catch (error) {
      console.log(error);
    }
    
    setReady(true);
  };

  React.useEffect(() => {
    getIPAddress();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu ip é:</Text>
      {
        ready ? 
        <Text style={styles.ipAddress}>{ipAddress}</Text> :
        <ActivityIndicator size="large" color="#007AFF" />
      }
      <TouchableOpacity style={styles.button} onPress={() => {if (ready) {getIPAddress()}}}>
        <Feather name="refresh-ccw" size={24} color="#fff" />
        <Text style={styles.buttonText}>Recarregar</Text>
      </TouchableOpacity>
      {
        ready ?
        <Text style={styles.location}>{location}</Text> :
        <ActivityIndicator size="large" color="#007AFF" />
      }
      <TouchableOpacity style={styles.mapsButton} onPress={() => { if (ready) { Linking.openURL(mapUrl) }}}>
        {
          ready ?
          <Text style={styles.mapsButtonText}>Ver no mapa</Text> :
          <ActivityIndicator color="#fff" />
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
  ipAddress: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
  },
  mapsButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  mapsButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  mapImage: {
    width: 400,
    height: 200,
    marginTop: 20,
  },
});

export default WhatIsMyIpScreen;