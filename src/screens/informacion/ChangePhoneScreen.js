import React, { useState, useRef } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'

import TextInputField from '../../components/forms/TextInputField'
import Button from '../../components/Button'
import Container from '../../components/containers/Container'

const ChangePhoneSchema = Yup.object().shape({
  newPhone: Yup.string().required('El nuevo teléfono es requerido')
})

const ChangePhoneScreen = () => {
  const [loadingButton, setLoadingButton] = useState(false)

  const handleSubmit = async values => {
    setLoadingButton(true)
    try {
      // Aquí iría la lógica para enviar la petición de cambio de número
      // Simulamos una demora
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Nuevo número:', values.newPhone)
    } catch (error) {
      console.error('Error al cambiar el número:', error)
      // Aquí manejarías errores, mostrando mensajes al usuario, etc.
    } finally {
      setLoadingButton(false)
    }
  }

  return (
    <Container>
      <Formik
        initialValues={{ newPhone: '' }}
        validationSchema={ChangePhoneSchema}
        onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <>
            <View style={{ flex: 1 }}>
              <TextInputField
                name='newPhone'
                placeholder='Nuevo número de teléfono'
                keyboardType='phone-pad'
              />
            </View>

            <Button
              title='Guardar cambios'
              primary
              loading={loadingButton}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Container>
  )
}

const styles = StyleSheet.create({})

export default ChangePhoneScreen
