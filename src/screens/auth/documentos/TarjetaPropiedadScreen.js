import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const TarjetaPropiedadScreen = ({ navigation }) => {
  const { setRegistroData, registroVehicle } = useContext(RegistroContext)
  const [photo_property_card_frontal, setFotoTarjetaFrente] = useState(null)
  const [photo_property_card_rear, setFotoTarjetaPosterior] = useState(null)

  const handleFileChange = (file, type) => {
    if (type === 'photo_property_card_frontal') {
      setFotoTarjetaFrente(file)
    } else if (type === 'photo_property_card_rear ') {
      setFotoTarjetaPosterior(file)
    }
  }

  const handleSubmit = async () => {
    // Verificar si las fotos están cargadas
    if (!photo_property_card_frontal || !photo_property_card_rear) {
      Alert.alert(
        'Error',
        'Por favor, seleccione ambas fotos de la tarjeta de propiedad.'
      )
      return
    }

    const frontal = {
      uri: photo_property_card_frontal.uri,
      name: photo_property_card_frontal.fileName,
      type: 'image/jpeg'
    }

    const rear = {
      uri: photo_property_card_rear.uri,
      name: photo_property_card_rear.fileName,
      type: 'image/jpeg'
    }

    registroVehicle.append('photo_property_card_frontal', frontal)
    registroVehicle.append('photo_property_card_rear', rear)

    /*   const tarjetaData = {
      photo_property_card_frontal: {
        uri: photo_property_card_frontal.uri,
        name: photo_property_card_frontal.fileName,
        type: 'image/jpeg'
      },
      photo_property_card_rear: {
        uri: photo_property_card_rear.uri,
        name: photo_property_card_rear.fileName,
        type: 'image/jpeg'
      }
    }
    setRegistroData(prevData => ({
      ...prevData,
      ...tarjetaData
    })) */

    navigation.navigate('ContinuarRegistro')
  }

  return (
    <ContainerScroll>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara frontal</Text>
        <MediaPicker
          onFileChange={file =>
            handleFileChange(file, 'photo_property_card_frontal')
          }
          mode='image'
        />
        {photo_property_card_frontal && (
          <Image
            source={{ uri: photo_property_card_frontal.uri }}
            style={styles.fotoVehiculo}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara posterior</Text>
        <MediaPicker
          onFileChange={file =>
            handleFileChange(file, 'photo_property_card_rear ')
          }
          mode='image'
        />
        {photo_property_card_rear && (
          <Image
            source={{ uri: photo_property_card_rear.uri }}
            style={styles.fotoVehiculo}
          />
        )}
      </View>

      <Button title='Continuar' onPress={handleSubmit} primary />
    </ContainerScroll>
  )
}

export default TarjetaPropiedadScreen
