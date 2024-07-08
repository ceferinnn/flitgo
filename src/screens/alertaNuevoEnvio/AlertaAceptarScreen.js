import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AlertaAceptarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="thumbs-up-outline" size={100} color="green" /> 
      <Text style={styles.text}>
      ¡Felicidades! El envío le ha sido asignado con éxito. Su tasa de aceptación ha mejorado a 53%. Dirígete ahora al punto de recojo.
      </Text>
      <Ionicons name="happy-outline" size={100} color="gray" /> 
      <Button 
        title="Aceptar" 
        onPress={() => { navigation.navigate("Alerta") }}
        style={styles.button}
        primary
      />
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
  text: {
    fontSize: 37,
    textAlign: 'center',
    marginBottom: 20,
  },
  porcentaje:{
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
});

export default AlertaAceptarScreen;
