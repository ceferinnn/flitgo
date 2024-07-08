import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FallasteScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState(null)

  const reasons = [
    'Falta de tiempo',
    'Robo de todo o parte de la mercadería',
    'Accidente o falla mecánica',
    'Emergencia familiar',
    'La zona es muy peligrosa',
    'No había acceso al punto de entrega'
  ]

  const handleReasonSelect = reason => {
    setSelectedReason(reason)
    // Aquí puedes agregar lógica adicional si es necesario, por ejemplo:
    // - Enviar la razón seleccionada a un servidor
    // - Navegar a otra pantalla
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, marginRight: 10 }}>
          ¡Fallaste el pedido!
        </Text>
        <Ionicons name='sad-outline' size={100} color='#f4b336' />
      </View>
      <Text style={styles.text}>
        Explícanos por qué has decidido no entregar el pedido n°1:
      </Text>

      {/* Opciones de radio */}
      <View>
        {reasons.map(reason => (
          <TouchableOpacity
            key={reason}
            onPress={() => handleReasonSelect(reason)}>
            <View style={styles.radioButtonContainer}>
              <View
                style={[
                  styles.radioButton,
                  selectedReason === reason && styles.radioButtonSelected
                ]}
              />
              <Text style={styles.radioText}>{reason}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ alignContent: 'center' }}>
        <Button
          title='Continuar'
          onPress={() => navigation.navigate('Envio', { selectedReason })} // Pasa la razón seleccionada
          style={styles.button}
          primary
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 20
  },
  porcentaje: {
    fontWeight: 'bold'
  },
  button: {
    marginTop: 20
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10
  },
  radioButtonSelected: {
    backgroundColor: '#000'
  },
  radioText: {
    fontSize: 16
  }
})

export default FallasteScreen
