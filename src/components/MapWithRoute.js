import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapWithRoute = ({coordinates}) => {
  return (
    <MapView
      style={{ height: 350, width: '100%' }}
      initialRegion={{
        latitude: -12.0825, // Centro de Lima
        longitude: -77.035,
        latitudeDelta: 0.2,
        longitudeDelta: 0.2,
      }}
    >
      <Polyline
        coordinates={coordinates}
        strokeColor="#9E4D9C"
        strokeWidth={5}
      />
      {coordinates.map((coord, index) => (
        <Marker
          key={index}
          coordinate={coord}
          title={`Parada ${index + 1}`}
        >
          <View style={styles.marker}>
            <Text style={styles.markerText}>{index + 1}</Text>
          </View>
        </Marker>
      ))}
      <Marker
        coordinate={coordinates[0]} // Inicio de la ruta
        title="Inicio"
      >
        {/* Aquí puedes agregar un icono de casa o bandera de inicio */}
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: '#9CDBEB',
    padding: 5,
    borderRadius: 10,
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MapWithRoute;
