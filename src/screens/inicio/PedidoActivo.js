import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const PedidoActivo = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => navigation.navigate('Envío')}>
        <View style={styles.negocioInfo}>
          <Image
            source={require('../../assets/user.png')}
            style={styles.negocioImagen}
          />
          <Text style={styles.negocioNombre}>HELENA SAC</Text>
          <Text style={styles.negocioPedidos}>1250 pedidos</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Pedido activo</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Origen:</Text>
            <Text style={styles.info}>Los recuerdos 124, San Borja 15024</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Valor:</Text>
            <Text style={styles.info}>S/49.23 sin igv</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Distancia total:</Text>
            <Text style={styles.info}>30.2Km</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Destinos:</Text>
            <Text style={styles.info}>5</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20
  },
  contentContainer: {
    // Nuevo contenedor para alinear imagen e información
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 // Espacio entre la imagen y la información del negocio
  },
  infoContainer: {
    flex: 1, // Para que la información ocupe el espacio disponible
    marginLeft: 15 // Espacio entre la imagen y la información
  },
  title: {
    fontSize: 20, // Título más grande
    fontWeight: 'bold',
    color: '#333' // Color de texto más oscuro
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#555' // Color de etiqueta un poco más oscuro
  },
  info: {
    flex: 1
  },
  negocioImagen: {
    width: 60, // Imagen un poco más grande
    height: 60,
    borderRadius: 30 // Bordes más redondeados
  },
  negocioInfo: {
    alignItems: 'flex-start' // Alinear a la izquierda la información del negocio
  }
})

export default PedidoActivo
