import React, { useCallback, useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Container from '../components/containers/Container'
import Button from '../components/Button'
import { AuthContext } from '../contexts/AuthContext'
import { useFocusEffect } from '@react-navigation/native'

const BienvenidaScreen = ({ navigation }) => {
  const { user, refreshStatus } = useContext(AuthContext)

  useFocusEffect(
    useCallback(() => {
      refreshStatus()
    }, [])
  )

  const typeStatus = {
    not_started: 'not_started',
    in_progress: 'in_progress',
    accepted: 'accepted',
    denied: 'denied'
  }

  const requisitos = [
    {
      id: 2,
      nombre: 'Documentos y requisitos',
      type: user?.delivery_data?.completed_documents,
      typeState: 'completed_documents',
      icon: 'description',
      screen: 'ContinuarRegistro'
    },
    {
      id: 3,
      nombre: 'Capacitación virtual',
      type: user?.delivery_data?.completed_training,
      typeState: 'completed_training',
      icon: 'school',
      screen: 'Inicio'
    },
    {
      id: 4,
      nombre: 'Examen',
      type: user?.delivery_data?.completed_assessment,
      typeState: 'completed_assessment',
      icon: 'assignment',
      screen: 'Inicio'
    }
  ]

  const stateExams = status => {
    if (status === typeStatus.accepted) {
      return 'Aprobado'
    }

    if (status === typeStatus.in_progress) {
      return 'En progreso'
    }

    if (status === typeStatus.not_started) {
      return 'Sin Empezar'
    }

    if (status === typeStatus.denied) {
      return 'Denegado'
    }
  }

  const statusIcons = status => {
    if (status === typeStatus.accepted) {
      return 'check-circle'
    }

    if (status === typeStatus.in_progress) {
      return 'sync'
    }

    if (status === typeStatus.not_started) {
      return 'access-time'
    }

    if (status === typeStatus.denied) {
      return 'error'
    }
  }

  const statusIconsColors = status => {
    if (status === typeStatus.accepted) {
      return 'green'
    }

    if (status === typeStatus.in_progress) {
      return 'blue'
    }

    if (status === typeStatus.not_started) {
      return 'gray'
    }

    if (status === typeStatus.denied) {
      return 'red'
    }
  }

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <Text style={styles.title}>
            Bienvenido {user?.user_data?.user_name}{' '}
          </Text>
          <Text style={styles.subtitle}>
            Para poder terminar tu proceso de selección como repartidor de
            FlitGo, es necesario completar los siguientes requisitos:
          </Text>
        </View>

        <View style={styles.requisitosContainer}>
          <TouchableOpacity disabled style={styles.requisitoItem}>
            <View style={styles.requisitoIconContainer}>
              <Icon name='person' size={24} color='#333' />
            </View>
            <View style={styles.requisitoTextContainer}>
              <Text style={styles.requisitoNombre}>{'Datos Personales'}</Text>
              <Text style={styles.requisitoEstado}>{'Aprobado'}</Text>
            </View>

            <Icon name={'check-circle'} size={24} color={'green'} />
          </TouchableOpacity>
          {requisitos.map(requisito => (
            <TouchableOpacity
              disabled={requisito.type === typeStatus.accepted}
              onPress={() => navigation.navigate(requisito.screen)}
              key={requisito.id}
              style={styles.requisitoItem}>
              <View style={styles.requisitoIconContainer}>
                <Icon name={requisito.icon} size={24} color='#333' />
              </View>
              <View style={styles.requisitoTextContainer}>
                <Text style={styles.requisitoNombre}>{requisito.nombre}</Text>
                <Text style={styles.requisitoEstado}>
                  {stateExams(requisito.type)}
                </Text>
              </View>

              <Icon
                name={statusIcons(requisito.type)}
                size={24}
                color={statusIconsColors(requisito.type)}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <Button
        primary
        disabled
        title='Continuar'
        // onPress={() => navigation.navigate('HomeScreen')}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555' // Texto gris oscuro
  },
  requisitosContainer: {
    marginTop: 20
  },
  requisitoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // <-- Cambiar a flex-start
    backgroundColor: '#f5f5f5',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1
  },
  requisitoTextContainer: {
    flex: 1, // <-- Agregar flex: 1 para que el texto ocupe el espacio disponible
    marginRight: 15 // <-- Agregar margen derecho para separar del icono de estado
  },
  requisitoIconContainer: {
    marginRight: 15
  },
  requisitoNombre: {
    fontSize: 18,
    fontWeight: '500'
  },
  requisitoEstado: {
    fontSize: 14,
    color: '#777'
  }
})

export default BienvenidaScreen
