import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FallarConfirmacionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Fallar'
        backgroundColor='#F44336'
        iconName='close-circle'
      />
      <Text style={styles.text}>
        No hay nada más importante que el compromiso. Los repartidores solo
        pueden fallar hasta 3 pedidos en un periodo de 1 mes. Ten en cuenta que
        si excedes esta cantidad de fallas FlitGo procederá a bloquearte de
        manera indeterminada.
        <Text>¿ Deseas continuar ?</Text>
      </Text>
      <Ionicons name='sad-outline' size={100} color='gray' />

      <View
        style={{
          flexDirection: 'row',
          width: '80%',
          justifyContent: 'space-between'
        }}>
        <Button
          title='No'
          onPress={() => {
            navigation.goBack()
          }}
          style={styles.button}
          primary
        />
        <Button
          title='Si, fallar'
          onPress={() => {
            navigation.navigate('Fallaste')
          }}
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
  }
})

export default FallarConfirmacionScreen
