// Archivo: components/navigation/AlertStackNavigator.js
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AlertaScreen from '../screens/alertaNuevoEnvio/AlertaScreen'
import AlertaRechazarScreen from '../screens/alertaNuevoEnvio/AlertaRechazarScreen'
import AlertaAceptarScreen from '../screens/alertaNuevoEnvio/AlertaAceptarScreen'

const Stack = createStackNavigator()

const AlertStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Alerta'
        component={AlertaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AlertaRechazar'
        component={AlertaRechazarScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AlertaAceptar'
        component={AlertaAceptarScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default AlertStackNavigator
