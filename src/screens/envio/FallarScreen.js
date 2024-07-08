import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Ionicons from 'react-native-vector-icons/Ionicons'

const FallarScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title='Fallar'
        backgroundColor='#F44336'
        iconName='close-circle'
      />
      <Text style={styles.text}>
        Estás a punto de dar por perdido uno de los pedidos del cliente. Esto te
        obligará a retornar al punto de origen, además ganarás menos por el
        envío.
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
          title='Si'
          onPress={() => {
            navigation.navigate('FallarConfirmacion')
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

export default FallarScreen
