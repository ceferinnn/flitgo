// Archivo: screens/home/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CountdownCircle from '../../components/CountdownCircle';
import MapWithRoute from '../../components/MapWithRoute';
import RouteDetailsList from '../../components/RouteDetailsList';
import Button from '../../components/Button';



const coordinates = [
  { latitude: -12.04318, longitude: -77.02824 }, // Ejemplo de coordenadas Lima
  { latitude: -12.05874, longitude: -77.03481 },
  { latitude: -12.08517, longitude: -77.03416 },
  { latitude: -12.09283, longitude: -77.02258 },
  { latitude: -12.1048, longitude: -77.02275 },
  { latitude: -12.11819, longitude: -77.01391 },
  { latitude: -12.13143, longitude: -77.00014 },
  { latitude: -12.04318, longitude: -77.02824 },
];

const routeDetails = [
  { address: 'Juan Fanning 433', district: 'Miraflores', postalCode: '15074', apartment: '301', time: '10 am' },
  { address: 'Av. Arequipa 123', district: 'Lince', postalCode: '15046', time: '1pm' },
  { address: 'Juan Fanning 433', district: 'Miraflores', postalCode: '15074', apartment: '301', time: '3pm' },
  { address: 'Av. Arequipa 123', district: 'Lince', postalCode: '15046', time: '4pm' },
  { address: 'Juan Fanning 433', district: 'Miraflores', postalCode: '15074', apartment: '301', time: '5pm' },
  { address: 'Av. Arequipa 123', district: 'Lince', postalCode: '15046', time: '6pm' },
  // ... más detalles de la ruta
];

const AlertaScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20
      }}>
        <Text style={{
          fontSize: 23, marginRight: 10, flexShrink: 1,
        }}>Atento, tienes una propuesta de envío</Text>
        <CountdownCircle initialSeconds={100} />
      </View>

      <View>
        <Text>Distancia al punto de recojo: 1.3km</Text>
      </View>
      <MapWithRoute coordinates={coordinates} />
      <View style={styles.bloque}>

        <Text style={styles.title}>RESUMEN DEL ENVÍO</Text>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>N° 10000054</Text>
          <Text style={styles.value}>HELENA SAC</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>CLIENTE:</Text>
          <Text style={styles.value}>HELENA SAC</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>PEDIDOS:</Text>
          <Text style={styles.value}>5</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>H-inicio:</Text>
          <Text style={styles.value}>10:00am</Text>
          <Text style={styles.label}>H-Fin:</Text>
          <Text style={styles.value}>1:00pm</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.label}>Duración total:</Text>
          <Text style={styles.value}>2 horas 15min</Text>
        </View>

      </View>

      <View style={styles.bloque}>
        <Text style={styles.title}>RUTA</Text>
        <RouteDetailsList routeDetails={routeDetails} />
      </View>

      <View style={styles.decisionBar}>
      <Button 
        title="Aceptar" 
        onPress={() => { navigation.navigate('AlertaAceptar') }} 
        backgroundColor="#4CAF50" // Verde
        style={styles.decisionBarButton}
      />
      <Button 
        title="Rechazar" 
        onPress={() => { navigation.navigate('AlertaRechazar') }} 
        backgroundColor="#F44336" // Rojo
        style={styles.decisionBarButton}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,  // Permite que ScrollView ocupe todo el espacio disponible
    alignItems: 'center',
    padding: 20, // Espacio alrededor de los elementos para evitar que se peguen a los bordes
  },
  bloque: { backgroundColor: '#e6f6f5', width: '100%', padding: 10, marginTop: 20 },
  text: {
    fontSize: 24,
  },
  iconButton: {
    padding: 0
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // O 'space-around' si quieres espacio entre los botones
    width: '100%',
  },
  title: {
    textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5, fontSize: 18
  },
  value: {
    flex: 1, fontSize: 18
  },
  separator: {
    marginHorizontal: 10,
  },
  decisionBar: { 
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
    marginTop:20
  },
  decisionBarButton: { 
    flex: 1, 
    marginHorizontal: 5, 
  },
});

export default AlertaScreen;
