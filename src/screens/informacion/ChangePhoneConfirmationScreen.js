import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ChangePhoneConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambiar phone confirmacion</Text>
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

export default ChangePhoneConfirmationScreen
