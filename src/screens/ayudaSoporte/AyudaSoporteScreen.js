import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Container from '../../components/containers/Container'

const AyudaSoporteScreen = ({ navigation }) => {
  return (
    <Container>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('Descargar Manual')}>
          <Icon
            name='file-download'
            size={24}
            color='#333'
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>
            Descargar Manual de instrucciones
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation.navigate('TerminosCondiciones')}>
          <Icon
            name='description'
            size={24}
            color='#333'
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Términos y condiciones</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('Ver Tutorial')}>
          <Icon
            name='school'
            size={24}
            color='#333'
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Tutorial</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => console.log('Iniciar Chat')}>
          <Icon name='chat' size={24} color='#333' style={styles.optionIcon} />
          <Text style={styles.optionText}>Chatea con nosotros</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  )
}

const styles = StyleSheet.create({
  option: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
    flexDirection: 'row'
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500'
  },
  optionIcon: {
    marginRight: 10
  }
})

export default AyudaSoporteScreen
