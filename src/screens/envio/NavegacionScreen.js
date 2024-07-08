import React, { useState, useRef, useCallback } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { format } from 'date-fns' // Importa la función format de date-fns
import { es } from 'date-fns/locale'
import Button from '../../components/Button'
import { useRoute } from '@react-navigation/native'

const NavegacionScreen = ({ navigation }) => {
  const route = useRoute()
  const item = route.params.item
  const [showDetails, setShowDetails] = useState(true)
  const [estado, setEstado] = useState('iniciar')
  const bottomSheetHeight = useRef(new Animated.Value(350)).current

  const [selectedReason, setSelectedReason] = useState(null)
  const [selectedProblem, setSelectedProblem] = useState(null)
  const [additionalDetails, setAdditionalDetails] = useState('')
  const [horaEntrega, setHoraEntrega] = useState(null)

  const toggleBottomSheet = useCallback(() => {
    const toValue = showDetails ? 70 : 350
    Animated.timing(bottomSheetHeight, {
      toValue,
      duration: 300,
      useNativeDriver: false
    }).start(() => setShowDetails(!showDetails))
  }, [showDetails, bottomSheetHeight])

  const handleLlegue = useCallback(() => {
    setEstado('llego')
  }, [])

  const handleEntrega = useCallback(entregado => {
    setEstado(entregado ? 'entregado' : 'no entregado')
    if (entregado) {
      setHoraEntrega(new Date())
    }
  }, [])

  const handleReasonSelect = useCallback(reason => {
    setSelectedReason(reason)
    setSelectedProblem(null)
  }, [])

  const handleProblemSelect = useCallback(problem => {
    setSelectedProblem(problem)
  }, [])

  const backLLegaste = useCallback(() => {
    setEstado('llego')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.mapPlaceholder} />

      {/* Ventana flotante */}
      <Animated.View
        style={[styles.bottomSheet, { height: bottomSheetHeight }]}>
        <ScrollView>
          <TouchableOpacity
            onPress={toggleBottomSheet}
            style={styles.bottomSheetHandle}>
            <Ionicons
              name={showDetails ? 'chevron-down' : 'chevron-up'}
              size={30}
              color='#666'
            />
          </TouchableOpacity>

          {(estado === 'entregado' || estado === 'no entregado') && (
            <TouchableOpacity
              onPress={backLLegaste}
              style={{ position: 'absolute', top: 0 }}>
              <Ionicons name='arrow-back-outline' size={30} color='#666' />
            </TouchableOpacity>
          )}

          {showDetails && (
            <View>
              {estado === 'llego' && (
                <Text style={styles.title}>¡Llegaste!</Text>
              )}
              {estado === 'entregado' && (
                <View style={styles.entregadoContainer}>
                  <View style={styles.iconContainer}>
                    <Ionicons name='cube-outline' size={60} color='black' />
                    <Ionicons
                      name='checkmark-circle-outline'
                      size={24}
                      color='green'
                      style={styles.checkIcon}
                    />
                  </View>
                  <Text style={styles.info}>
                    Entregado a las{' '}
                    {horaEntrega
                      ? format(horaEntrega, 'HH:mm', { locale: es })
                      : ''}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 20,
                      alignItems: 'center'
                    }}>
                    <Text style={[styles.title, { flex: 3, marginRight: 10 }]}>
                      Toma una foto y firma
                    </Text>
                    <Button
                      onPress={() => {
                        /* Lógica para tomar foto */
                      }}
                      iconName='camera'
                      style={[styles.button]}
                      primary
                    />
                  </View>
                </View>
              )}
              {estado === 'no entregado' && (
                <View>
                  <View style={styles.entregadoContainer}>
                    <View style={styles.iconContainer}>
                      <Ionicons name='cube-outline' size={60} color='black' />
                      <Ionicons
                        name='close-circle-outline'
                        size={24}
                        color='red'
                        style={styles.checkIcon}
                      />
                    </View>
                    <Text style={styles.info}>
                      No entregado a las{' '}
                      {horaEntrega
                        ? format(horaEntrega, 'HH:mm', { locale: es })
                        : ''}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                      <Text
                        style={[styles.title, { flex: 3, marginRight: 10 }]}>
                        Toma una foto para confirmar que llegaste al punto
                      </Text>
                      <Button
                        onPress={() => {
                          /* Lógica para tomar foto */
                        }}
                        iconName='camera'
                        style={[styles.button]}
                        primary
                      />
                    </View>
                  </View>
                  <Text style={styles.question}>
                    ¿Por qué no entregas el pedido?
                  </Text>
                  {/* Opciones de radio */}
                  {[
                    'Cliente incomunicado',
                    'Rechazado por el cliente',
                    'Entrega parcial'
                  ].map((reason, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleReasonSelect(reason)}>
                      <View style={styles.radioButtonContainer}>
                        <View
                          style={[
                            styles.radioButton,
                            selectedReason === reason &&
                              styles.radioButtonSelected
                          ]}
                        />
                        <Text style={styles.radioText}>{reason}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}

                  {/* Opciones adicionales si la razón es "Tuve un problema con el cliente" */}
                  {selectedReason === 'Tuve un problema con el cliente' && (
                    <View>
                      <Text style={styles.question}>
                        ¿Qué problema tuviste?
                      </Text>
                      {[
                        'Maltrato por parte del cliente',
                        'Los productos no entraban en el maletero o mochila.',
                        'Me eliminaron algunos pedidos y la ruta ya no me es atractiva.',
                        'La mercadería no es aceptable.',
                        'El origen no correspondía con la dirección.'
                      ].map((problem, index) => (
                        <TouchableOpacity
                          key={index}
                          onPress={() => handleProblemSelect(problem)}>
                          <View style={styles.radioButtonContainer}>
                            <View
                              style={[
                                styles.radioButton,
                                selectedProblem === problem &&
                                  styles.radioButtonSelected
                              ]}
                            />
                            <Text style={styles.radioText}>{problem}</Text>
                          </View>
                        </TouchableOpacity>
                      ))}
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
                </View>
              )}
              <View style={styles.addressContainer}>
                <Text style={styles.address}>{item.address}</Text>
                <Text style={styles.district}>
                  {item.district}, {item.postalCode}
                </Text>
                {item.apartment && (
                  <Text style={styles.apartment}>Dep {item.apartment}</Text>
                )}
              </View>

              {estado === 'entregado' && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
                  <Text> </Text>
                  <Button
                    title='Siguiente'
                    onPress={() => {
                      navigation.navigate('Terminado')
                    }}
                    primary
                  />
                  <View>
                    <Text style={{ fontWeight: 'bold' }}>N: 10:31am</Text>
                    <Text style={{ fontWeight: 'bold' }}>R: 10:29am</Text>
                  </View>
                </View>
              )}
              {estado === 'no entregado' && (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 20
                  }}>
                  <Text> </Text>
                  <Button title='Siguiente' primary />
                  <View>
                    <Text style={{ fontWeight: 'bold' }}>N: 10:31am</Text>
                    <Text style={{ fontWeight: 'bold' }}>R: 10:29am</Text>
                  </View>
                </View>
              )}

              {estado === 'iniciar' && (
                <View style={styles.buttonContainer}>
                  <Button
                    title='Iniciar'
                    onPress={handleLlegue}
                    backgroundColor='#4CAF50'
                    style={styles.button}
                  />
                  <Button
                    title='Fallar'
                    onPress={() => {
                      navigation.navigate('Fallar')
                    }}
                    backgroundColor='#F44336'
                    style={styles.button}
                    iconName='close-circle'
                  />
                </View>
              )}

              {estado === 'llego' && (
                <>
                  <View style={styles.buttonContainer}>
                    <Button
                      iconName='checkmark-circle-outline'
                      title='Entregué'
                      onPress={() => handleEntrega(true)}
                      backgroundColor='#4CAF50'
                      style={styles.button}
                    />
                    <Button
                      iconName='close-circle-outline'
                      title='No entregué'
                      onPress={() => handleEntrega(false)}
                      backgroundColor='#F44336'
                      style={styles.button}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons
                        name='person-outline'
                        size={18}
                        color='#666'
                        style={{ marginRight: 5 }}
                      />
                      <Text>Juan Peña Fernandez</Text>
                    </View>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Ionicons
                        name='call-outline'
                        size={18}
                        color='#666'
                        style={{ marginRight: 5 }}
                      />
                      <Text>989595623</Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          )}
        </ScrollView>
      </Animated.View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#F3FCFE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  bottomSheetHandle: {
    width: 40,
    height: 30,
    borderRadius: 2.5,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  addressContainer: {
    marginBottom: 20
  },
  address: {
    fontSize: 17,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10 // Espacio entre botones y contenido adicional
  },
  button: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  info: {
    fontSize: 16,
    marginTop: 10
  },
  question: {
    // Estilo para las preguntas
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
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
  },
  entregadoContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  checkIcon: {
    position: 'absolute',
    top: 40,
    right: -15,
    zIndex: 1
  }
})
export default NavegacionScreen
