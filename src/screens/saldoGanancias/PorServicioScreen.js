import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Container from '../../components/containers/Container'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../../components/Button'

const movimientos = [
  {
    id: 1,
    fechaSolicitud: '10-08-2021',
    cuenta: 'CTA BCP 192 145214 995',
    operacion: '949220',
    fechaOperacion: '',
    monto: -150.0,
    transaccion: '00004',
    tipo: 'RETIRO',
    estado: 'realizado',
    error: null
  },
  {
    id: 2,
    fechaSolicitud: '15-09-2023',
    cuenta: 'CTA Interbank 001-234567890',
    operacion: '876123',
    fechaOperacion: '16-09-2023',
    monto: 350.8,
    transaccion: '00012',
    tipo: 'INGRESO',
    estado: 'pendiente',
    error: null
  },
  {
    id: 3,
    fechaSolicitud: '22-02-2024',
    cuenta: 'CTA BBVA 987-654321098',
    operacion: '555841',
    fechaOperacion: '23-02-2024',
    monto: -50.25,
    transaccion: '00020',
    tipo: 'TRANS',
    estado: 'error',
    error: 'Fondos insuficientes'
  },
  {
    id: 4,
    fechaSolicitud: '03-05-2024',
    cuenta: 'CTA Scotiabank 111-098765432',
    operacion: '128569',
    fechaOperacion: '03-05-2024',
    monto: 100.0,
    transaccion: '00018',
    tipo: 'INGRESO',
    estado: 'realizado',
    error: null
  },
  {
    id: 5,
    fechaSolicitud: '03-05-2024',
    cuenta: 'CTA Scotiabank 111-098765432',
    operacion: '128569',
    fechaOperacion: '03-05-2024',
    monto: 100.0,
    transaccion: '00018',
    tipo: 'INGRESO',
    estado: 'realizado',
    error: null
  },
  {
    id: 6,
    fechaSolicitud: '03-05-2024',
    cuenta: 'CTA Scotiabank 111-098765432',
    operacion: '128569',
    fechaOperacion: '03-05-2024',
    monto: 100.0,
    transaccion: '00018',
    tipo: 'INGRESO',
    estado: 'realizado',
    error: null
  },
  {
    id: 7,
    fechaSolicitud: '03-05-2024',
    cuenta: 'CTA Scotiabank 111-098765432',
    operacion: '128569',
    fechaOperacion: '03-05-2024',
    monto: 100.0,
    transaccion: '00018',
    tipo: 'INGRESO',
    estado: 'realizado',
    error: null
  }
]

const PorServicioScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    let iconName, iconColor

    switch (item.tipo) {
      case 'RETIRO':
        iconName = 'arrow-down-circle'
        iconColor = 'red'
        break
      case 'INGRESO':
        iconName = 'arrow-up-circle'
        iconColor = 'green'
        break
      case 'TRANS':
        iconName = 'swap-horizontal'
        iconColor = 'blue'
        break
      default:
        iconName = 'help-circle' // Icono por defecto si no se encuentra el tipo
        iconColor = 'gray'
    }
    return (
      <View style={styles.movimientoItem}>
        <View style={styles.movimientoDetalles}>
          <Text style={styles.texto}>Solicitud: {item.fechaSolicitud}</Text>
          <Text style={styles.texto}>{item.cuenta}</Text>
          <Text style={styles.texto}>OP: {item.operacion}</Text>
          <Text style={styles.texto}>Fecha: {item.fechaOperacion}</Text>
        </View>
        <View style={styles.movimientoMonto}>
          <View style={styles.tipoContainer}>
            <Text style={styles.textoTipo}>{item.tipo}</Text>
            <Ionicons name={iconName} size={20} color={iconColor} />
          </View>
          <View style={styles.montoContainer}>
            <FontAwesome
              name={item.monto > 0 ? 'plus-circle' : 'minus-circle'}
              size={20}
              color={item.monto > 0 ? 'green' : 'red'}
            />
            <Text
              style={[
                styles.montoTexto,
                item.monto > 0 ? styles.montoPositivo : styles.montoNegativo
              ]}>
              {item.tipo === 'TRANS' ? '' : item.monto > 0 ? '+' : '-'}S/{' '}
              {Math.abs(item.monto).toFixed(2)}
            </Text>
          </View>
          <Text style={styles.texto}>Trans N° {item.transaccion}</Text>
          {item.estado === 'realizado' && (
            <Ionicons name='checkmark-circle' size={24} color='green' />
          )}
          {item.estado === 'pendiente' && (
            <MaterialIcons name='pending-actions' size={24} color='orange' />
          )}
          {item.estado === 'error' && (
            <Ionicons name='close-circle' size={24} color='red' />
          )}
          {item.error && <Text style={styles.errorText}>{item.error}</Text>}
        </View>
      </View>
    )
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>Saldo disponible</Text>
          <Text style={styles.saldo}>S/ 180.00</Text>
        </View>
        <FlatList
          data={movimientos}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Button
          title='Retirar'
          primary
          onPress={() => navigation.navigate('PorServicioRetirar')}
        />
        <Button
          title='Transferir'
          primary
          onPress={() => navigation.navigate('PorServicioTransferir')}
        />
      </View>
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
  movimientoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  movimientoDetalles: {
    flex: 1,
    marginRight: 10
  },
  movimientoMonto: {
    alignItems: 'flex-end'
  },
  textoTipo: {
    fontSize: 19,
    fontWeight: 'bold',
    marginRight: 5
  },
  texto: {
    fontSize: 14,
    color: '#555'
  },
  montoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4
  },
  montoTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5
  },
  montoPositivo: {
    color: 'green'
  },
  montoNegativo: {
    color: 'red'
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12
  },
  listContainer: {
    paddingVertical: 10
  },
  tipoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default PorServicioScreen
