import React from 'react'
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  StyleSheet
} from 'react-native'
import { commonStyles } from '../../utils/commonStyles'
import PrimaryButton from '../../components/buttons/PrimaryButton'
import SecondaryButton from '../../components/buttons/SecondaryButton'
import MainButton from '../../components/buttons/MainButton'
import { useNavigation } from '@react-navigation/native'

const EditarPerfilScreen = () => {
  const navigation = useNavigation()
  const handleCambiarFoto = () => {}
  const handleEliminarFoto = () => {}
  const addAddress = () => {}
  const handleConfirmar = () => {
    navigation.navigate('Profile')
  }
  return (
    <View style={commonStyles.container}>
      <ScrollView>
        {/* Sección de foto */}
        <View style={styles.sectionTop}>
          <Image
            source={require('../../assets/profile_image.png')}
            style={styles.profileImage}
          />
          <View style={{ flexDirection: 'row' }}>
            <PrimaryButton title='Cambiar Foto' onPress={handleCambiarFoto} />
            <SecondaryButton
              title='Eliminar Foto'
              onPress={handleEliminarFoto}
              buttonStyle={{ marginLeft: 20 }}
            />
          </View>
        </View>

        {/* Sección de Datos Generales */}
        <View style={styles.section}>
          <Text style={commonStyles.title}>Datos Generales</Text>
          <TextInput
            style={[commonStyles.input, styles.input]}
            placeholder='Nombre'
          />
          <TextInput
            style={[commonStyles.input, styles.input]}
            placeholder='Correo electrónico'
          />
          <TextInput
            style={[commonStyles.input, styles.input]}
            placeholder='Número de celular'
          />
          <TextInput
            style={[commonStyles.input, styles.input]}
            placeholder='Fecha de nacimiento'
          />
        </View>

        {/* Sección de Dirección */}
        <View style={styles.section}>
          <Text style={commonStyles.title}>Direcciones</Text>
          <TextInput
            style={[commonStyles.input, styles.input2]}
            placeholder='Av. Dirección 123, Santiago de Surco'
          />
          <TextInput
            style={[commonStyles.input, styles.input2]}
            placeholder='Referencia'
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginTop: 20
            }}>
            <PrimaryButton
              title='Añadir nueva dirección'
              onPress={addAddress}
            />
          </View>
        </View>
      </ScrollView>
      <View style={commonStyles.footer}>
        <MainButton title='Confirmar cambios' onPress={handleConfirmar} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 20
  },
  sectionTop: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 175,
    height: 175,
    borderRadius: 175 / 2,
    marginBottom: 10
  },
  input: { marginVertical: 10 },
  input2: { marginBottom: 10 },
  confirmButtonContainer: {
    marginBottom: 20
  }
})

export default EditarPerfilScreen
