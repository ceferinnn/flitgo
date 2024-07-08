import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Yup from 'yup'
import { Formik } from 'formik'

import TextInputField from '../../components/forms/TextInputField'
import Button from '../../components/Button'
import Container from '../../components/containers/Container'

const ChangePasswordSchema = Yup.object().shape({
  currentPassword: Yup.string().required('La contraseña actual es requerida'),
  newPassword: Yup.string()
    .required('La nueva contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres'),
  repeatPassword: Yup.string()
    .required('Repite la nueva contraseña')
    .oneOf([Yup.ref('newPassword'), null], 'Las contraseñas deben coincidir')
})

const ChangePasswordScreen = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const [loadingButton, setLoadingButton] = useState(false)

  const toggleCurrentPasswordVisibility = () =>
    setShowCurrentPassword(!showCurrentPassword)
  const toggleNewPasswordVisibility = () => setShowNewPassword(!showNewPassword)
  const toggleRepeatPasswordVisibility = () =>
    setShowRepeatPassword(!showRepeatPassword)

  const handleSubmit = values => {
    setLoadingButton(true)
    setTimeout(() => {
      console.log(values)
      setLoadingButton(false)
    }, 1000)
  }

  return (
    <Container>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          repeatPassword: ''
        }}
        validationSchema={ChangePasswordSchema}
        onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <>
            <View style={{ flex: 1 }}>
              <View style={styles.inputContainer}>
                <TextInputField
                  name='currentPassword'
                  placeholder='Contraseña actual'
                  secureTextEntry={!showCurrentPassword}
                  style={styles.inputField}
                />
                <TouchableOpacity
                  onPress={toggleCurrentPasswordVisibility}
                  style={styles.iconContainer}>
                  <Ionicons
                    name={showCurrentPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color='gray'
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInputField
                  name='newPassword'
                  placeholder='Nueva contraseña'
                  secureTextEntry={!showNewPassword}
                  style={styles.inputField}
                />
                <TouchableOpacity
                  onPress={toggleNewPasswordVisibility}
                  style={styles.iconContainer}>
                  <Ionicons
                    name={showNewPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color='gray'
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.inputContainer}>
                <TextInputField
                  name='repeatPassword'
                  placeholder='Repita contraseña'
                  secureTextEntry={!showRepeatPassword}
                  style={styles.inputField}
                />
                <TouchableOpacity
                  onPress={toggleRepeatPasswordVisibility}
                  style={styles.iconContainer}>
                  <Ionicons
                    name={showRepeatPassword ? 'eye-off' : 'eye'}
                    size={24}
                    color='gray'
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Button
              title='Guardar cambios'
              onPress={handleSubmit}
              primary
              loading={loadingButton}
            />
          </>
        )}
      </Formik>
    </Container>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25
  },
  inputField: {
    flex: 1
  },
  iconContainer: {
    padding: 10
  }
})

export default ChangePasswordScreen
