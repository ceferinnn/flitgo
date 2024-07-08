// Archivo: components/navigation/AlertStackNavigator.js
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import EnvioScreen from '../screens/envio/envioScreen'
import CancelarEnvioScreen from '../screens/envio/CancelarEnvioScreen'
import NavegacionScreen from '../screens/envio/NavegacionScreen'
import FallarScreen from '../screens/envio/FallarScreen'
import FallarConfirmacionScreen from '../screens/envio/FallarConfirmacionScreen'
import FallasteScreen from '../screens/envio/Fallaste'
import TerminadoScreen from '../screens/envio/Terminado'

const Stack = createStackNavigator()

const EnvioStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Envio'
        component={EnvioScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CancelarEnvio'
        component={CancelarEnvioScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Navegacion'
        component={NavegacionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Fallar'
        component={FallarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='FallarConfirmacion'
        component={FallarConfirmacionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Fallaste'
        component={FallasteScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Terminado'
        component={TerminadoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default EnvioStackNavigator
