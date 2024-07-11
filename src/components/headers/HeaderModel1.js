import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HeaderModel1 = ({ title }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      {/* Botón de retroceso (flecha hacia atrás) */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}>
        <Ionicons name='arrow-back' size={24} color='#fff' />
      </TouchableOpacity>

      {/* Título centrado */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* Espacio vacío a la derecha (para mantener simetría) */}
      <View style={styles.backButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuye los elementos uniformemente
    height: 56, // Altura estándar del header
    backgroundColor: '#18B3E3', // Color de fondo del header principal
    paddingHorizontal: 16 // Padding lateral
  },
  backButton: {
    // Estilos para el botón de retroceso (puedes personalizarlos)
  },
  titleContainer: {
    flex: 1, // Para que el título se centre
    alignItems: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff' // Color de texto blanco
  }
})

export default HeaderModel1
