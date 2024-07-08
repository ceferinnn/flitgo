// Archivo: components/navigation/MainNavigator.js
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import ReportesScreen from '../screens/ReportesScreen'
import AlertStackNavigator from './AlertStackNavigator'
import EnvioStackNavigator from './EnvioStackNavigator'
import InformationStackNavigator from './InformationStackNavigator'
import EarningsStackNavigator from './EarningsStackNavigator'

import CustomDrawerContent from './CustomDrawerContent' // Importa el componente personalizado
import RedAfiliadosScreen from '../screens/RedAfiliadosScreen'
import Header from './Header'
import AyudaSoporteStackNavigator from './AyudaSoporteStackNavigator'
import PreferenciasScreen from '../screens/PreferenciasScreen'
import HomeStackNavigator from './HomeStackNavigator'

const Drawer = createDrawerNavigator()

const MainNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName='Inicio'
      drawerContent={props => <CustomDrawerContent {...props} />} // Usar el componente personalizado
    >
      <Drawer.Screen
        name='Inicio'
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name='Alertas' component={AlertStackNavigator} />
      <Drawer.Screen name='Envío' component={EnvioStackNavigator} />
      <Drawer.Screen
        name='Información'
        component={InformationStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Reportes'
        component={ReportesScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Drawer' title='Reportes' />
          )
        }}
      />
      <Drawer.Screen
        name='RedAfiliados'
        component={RedAfiliadosScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Drawer' title='Red de afiliados' />
          )
        }}
      />
      <Drawer.Screen
        name='Saldo de ganancias'
        component={EarningsStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='AyudaSoporteStackNavigator'
        component={AyudaSoporteStackNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name='Preferencias' component={PreferenciasScreen} />
    </Drawer.Navigator>
  )
}

export default MainNavigator
