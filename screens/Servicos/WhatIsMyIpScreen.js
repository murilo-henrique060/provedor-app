// React Packages
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import * as Linking from 'expo-linking';

// Assets
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Custom Components
import Button from '../../components/Button/Button';

// Main Component
export default function WhatIsMyIpScreen() {
  const [ready, setReady] = useState(false);

  const [ipAddress, setIPAddress] = useState('');
  const [location, setLocation] = useState('');
  const [mapUrl, setMapUrl] = useState('');

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

  useEffect(() => {
    getIPAddress()
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seu ip é:</Text>
      {
        ready ? 
        <Text style={styles.ipAddress}>{ipAddress}</Text> :
        <ActivityIndicator size="large" color="#007AFF" />
      }

      <Button onPress={() => {if (ready) {getIPAddress()}}}>
        <MaterialCommunityIcons name="refresh" size={24} color="#fff"/>
        <Text style={styles.buttonText}>Recarregar</Text>
      </Button>

      {
        ready ?
        <Text style={styles.location}>{location}</Text> :
        <ActivityIndicator size="large" color="#007AFF" />
      }

      <Button style={styles.mapButton} onPress={() => { if (ready) { Linking.openURL(mapUrl) }}}>
        <MaterialCommunityIcons name="map" size={24} color="#fff"/>
        <Text style={styles.buttonText}>Ver no mapa</Text>
      </Button>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    gap: 20,

    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  mapButton: {
    backgroundColor: '#28a657',
  },
  ipAddress: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 16,
  },
});