import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native'

const CustomHeader = ({ title }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        style={styles.iconButton}>
        <Ionicons name='menu' size={24} color='#fff' />
      </TouchableOpacity>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // Eliminamos la altura fija
    minHeight: 56, // Altura mínima para que no sea demasiado pequeño
    backgroundColor: '#18B3E3',
    paddingHorizontal: 16
  },
  iconButton: {
    marginRight: 16 // Espacio entre el icono y el título
  },
  headerContent: {
    flex: 1 // Para que el título ocupe el espacio disponible
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff' // Color de texto blanco
  }
})

export default CustomHeader
