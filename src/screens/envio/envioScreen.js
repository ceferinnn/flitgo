// Archivo: screens/home/HomeScreen.js
import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MapWithRoute from '../../components/MapWithRoute'
import RouteDetailsButtonList from '../../components/RouteDetailsButtonList'
import Button from '../../components/Button'

const coordinates = [
  { latitude: -12.04318, longitude: -77.02824 }, // Ejemplo de coordenadas Lima
  { latitude: -12.05874, longitude: -77.03481 },
  { latitude: -12.08517, longitude: -77.03416 },
  { latitude: -12.09283, longitude: -77.02258 },
  { latitude: -12.1048, longitude: -77.02275 },
  { latitude: -12.11819, longitude: -77.01391 },
  { latitude: -12.13143, longitude: -77.00014 },
  { latitude: -12.04318, longitude: -77.02824 }
]

const routeDetails = [
  {
    address: 'Juan Fanning 433',
    district: 'Miraflores',
    postalCode: '15074',
    apartment: '301',
    time: '10 am',
    latitude: -12.11819, // Agrega la latitud
    longitude: -77.01391 // Agrega la longitud
  },
  {
    address: 'Av. Arequipa 123',
    district: 'Lince',
    postalCode: '15046',
    time: '1pm',
    latitude: -12.09283, // Agrega la latitud
    longitude: -77.02258 // Agrega la longitud
  }
  // ... más detalles de la ruta
]

const EnvioScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <MapWithRoute coordinates={coordinates} />

      <View style={{ flexDirection: 'row', width: '100%' }}>
        <Button
          title='Cancelar'
          onPress={() => {
            navigation.navigate('CancelarEnvio')
          }}
          backgroundColor='#F44336'
          iconName='close-circle'
          style={{ flex: 2 }}
        />
        <Button
          onPress={() => {}}
          backgroundColor='white'
          iconColor='#666'
          style={[styles.iconButton, { borderWidth: 1, borderColor: '#ccc' }]}
          iconName='hand-right'
        />
        <Button
          onPress={() => {
            /* Lógica para llamar */
          }}
          backgroundColor='#4CAF50'
          iconName='call'
          style={styles.iconButton}
        />
        <Button
          onPress={() => {
            /* Lógica para enviar mensaje */
          }}
          backgroundColor='#3F51B5'
          iconName='chatbubble-ellipses'
          style={styles.iconButton}
        />
      </View>
      <View style={styles.bloque}>
        <RouteDetailsButtonList routeDetails={routeDetails} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que ScrollView ocupe todo el espacio disponible
    alignItems: 'center',
    padding: 20 // Espacio alrededor de los elementos para evitar que se peguen a los bordes
  },
  bloque: {
    backgroundColor: '#e6f6f5',
    width: '100%',
    padding: 10,
    marginTop: 20
  },
  iconButton: { flex: 1 }
})

export default EnvioScreen
