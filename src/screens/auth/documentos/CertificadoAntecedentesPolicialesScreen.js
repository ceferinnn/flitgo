import React, { useState, useContext } from 'react'
import { View, Text, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const CertificadoAntecedentesPolicialesScreen = ({ navigation }) => {
  const { setRegistroData, registroDriver } = useContext(RegistroContext)
  const [archivo, setArchivo] = useState(null)

  const handleFileChange = file => {
    setArchivo(file)
  }

  const handleSubmit = async () => {
    if (!archivo) {
      Alert.alert(
        'Error',
        'Por favor, suba el pdf o imagen de los antecedentes policiales.'
      )
      return
    }

    const imageData = {
      uri: archivo.uri,
      name: archivo.name,
      type: archivo.type
    }

    registroDriver.append('file_police_records', imageData)

    /* setRegistroData(prevData => ({
      ...prevData,
      file_police_records: {
        uri: archivo.uri,
        name: archivo.name,
        type: archivo.type
      }
    })) */

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

export default CertificadoAntecedentesPolicialesScreen
