import { useContext, useState } from 'react'
import { View } from 'react-native'

import { RegistroContext } from '../../../contexts/RegistroContext'
import { Text } from 'react-native-svg'
import Button from '../../../components/Button'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import styles from './style'

const FotoPerfilScreen = ({ navigation }) => {
  const { setRegistroData } = useContext(RegistroContext)
  const [photo_person, setFotoLicenciaPosterior] = useState(null)

  const handleFileChange = file => {
    setFotoLicenciaPosterior(file)
  }

  const handleSubmit = async () => {
    if (!photo_person) {
      Alert.alert('Error', 'Por favor, seleccione una foto de perfil')
      return
    }

    try {
      setRegistroData(prevData => ({
        ...prevData,
        datosDriver: { ...prevData.datosDriver, photo_person }
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
        <Text style={styles.sectionTitle}>Foto de Perfil</Text>
        <MediaPicker
          onFileChange={file => handleFileChange(file)}
          mode='image'
        />
      </View>

      <Button title='Continuar' onPress={handleSubmit} primary />
    </ContainerScroll>
  )
}
export default FotoPerfilScreen
