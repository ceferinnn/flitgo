import React, { useState } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import DocumentPicker from 'react-native-document-picker'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles, colors } from './styles'

const DocumentPickerComponent = ({ onFileSelected }) => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleDocumentPicker = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf, DocumentPicker.types.images]
      })
      setSelectedFile(result)
      onFileSelected(result)
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Usuario canceló la selección
      } else {
        Alert.alert('Error', 'Hubo un problema al seleccionar el documento')
      }
    }
  }

  return (
    <View>
      <TouchableOpacity onPress={handleDocumentPicker} style={styles.button}>
        <Icon name='document' size={24} color='white' />
        <Text style={styles.buttonText}>Adjuntar Documento</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DocumentPickerComponent
