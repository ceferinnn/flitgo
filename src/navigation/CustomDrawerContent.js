import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../contexts/AuthContext'

const CustomDrawerContent = ({ state, navigation }) => {
  const { user, logout } = useContext(AuthContext)

  const logoutButton = () => {
    Alert.alert(
      'Cerrar sesión',
      '¿Estás seguro de que quieres cerrar sesión?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sí, salir', onPress: logout } // Llama a logout solo si el usuario confirma
      ]
    )
  }

  const cambiarImagen = () => {}

  const menuItems1 = [
    {
      label: 'Inicio',
      iconName: 'information-circle-outline',
      screenName: 'Inicio'
    },
    {
      label: 'Información',
      iconName: 'information-circle-outline',
      screenName: 'Información'
    },
    {
      label: 'Reportes',
      iconName: 'document-text-outline',
      screenName: 'Reportes'
    },
    {
      label: 'Red de afiliados',
      iconName: 'people-outline',
      screenName: 'RedAfiliados'
    },
    {
      label: 'Saldo de ganancias',
      iconName: 'wallet-outline',
      screenName: 'Saldo de ganancias'
    },
    {
      label: 'Ayuda y soporte',
      iconName: 'help-circle-outline',
      screenName: 'AyudaSoporteStackNavigator'
    }
  ]
  const menuItems2 = [
    {
      label: 'Preferencias',
      iconName: 'settings-outline',
      screenName: 'Preferencias'
    },
    { label: 'Salir', iconName: 'log-out-outline', onPress: logoutButton }
  ]

  return (
    <DrawerContentScrollView>
      <View style={styles.customDrawer}>
        {/* Información del usuario */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        {user && (
          <View style={styles.userInfoContainer}>
            <TouchableOpacity
              onPress={() => {
                cambiarImagen()
              }}>
              <View style={styles.userImageContainer}>
                <Image
                  source={
                    user?.avatar
                      ? { uri: user.avatar }
                      : require('../assets/user.png')
                  }
                  style={styles.userImage}
                />
                <Ionicons
                  name='camera-outline'
                  size={20}
                  color='gray'
                  style={styles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.userInfoText}>
              <Text style={styles.userName}>{user?.user_data?.first_name}</Text>
              <Text style={styles.userNick}>{user?.user_data?.user_name}</Text>
              <Text style={styles.userCode}>
                {user?.code || 'Código de usuario'}
              </Text>
              <View style={styles.userType}>
                <Text
                  style={{
                    color: '#26B9EA',
                    fontSize: 19,
                    fontWeight: 'bold'
                  }}>
                  Repartidor{' '}
                </Text>
                <Ionicons name='bicycle' size={28} color='black' />
              </View>
            </View>
          </View>
        )}

        <View style={styles.menuDivider} />

        {/* Elementos del menú */}
        {menuItems1.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.screenName) {
                navigation.navigate(item.screenName)
              } else if (item.onPress) {
                item.onPress()
              }
            }}
            style={[
              styles.drawerItem,
              state.routeNames[state.index] === item.screenName &&
                styles.drawerItemActive
            ]}>
            <Ionicons name={item.iconName} size={24} color='black' />
            <Text style={styles.drawerItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.menuDivider} />

        {/* Elementos del menú */}
        {menuItems2.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (item.screenName) {
                navigation.navigate(item.screenName)
              } else if (item.onPress) {
                item.onPress()
              }
            }}
            style={[
              styles.drawerItem,
              state.routeNames[state.index] === item.screenName &&
                styles.drawerItemActive
            ]}>
            <Ionicons name={item.iconName} size={24} color='black' />
            <Text style={styles.drawerItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  customDrawer: {
    flex: 1
  },
  logo: {
    width: '80%',
    marginLeft: 15,
    resizeMode: 'contain'
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15
  },
  drawerItemActive: {
    backgroundColor: '#f0f0f0' // Resaltar el elemento activo
  },
  drawerItemText: {
    marginLeft: 10,
    fontSize: 20
  },
  userType: {
    flexDirection: 'row', // Alinea el texto y el icono horizontalmente
    alignItems: 'center'
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  userInfoText: {
    marginLeft: 15
  },
  userName: {
    fontSize: 20
  },
  userNick: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  userCode: {
    fontSize: 14,
    color: 'gray'
  },
  menuDivider: {
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10
  },
  userImageContainer: {
    width: 65, // Ancho de la imagen del usuario
    height: 65,
    marginRight: 10
  },
  userImage: {
    width: '100%', // La imagen ocupa todo el espacio del contenedor
    height: '100%',
    resizeMode: 'cover' // Ajusta la imagen para cubrir el contenedor
  },
  cameraIcon: {
    position: 'absolute',
    top: -5,
    right: -5
  }
})

export default CustomDrawerContent
