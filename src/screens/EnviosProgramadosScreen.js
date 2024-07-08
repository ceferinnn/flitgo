import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import Container from '../components/containers/Container'

const EnviosProgramadosScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null)
  const [pedidosProgramados] = useState({
    '2024/06/20': [
      { id: 1, destiny: 'Dirección 1' },
      { id: 2, destiny: 'Dirección 2' }
    ],
    '2024-06-25': [{ id: 3, destiny: 'Dirección 3' }]
  })

  const markedDates = {}
  for (const fecha in pedidosProgramados) {
    markedDates[fecha] = { marked: true, colour: 'blue' } // Marca los días con pedidos
  }

  const onDayPress = day => {
    setSelectedDate(day.dateString)
  }

  const renderPedidos = () => {
    if (!selectedDate || !pedidosProgramados[selectedDate]) {
      console.log(new Date(selectedDate))
      return <Text>Selecciona una fecha para ver los pedidos programados.</Text>
    }

    return pedidosProgramados[selectedDate].map(pedido => (
      <View key={pedido.id} style={styles.pedidoItem}>
        <Text>{pedido.destiny}</Text>
      </View>
    ))
  }

  return (
    <Container>
      <Calendar
        style={styles.calendar}
        markedDates={markedDates}
        onDayPress={onDayPress}
      />
      <View style={styles.pedidosContainer}>{renderPedidos()}</View>
    </Container>
  )
}

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 20
  },
  pedidosContainer: {
    padding: 10
  },
  pedidoItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8
  }
})

export default EnviosProgramadosScreen
