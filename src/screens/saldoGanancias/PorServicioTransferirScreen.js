import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Container from '../../components/containers/Container'
import Button from '../../components/Button'

const PorServicioTransferirScreen = ({ navigation }) => {
  const [monto, setMonto] = useState('60.00') // Estado para el monto a transferir

  const monederos = [
    // Datos de ejemplo desde JSON (reemplaza con tu fuente de datos real)
    { id: 1, nombre: 'Juan Pablo Olivares Peña', imagen: 'user.png' },
    { id: 2, nombre: 'Helena SAC', imagen: 'user.png' }
    // ... más monederos
  ]

  const [loadingButton, setLoadingButton] = useState(false)

  const handleSubmit = async () => {
    setLoadingButton(true)
    try {
      // Aquí iría la lógica para enviar la petición de retiro
      // Simulamos una demora
      await new Promise(resolve => setTimeout(resolve, 1000))
      navigation.navigate('PorServicioTransferirConfirmado')
    } catch (error) {
      console.error('Error al procesar el retiro:', error)
      // Aquí manejarías errores, mostrando mensajes al usuario, etc.
    } finally {
      setLoadingButton(false)
    }
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Saldo disponible</Text>
          <Text style={styles.saldo}>S/ 180.00</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text>Monto a transferir:</Text>
          <TextInput
            style={styles.input}
            value={monto}
            onChangeText={setMonto}
            keyboardType='numeric'
          />
        </View>

        <ScrollView style={styles.monederosContainer}>
          <Text>Elija el monedero al que desea transferir:</Text>
          {monederos.map(monedero => (
            <TouchableOpacity key={monedero.id} style={styles.monederoItem}>
              <Image
                source={require('../../assets/user.png')}
                style={styles.monederoImagen}
              />
              <Text>{monedero.nombre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <Button
        title='Transferir'
        loading={loadingButton}
        iconName='swap-horizontal'
        primary
        onPress={() => handleSubmit()}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  saldo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#18B3E3'
  },
  inputContainer: {
    padding: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 8,
    fontSize: 16
  },
  monederosContainer: {
    padding: 20
  },
  monederoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2 // Para Android
  },
  monederoImagen: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25
  },
  monederoNombre: {
    fontSize: 18,
    fontWeight: '500'
  }
})

export default PorServicioTransferirScreen
