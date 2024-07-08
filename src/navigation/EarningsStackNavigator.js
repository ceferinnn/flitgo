// Archivo: components/navigation/AlertStackNavigator.js
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SaldoGananciasScreen from '../screens/saldoGanancias/SaldoGananciasScreen'
import Header from './Header'
import PorServicioScreen from '../screens/saldoGanancias/PorServicioScreen'
import PorRedScreen from '../screens/saldoGanancias/PorRedScreen'
import PorRedRetirarScreen from '../screens/saldoGanancias/PorRedRetirarScreen'
import PorRedRetirarConfirmadoScreen from '../screens/saldoGanancias/PorRedRetirarConfirmadoScreen'
import PorRedTransferirScreen from '../screens/saldoGanancias/PorRedTransferirScreen'
import PorRedTransferirConfirmadoScreen from '../screens/saldoGanancias/PorRedTransferirConfirmadoScreen'
import PorServicioRetirarScreen from '../screens/saldoGanancias/PorServicioRetirarScreen'
import PorServicioRetirarConfirmadoScreen from '../screens/saldoGanancias/PorServicioRetirarConfirmadoScreen'
import PorServicioTransferirScreen from '../screens/saldoGanancias/PorServicioTransferirScreen'
import PorServicioTransferirConfirmadoScreen from '../screens/saldoGanancias/PorServicioTransferirConfirmadoScreen'

const Stack = createStackNavigator()

const EarningsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='SaldoGanancias'
        component={SaldoGananciasScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Drawer' title='Saldo de ganancias' />
          )
        }}
      />
      <Stack.Screen
        name='PorServicio'
        component={PorServicioScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              headerModel='Model1'
              title='Ganancia por reparto o recojos'
            />
          )
        }}
      />
      <Stack.Screen
        name='PorServicioRetirar'
        component={PorServicioRetirarScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Retirar' />
          )
        }}
      />
      <Stack.Screen
        name='PorServicioRetirarConfirmado'
        component={PorServicioRetirarConfirmadoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PorServicioTransferir'
        component={PorServicioTransferirScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Retirar' />
          )
        }}
      />
      <Stack.Screen
        name='PorServicioTransferirConfirmado'
        component={PorServicioTransferirConfirmadoScreen}
        options={{ headerShown: false }}
      />

      {/* Por red */}
      <Stack.Screen
        name='PorRed'
        component={PorRedScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Ganancia por red' />
          )
        }}
      />
      <Stack.Screen
        name='PorRedRetirar'
        component={PorRedRetirarScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Retirar' />
          )
        }}
      />
      <Stack.Screen
        name='PorRedRetirarConfirmado'
        component={PorRedRetirarConfirmadoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PorRedTransferir'
        component={PorRedTransferirScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Transferir' />
          )
        }}
      />
      <Stack.Screen
        name='PorRedTransferirConfirmado'
        component={PorRedTransferirConfirmadoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default EarningsStackNavigator
