// Archivo: screens/informacion/DocumentoRequisitosScreen.js
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DocumentoRequisitosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documentos y Requisitos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente el título
    alignItems: 'center' // Centra horizontalmente el título
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default DocumentoRequisitosScreen
