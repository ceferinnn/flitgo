// Archivo: components/RequisitosScreen.js
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const RequisitosScreen = ({ navigation }) => {
  // Se pasan los requisitos como prop
  const requisitos = [
    {
      label: 'Documentos y requisitos',
      iconName: 'document-text-outline',
      status: 'aprobado'
    },
    {
      label: 'Capacitación virtual',
      iconName: 'videocam-outline',
      status: 'pendiente'
    },
    {
      label: 'Examen',
      iconName: 'checkmark-circle-outline',
      status: 'en proceso de revisión'
    }
  ]
  const statusIcons = {
    aprobado: 'checkmark-circle-outline',
    pendiente: 'time-outline',
    'en proceso de revisión': 'hourglass-outline',
    denegado: 'close-circle-outline'
  }

  const statusColors = {
    aprobado: 'green',
    pendiente: 'orange',
    'en proceso de revisión': 'blue',
    denegado: 'red'
  }

  const getIconColor = status => {
    return statusColors[status] || 'gray'
  }

  return (
    <View style={styles.requisitosContainer}>
      <Text style={styles.sectionTitle}>Requisitos para conectarse</Text>
      {requisitos.map((req, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('Requisitos', { screen: req.label })
          }
          style={styles.requisitoItem}>
          <Ionicons name={req.iconName} size={24} color='gray' />
          <Text style={styles.requisitoLabel}>{req.label}</Text>
          <Ionicons
            name={statusIcons[req.status] || 'help-circle-outline'}
            size={24}
            color={getIconColor(req.status)}
            style={styles.statusIcon}
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  requisitosContainer: {
    marginTop: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  requisitoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10, // Añadir padding para mejor apariencia
    borderWidth: 1, // Opcional: borde para separar visualmente los requisitos
    borderColor: '#ccc', // Opcional: color del borde
    borderRadius: 5 // Opcional: esquinas redondeadas
  },
  requisitoLabel: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  },
  statusIcon: {
    marginRight: 10
  }
})

export default RequisitosScreen
