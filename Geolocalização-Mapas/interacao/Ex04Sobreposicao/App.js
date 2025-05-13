import React, { useState } from 'react';
import { View, Text, StatusBar } from 'react-native';
import MapView, { Polygon } from 'react-native-maps';
import styles from './styles';

// Define a aparência da barra de status
StatusBar.setBarStyle('dark-content');

// Áreas definidas no mapa (sem anotação de tipo)
const ipaRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8537168, longitude: -79.0700046 },
    { latitude: 43.8518394, longitude: -79.0725697 },
    { latitude: 43.8481651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0695283 },
  ],
  strokeColor: 'coral',
  strokeWidth: 4,
};

const stoutRegion = {
  coordinates: [
    { latitude: 43.8486744, longitude: -79.0695283 },
    { latitude: 43.8517168, longitude: -79.0710046 },
    { latitude: 43.8518394, longitude: -79.0715697 },
    { latitude: 43.8491651, longitude: -79.0716377 },
    { latitude: 43.8486744, longitude: -79.0693283 },
  ],
  strokeColor: 'firebrick',
  strokeWidth: 4,
};

export default function MyMap() {
  const [ipaStyles, setIpaStyles] = useState([styles.ipaText]);
  const [stoutStyles, setStoutStyles] = useState([styles.stoutText]);
  const [overlays, setOverlays] = useState([ipaRegion]);

  function onClickIpa() {
    setIpaStyles([...ipaStyles, styles.boldText]);
    setStoutStyles([styles.stoutText]);
    setOverlays([ipaRegion]);
  }

  function onClickStout() {
    setStoutStyles([...stoutStyles, styles.boldText]);
    setIpaStyles([styles.ipaText]);
    setOverlays([stoutRegion]);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={ipaStyles} onPress={onClickIpa}>
          IPA Fans
        </Text>
        <Text style={stoutStyles} onPress={onClickStout}>
          Stout Fans
        </Text>
      </View>

      <MapView
        style={styles.mapView}
        showsPointsOfInterest={false}
        initialRegion={{
          latitude: 43.8486744,
          longitude: -79.0695283,
          latitudeDelta: 0.002,
          longitudeDelta: 0.04,
        }}
      >
        {overlays.map((overlay, index) => (
          <Polygon
            key={index}
            coordinates={overlay.coordinates}
            strokeColor={overlay.strokeColor}
            strokeWidth={overlay.strokeWidth}
          />
        ))}
      </MapView>
    </View>
  );
}
