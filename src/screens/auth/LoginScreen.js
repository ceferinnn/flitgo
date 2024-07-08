import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/AuthContext'
import Button from '../../components/Button' // Asegúrate de importar tu componente Button
import { LoadingIndicator } from '../../components/LoadingIndicator'
import Ionicons from 'react-native-vector-icons/Ionicons'

const LoginScreen = () => {
  const { login, errorMessage, authChecked, loading } = useContext(AuthContext)
  const navigation = useNavigation()
  const [initializing, setInitializing] = useState(true)

  const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Ingrese email'),
    password: Yup.string()
      .min(6, '¡Demasiado corto!')
      .required('Ingrese la contraseña')
  })

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  useEffect(() => {
    // Esperar a que la autenticación se haya verificado antes de establecer initializing en false
    if (authChecked) {
      setInitializing(false)
    }
  }, [authChecked])

  if (initializing) {
    // Muestra una pantalla de carga mientras se verifica la autenticación
    return <LoadingIndicator />
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')} // Reemplaza con la ruta de tu logo
        style={styles.logo}
      />

      <Formik
        initialValues={{ email: 'correo400@gmail.com', password: 'Jazz2017:v' }}
        validationSchema={validationSchema}
        onSubmit={login}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched
        }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder='Correo electrónico'
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType='email-address'
              autoCapitalize='none'
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              placeholder='Contraseña'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            {errorMessage ? (
              <Text style={styles.error}>{errorMessage}</Text>
            ) : null}

            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.link}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

            <Button
              title='Iniciar Sesión'
              onPress={handleSubmit}
              primary
              style={styles.loginButton}
              loading={loading}
            />
          </>
        )}
      </Formik>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name='logo-facebook' size={24} color='white' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name='logo-google' size={24} color='white' />
        </TouchableOpacity>
      </View>

      <View style={styles.signupLinkContainer}>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signupLink}>
            ¿No tienes cuenta?{' '}
            <Text style={{ fontWeight: 'bold', color: '#3f51b5' }}>
              Regístrate
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: 250,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 40,
    alignSelf: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  loginButton: {
    marginTop: 20
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  socialButton: {
    backgroundColor: '#4267B2', // Azul de Facebook
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  googleButton: {
    // Estilo específico para el botón de Google
    backgroundColor: '#DB4437' // Rojo de Google
  },
  signupLinkContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  signupLink: {
    color: '#333',
    fontSize: 16
  },
  link: {
    color: '#3f51b5',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default LoginScreen
