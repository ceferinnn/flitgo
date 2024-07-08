import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView
} from 'react-native'
import Button from '../../components/Button'

const CancelarEnvioScreen = ({ navigation }) => {
  const [selectedReason, setSelectedReason] = useState(null)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [additionalDetails, setAdditionalDetails] = useState('')

  const handleReasonSelect = reason => {
    setSelectedReason(reason)
    setSelectedProblem(null) // Reiniciar problema si se cambia la razón
  }

  const handleProblemSelect = problem => {
    setSelectedProblem(problem)
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.question}>
        ¿Está seguro que desea cancelar el recojo? Esto afectará a tu tasa de
        aceptación.
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title='No'
          onPress={() => {
            navigation.navigate('Envio')
          }}
          backgroundColor='#4CAF50'
          style={styles.button}
        />
        <Button
          title='Si, cancelar'
          onPress={() => {
            /* Lógica para cancelar */
          }}
          backgroundColor='#F44336'
          style={styles.button}
        />
      </View>

      <Text style={styles.question}>
        Explíquenos el motivo para hacerle saber al cliente
      </Text>

      {/* Opciones de radio */}
      <View>
        {[
          'Detecté que existe una zona peligrosa',
          'Acepté el pedido por error',
          'Tuve una emergencia',
          'Tuve un problema con el cliente'
        ].map(reason => (
          <TouchableOpacity
            key={reason}
            onPress={() => handleReasonSelect(reason)}>
            <View style={styles.radioButtonContainer}>
              <View
                style={[
                  styles.radioButton,
                  selectedReason === reason && styles.radioButtonSelected
                ]}
              />
              <Text style={styles.radioText}>{reason}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Problemas con el cliente (condicional) */}
      {selectedReason === 'Tuve un problema con el cliente' && (
        <View>
          <Text style={styles.question}>¿Qué problema tuviste?</Text>
          <View>
            {[
              'A. Maltrato por parte del cliente',
              'B. Los productos no entraban en el maletero o mochila.',
              'C. Me eliminaron algunos pedidos y la ruta ya no me es atractiva.',
              'D. La mercadería no es aceptable.',
              'E. El origen no correspondía con la dirección.'
            ].map(problem => (
              <TouchableOpacity
                key={problem}
                onPress={() => handleProblemSelect(problem)}>
                <View style={styles.radioButtonContainer}>
                  <View
                    style={[
                      styles.radioButton,
                      selectedProblem === problem && styles.radioButtonSelected
                    ]}
                  />
                  <Text style={styles.radioText}>{problem}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <Text style={styles.question}>Cuéntanos más</Text>
      <TextInput
        style={styles.textArea}
        multiline
        placeholder='Detalles adicionales...'
        onChangeText={setAdditionalDetails}
        value={additionalDetails}
      />

      <Button
        title='Adjuntanos una foto de prueba si lo desea'
        onPress={() => {
          /* Lógica para adjuntar foto */
        }}
        iconName='camera'
        primary
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20
  },
  question: {
    fontSize: 28,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  button: {
    flex: 1,
    marginHorizontal: 5
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10
  },
  radioButtonSelected: {
    backgroundColor: '#000'
  },
  radioText: {
    fontSize: 16
  },
  textArea: {
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20
  }
})

export default CancelarEnvioScreen
