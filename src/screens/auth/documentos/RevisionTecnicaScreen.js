import React, { useState, useContext } from 'react'
import { View, Text, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const RevisionTecnicaScreen = ({ navigation }) => {
  const { setRegistroData, registroVehicle } = useContext(RegistroContext)
  const [archivo, setArchivo] = useState(null)

  const handleFileChange = file => {
    setArchivo(file)
  }

  const handleSubmit = async () => {
    // Verificar si las fotos están cargadas
    if (!archivo) {
      Alert.alert(
        'Error',
        'Por favor, suba el pdf o imagen de la revisión técnica.'
      )
      return
    }

    const photo = {
      uri: archivo.uri,
      name: archivo.name,
      type: archivo.type
    }

    registroVehicle.append('photo_thecnical_review', photo)

    /*   setRegistroData(prevData => ({
      ...prevData,
      photo_thecnical_review: {
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

export default RevisionTecnicaScreen
