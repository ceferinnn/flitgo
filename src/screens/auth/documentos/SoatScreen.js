import React, { useState, useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const SoatScreen = ({ navigation }) => {
  const { setRegistroData, registroVehicle } = useContext(RegistroContext)
  const [archivo, setArchivo] = useState(null)

  const handleFileChange = file => {
    setArchivo(file)
  }

  const handleSubmit = async () => {
    // Verificar si las fotos están cargadas
    if (!archivo) {
      Alert.alert('Error', 'Por favor, suba el pdf o imagen del soat.')
      return
    }

    const file_soat = {
      uri: archivo.uri,
      name: archivo.name,
      type: archivo.type
    }

    registroVehicle.append('file_soat', file_soat)

    /*  setRegistroData(prevData => ({
      ...prevData,
      file_soat: {
        uri: archivo.uri,
        name: archivo.name,
        type: archivo.type
      }
    })) */

    // Navega a la siguiente pantalla
    navigation.navigate('ContinuarRegistro')
  }

  return (
    <ContainerScroll>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Suba un archivo PDF o imagen</Text>
        <MediaPicker
          onFileChange={file => handleFileChange(file)}
          mode='document'
        />
      </View>

      <Button title='Continuar' onPress={handleSubmit} primary />
    </ContainerScroll>
  )
}

export default SoatScreen
