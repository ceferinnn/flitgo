// Archivo: screens/InformacionScreen.js
import React, { useContext } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AuthContext } from '../../contexts/AuthContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import RequisitosScreen from './RequisitosScreen'

const InformacionScreen = ({ navigation }) => {
  const { user } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      {/* Información del usuario */}
      <View style={styles.userInfoContainer}>
        <View style={styles.userInfoText}>
          {/* Afiliado por */}
          <View style={styles.infoRow}>
            <Ionicons name='people-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>RODRIGOV25</Text>
          </View>

          {/* Nick del usuario */}
          <View style={styles.infoRow}>
            <Ionicons name='person-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>JPEÑAOL1</Text>
          </View>

          {/* Nombre completo */}
          <View style={styles.infoRow}>
            <Ionicons name='person-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>Juan Peña Olivares Lazo</Text>
          </View>

          {/* DNI */}
          <View style={styles.infoRow}>
            <Ionicons name='card-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>46505789</Text>
          </View>

          {/* Nacionalidad */}
          <View style={styles.infoRow}>
            <Ionicons name='flag-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>Peruano</Text>
          </View>

          {/* Fecha de nacimiento */}
          <View style={styles.infoRow}>
            <Ionicons name='calendar-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>10/04/1990</Text>
          </View>

          {/* Correo electrónico */}
          <View style={styles.infoRow}>
            <Ionicons name='mail-outline' size={20} color='gray' />
            <Text style={styles.infoValue}>jpeñaolivares@gmail.com</Text>
          </View>
        </View>

        {/* Opciones editables */}
        <View style={styles.editableOptions}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={styles.editableOption}>
            <View style={styles.infoRow}>
              <Ionicons name='lock-closed-outline' size={20} color='gray' />
              <Text style={styles.infoValue}>Cambiar contraseña</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={20}
              color='gray'
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePhone')}
            style={styles.editableOption}>
            <View style={styles.infoRow}>
              <Ionicons name='call-outline' size={20} color='gray' />
              <Text style={styles.infoValue}>Cambiar número de teléfono</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={20}
              color='gray'
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('BillingInformation')}
            style={styles.editableOption}>
            <View style={styles.infoRow}>
              <Ionicons name='document-text-outline' size={20} color='gray' />
              <Text style={styles.infoValue}>Información de facturación</Text>
            </View>
            <Ionicons
              name='chevron-forward-outline'
              size={20}
              color='gray'
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.menuDivider} />

      <RequisitosScreen navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  userInfoContainer: {
    marginBottom: 20 // Espacio debajo de la información del usuario
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  infoValue: {
    marginLeft: 10,
    fontSize: 16,
    paddingVertical: 5
  },
  editableOptions: {
    marginTop: 10
  },
  editableOption: {
    // Nuevo estilo para el botón/opción editable
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Para distribuir el contenido y la flecha
    paddingVertical: 8 // Espacio vertical para el botón
  },
  arrowIcon: {
    marginLeft: 10 // Espacio entre el texto y la flecha
  },
  menuDivider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10
  }
})
export default InformacionScreen
