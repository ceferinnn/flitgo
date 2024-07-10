import { useContext, useState } from 'react'
import { View } from 'react-native'

import { RegistroContext } from '../../../contexts/RegistroContext'
import { Text } from 'react-native-svg'
import Button from '../../../components/Button'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import styles from './style'

const FotoPerfilScreen = ({ navigation }) => {
  const { setRegistroData, registroDriver } = useContext(RegistroContext)
  const [photo_person, setFotoLicenciaPosterior] = useState(null)

  const handleFileChange = file => {
    setFotoLicenciaPosterior(file)
  }

  const handleSubmit = async () => {
    if (!photo_person) {
      Alert.alert('Error', 'Por favor, seleccione una foto de perfil')
      return
    }

    const perfil = {
      uri: photo_person.uri,
      name: photo_person.fileName,
      type: 'image/jpeg'
    }

    registroDriver.append('photo_person', perfil)

    /*  setRegistroData(prevData => ({
      ...prevData,
      photo_person: {
        uri: photo_person.uri,
        name: photo_person.fileName,
        type: 'image/jpeg'
      }
    })) */
    navigation.navigate('ContinuarRegistro')
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
