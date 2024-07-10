import React, { useState, useContext } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const LicenciaScreen = ({ navigation }) => {
  const { setRegistroData, registroVehicle, registroDriver } =
    useContext(RegistroContext)
  const [photo_license_rear, setFotoLicenciaPosterior] = useState(null)
  const [photo_license_frontal, setphoto_license_frontal] = useState(null)

  const handleFileChange = (file, setArchivo) => {
    setArchivo(file)
  }

  const handleSubmit = async () => {
    if (!photo_license_rear) {
      Alert.alert('Error', 'Por favor, seleccione ambas fotos de la licencia.')
      return
    }

    const licence_rear = {
      uri: photo_license_rear.uri,
      name: photo_license_rear.fileName,
      type: 'image/jpeg'
    }

    const licence_frontal = {
      uri: photo_license_frontal.uri,
      name: photo_license_frontal.fileName,
      type: 'image/jpeg'
    }

    registroVehicle.append('photo_licence_rear', licence_rear)
    registroDriver.append('photo_licence_rear', licence_rear)
    registroDriver.append('photo_license_frontal', licence_frontal)
    /* const licenciaData = {
      photo_license_rear: {
        uri: photo_license_rear.uri,
        name: photo_license_rear.fileName,
        type: 'image/jpeg'
      },
      photo_license_frontal: {
        uri: photo_license_frontal.uri,
        name: photo_license_frontal.fileName,
        type: 'image/jpeg'
      }
    }

    setRegistroData(prevData => ({
      ...prevData,
      ...licenciaData
    })) */
    navigation.navigate('ContinuarRegistro')
  }

  return (
    <ContainerScroll>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara Frontal</Text>
        <MediaPicker
          onFileChange={file =>
            handleFileChange(file, setphoto_license_frontal)
          }
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
        <Text style={styles.sectionTitle}>Cara Trasera</Text>
        <MediaPicker
          onFileChange={file =>
            handleFileChange(file, setFotoLicenciaPosterior)
          }
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
