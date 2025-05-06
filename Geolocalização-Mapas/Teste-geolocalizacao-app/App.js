import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import styles from './styles';

// Insira sua chave da API do Google Maps aqui
const API_KEY = "";
const BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&latlng=`;

export default function WhereAmI() {
  const [address, setAddress] = useState('Loading...');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    let watcher;

    const requestLocation = async () => {
      // Solicita permissão de localização
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      // Função para tratar a posição
      const handlePosition = ({ coords: { latitude, longitude } }) => {
        setLatitude(latitude);
        setLongitude(longitude);
        fetchAddressFromCoords(latitude, longitude);
      };

      // Obtém posição atual
      const location = await Location.getCurrentPositionAsync({});
      handlePosition(location);

      // Observa mudanças na posição
      watcher = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Highest },
        handlePosition
      );
    };

    // Converte coordenadas para endereço usando a API do Google Maps
    const fetchAddressFromCoords = async (lat, lng) => {
      try {
        const response = await fetch(`${BASE_URL}${lat},${lng}`);
        const data = await response.json();
        if (data.results.length > 0) {
          setAddress(data.results[0].formatted_address);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    requestLocation();

    // Limpa o observador ao desmontar
    return () => {
      watcher?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Address: {address}</Text>
      <Text style={styles.label}>Latitude: {latitude}</Text>
      <Text style={styles.label}>Longitude: {longitude}</Text>
    </View>
  );
}
