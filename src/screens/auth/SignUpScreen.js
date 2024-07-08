import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Alert
} from 'react-native'

import FormikForm from '../../components/forms/FormikForm'
import Button from '../../components/Button'
import TextInputField from '../../components/forms/TextInputField'
import PickerField from '../../components/forms/PickerField'
import * as validations from './validations/SignUp'
import { API_URL } from '../../constants'
import { FechaComponent } from '../../components/FechaComponent'

const SignUpScreen = ({ navigation }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      const form = {
        user_name: values.user_name,
        email: values.email,
        password: values.password,
        first_name: values.first_name,
        last_name: values.last_name,
        document_type: values.document_type,
        document_number: values.document_number,
        number_prefix: '+51',
        number: values.number,
        nationality: values.nationality,
        birth_day: values.birth_day,
        sponsorship: values.sponsorship || null
      }

      const response = await fetch(API_URL + '/api/auth/register/delivery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (response.ok) {
        navigation.navigate('Login')
      } else {
        setSubmitting(false)
        Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo.')
      }
    } catch (error) {
      console.log(error)
      setSubmitting(false)
      Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  const tipoDocs = [
    { label: 'DNI', value: 'dni' },
    { label: 'Carnet de Extranjería', value: 'foreigner_card' },
    { label: 'Pasaporte', value: 'passport' }
  ]

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FormikForm
        initialValues={validations.initialValues}
        validationSchema={validations.signUpValidationSchema}
        onSubmit={handleSubmit}
        style={styles.form}>
        {({ handleSubmit, isSubmitting }) => (
          <>
            <View style={styles.row}>
              <TextInputField
                name='sponsorship'
                label='Patrocinador'
                style={styles.input}
              />
              <TextInputField
                name='nationality'
                label='Nacionalidad'
                style={styles.input}
              />
            </View>

            <TextInputField
              name='user_name'
              label='Nombre de usuario'
              style={styles.input}
            />

            <View style={styles.row}>
              <PickerField
                name='document_type'
                label='Tipo de DOC'
                options={tipoDocs.map(doc => ({
                  label: doc.label,
                  value: doc.value
                }))}
                style={styles.input}
              />
              <TextInputField
                name='document_number'
                label='N° DOC'
                style={styles.input}
              />
            </View>
            <FechaComponent
              showDatePicker={showDatePicker}
              setShowDatePicker={setShowDatePicker}
              name='birth_day'
              label='Fecha Nacimiento'
            />

            <TextInputField
              name='first_name'
              label='Nombres completos'
              style={styles.input}
            />
            <TextInputField
              name='last_name'
              label='Apellidos completos'
              style={styles.input}
            />
            <TextInputField
              name='email'
              label='Email'
              style={styles.input}
              keyboardType='email-address'
            />
            <TextInputField
              name='number'
              label='Número de celular'
              style={styles.input}
              keyboardType='phone-pad'
            />
            <TextInputField
              name='password'
              label='Contraseña'
              style={styles.input}
              secureTextEntry
            />
            <TextInputField
              name='confirmPassword'
              label='Repetir contraseña'
              style={styles.input}
              secureTextEntry
            />

            <View style={styles.checkboxContainer}>
              <Switch
                value={isChecked}
                onValueChange={setIsChecked}
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isChecked ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
              />
              <Text style={styles.label}>Acepto términos y condiciones</Text>
            </View>

            <Button
              title='Enviar'
              onPress={handleSubmit}
              primary
              disabled={!isChecked}
              loading={isSubmitting}
              style={styles.button}
            />
          </>
        )}
      </FormikForm>

      <View style={styles.loginLinkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLink}>
            ¿Ya tienes cuenta?{' '}
            <Text style={{ fontWeight: 'bold' }}>Inicia sesión</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  form: {
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  input: {
    flex: 1,
    marginRight: 5,
    color: '#222'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  checkbox: {
    marginRight: 8
  },
  button: {
    marginTop: 20
  },
  loginLinkContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  loginLink: {
    color: '#222',
    fontSize: 16
  }
})

export default SignUpScreen
