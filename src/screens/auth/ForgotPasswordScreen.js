import React from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation()

  const handleLogin = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Recuperar contraseña</Text>
      <Text style={styles.description}>
        Por favor ingrese el correo electrónico que tiene asociado con su cuenta
        de Pet Hub.
      </Text>
      <TextInput style={styles.input} placeholder='Código electrónico' />

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.haveAccount}>
          ¿Ya tienes cuenta?{' '}
          <Text style={styles.loginLink}>Entra a tu sesión</Text>
        </Text>
      </TouchableOpacity>
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
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  haveAccount: {
    fontSize: 16
  },
  loginLink: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
})

export default ForgotPasswordScreen
