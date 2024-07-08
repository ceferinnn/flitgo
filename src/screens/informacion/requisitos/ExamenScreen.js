// Archivo: screens/informacion/DocumentoRequisitosScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExamenScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Examen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente el título
    alignItems: 'center',     // Centra horizontalmente el título
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ExamenScreen;
