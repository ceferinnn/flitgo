import React, { useState, useContext, useEffect } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const DocumentoIdentidadScreen = ({ navigation }) => {
  const { setRegistroData, registroDriver } = useContext(RegistroContext)
  const [photo_document_identity_frontal, setFotoDocumentoFrente] =
    useState(null)
  const [photo_document_identity_rear, setFotoDocumentoPosterior] =
    useState(null)

  const handleFileChange = (file, type) => {
    if (type === 'photo_document_identity_frontal') {
      setFotoDocumentoFrente(file)
    } else if (type === 'photo_document_identity_rear') {
      setFotoDocumentoPosterior(file)
    }
  }

  const handleSubmit = async () => {
    // Verificar si las fotos están cargadas
    if (!photo_document_identity_frontal || !photo_document_identity_rear) {
      Alert.alert('Error', 'Por favor, seleccione ambas fotos del documento.')
      return
    }

    const frontal = {
      uri: photo_document_identity_frontal.uri,
      name: photo_document_identity_frontal.fileName,
      type: photo_document_identity_frontal.type
    }
    const reversa = {
      uri: photo_document_identity_rear.uri,
      name: photo_document_identity_rear.fileName,
      type: photo_document_identity_rear.type
    }

    registroDriver.append('photo_document_identity_frontal', frontal)
    
    registroDriver.append('photo_document_identity_rear', reversa)

    /*  const documentoData = {
      photo_document_identity_frontal: {
        uri: photo_document_identity_frontal.uri,
        name: photo_document_identity_frontal.fileName,
        type: 'image/jpeg'
      },
      photo_document_identity_rear: {
        uri: photo_document_identity_rear.uri,
        name: photo_document_identity_rear.fileName,
        type: 'image/jpeg'
      }
    }

    setRegistroData(prevData => ({
      ...prevData,
      ...documentoData
    })) */
    navigation.navigate('ContinuarRegistro')
  }

  return (
    <ContainerScroll>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara frontal</Text>
        <MediaPicker
          onFileChange={file =>
            handleFileChange(file, 'photo_document_identity_frontal')
          }
          mode='image'
        />
        {photo_document_identity_frontal && (
          <Image
            source={{ uri: photo_document_identity_frontal.uri }}
            style={styles.fotoVehiculo}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cara posterior</Text>
        <MediaPicker
          onFileChange={file =>
            handleFileChange(file, 'photo_document_identity_rear')
          }
          mode='image'
        />
        {photo_document_identity_rear && (
          <Image
            source={{ uri: photo_document_identity_rear.uri }}
            style={styles.fotoVehiculo}
          />
        )}
      </View>

      <Button title='Continuar' onPress={handleSubmit} primary />
    </ContainerScroll>
  )
}

export default DocumentoIdentidadScreen
