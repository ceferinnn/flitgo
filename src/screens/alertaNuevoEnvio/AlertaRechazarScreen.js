import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AlertaRechazarScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Ionicons name="thumbs-down-outline" size={100} color="red" /> 
      <Text style={styles.text}>
        ¡Ni modo! Ya habrá otros envíos para asignarle. Recuerde que mientras más 
        envíos acepte su tasa de aceptación subirá. Por ahora su tasa es de <Text style={styles.porcentaje}>47%</Text> 
      </Text>
      <Ionicons name="sad-outline" size={100} color="gray" /> 
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

export default AlertaRechazarScreen;
