import React, { useState, useContext } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const LicenciaScreen = ({ navigation }) => {
  const { setRegistroData } = useContext(RegistroContext)
  const [photo_license_frontal, setFotoLicenciaFrente] = useState(null)
  const [photo_license_rear, setFotoLicenciaPosterior] = useState(null)

  const handleFileChange = (file, type) => {
    if (type === 'photo_license_frontal') {
      setFotoLicenciaFrente(file)
    } else if (type === 'photo_license_rear') {
      setFotoLicenciaPosterior(file)
    }
  }

  const handleSubmit = async () => {
    if (!photo_license_rear || !photo_license_frontal) {
      Alert.alert('Error', 'Por favor, seleccione ambas fotos de la licencia.')
      return
    }

    try {
      const licenciaData = {
        photo_license_rear,
        photo_license_frontal
      }

      setRegistroData(prevData => ({
        ...prevData,
        datosDriver: { ...prevData.datosDriver, ...licenciaData }
      }))
      navigation.navigate('ContinuarRegistro')
    } catch (error) {
      console.error('Error al guardar los datos de la licencia:', error)
      Alert.alert('Error', 'Ocurrió un error. Por favor, inténtelo de nuevo.')
    }
  }

  return (
    <ContainerScroll>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara frontal</Text>
        <MediaPicker
          onFileChange={file => handleFileChange(file, 'photo_license_frontal')}
          mode='image'
        />
        {photo_license_frontal && (
          <Image
            source={{ uri: photo_license_frontal.uri }}
            style={styles.fotoVehiculo}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara posterior</Text>
        <MediaPicker
          onFileChange={file => handleFileChange(file, 'photo_license_rear')}
          mode='image'
        />
        {photo_license_rear && (
          <Image
            source={{ uri: photo_license_rear.uri }}
            style={styles.fotoVehiculo}
          />
        )}
      </View>

      <Button title='Continuar' onPress={handleSubmit} primary />
    </ContainerScroll>
  )
}

export default LicenciaScreen
