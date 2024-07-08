// Archivo: components/navigation/AlertStackNavigator.js
import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import Header from './Header'
import PerfomanceScreen from '../screens/PerfomanceScreen'
import EnviosProgramadosScreen from '../screens/EnviosProgramadosScreen'
import NotificacionesScreen from '../screens/NotificacionesScreen'
import BienvenidaScreen from '../screens/BienvenidaScreen'
import DocumentoRequisitosScreen from '../screens/informacion/requisitos/DocumentoRequisitosScreen'
import CapacitacionVirtualScreen from '../screens/informacion/requisitos/CapacitacionVirtualScreen'
import ExamenScreen from '../screens/informacion/requisitos/ExamenScreen'
import FelicitacionesPorRegistroScreen from '../screens/FelicitacionesPorRegistroScreen'
import { AuthContext } from '../contexts/AuthContext'
import RevisionTecnicaScreen from '../screens/auth/documentos/RevisionTecnicaScreen'
import TarjetaPropiedadScreen from '../screens/auth/documentos/TarjetaPropiedadScreen'
import CertificadoAntecedentesPolicialesScreen from '../screens/auth/documentos/CertificadoAntecedentesPolicialesScreen'
import DocumentoIdentidadScreen from '../screens/auth/documentos/DocumentoIdentidadScreen'
import LicenciaScreen from '../screens/auth/documentos/LicenciaScreen'
import ContinuarRegistroScreen from '../screens/auth/ContinuarRegistroScreen'
import ModeloPlacaScreen from '../screens/auth/documentos/ModeloPlacaScreen'
import SoatScreen from '../screens/auth/documentos/SoatScreen'
import FotoPerfilScreen from '../screens/auth/documentos/FotoPerfil'

const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  const { user } = useContext(AuthContext)

  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    if (
      user?.delivery_data?.completed_documents === 'accepted' &&
      user?.delivery_data?.completed_training === 'accepted' &&
      user?.delivery_data?.completed_assessment === 'accepted'
    ) {
      setCompleted(true)
      return
    } else {
      setCompleted(false)
      return
    }
  }, [user])

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={completed ? HomeScreen : BienvenidaScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Drawer' title={user?.user_data?.user_name} />
          )
        }}
      />
      <Stack.Screen
        name='Documentos y requisitos'
        component={DocumentoRequisitosScreen}
        options={{
          header: props => (
            <Header headerModel='Model1' title='Documentos y Requisitos' />
          )
        }}
      />
      <Stack.Screen
        name='Capacitación virtual'
        component={CapacitacionVirtualScreen}
        options={{
          header: props => (
            <Header headerModel='Model1' title='Capacitación Virtual' />
          )
        }}
      />
      <Stack.Screen
        name='Examen'
        component={ExamenScreen}
        options={{
          header: navigation => <Header headerModel='Model1' title='Examen' />
        }}
      />
      <Stack.Screen
        name='FelicitacionesPorRegistro'
        component={FelicitacionesPorRegistroScreen}
        options={{
          header: navigation => <Header headerModel='Model1' title='Examen' />
        }}
      />
      <Stack.Screen
        name='Performance'
        component={PerfomanceScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Desempeño' />
          )
        }}
      />
      <Stack.Screen
        name='EnviosProgramados'
        component={EnviosProgramadosScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Envíos programados' />
          )
        }}
      />
      <Stack.Screen
        name='Notificaciones'
        component={NotificacionesScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Notificaciones' />
          )
        }}
      />
      <Stack.Screen
        name='ContinuarRegistro'
        component={ContinuarRegistroScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Continuar registro' />
          )
        }}
      />

      <Stack.Screen
        name='ModeloPlaca'
        component={ModeloPlacaScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              headerModel='Model1'
              title='Tome una foto de su vehículo por ambas caras'
            />
          )
        }}
      />
      <Stack.Screen
        name='Licencia'
        component={LicenciaScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              headerModel='Model1'
              title='Tome una foto de su brevete por ambas caras'
            />
          )
        }}
      />
      <Stack.Screen
        name='DocumentoIdentidad'
        component={DocumentoIdentidadScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              headerModel='Model1'
              title='Tome una foto de su documento de identidad'
            />
          )
        }}
      />
      <Stack.Screen
        name='Soat'
        component={SoatScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Adjunte su SOAT' />
          )
        }}
      />
      <Stack.Screen
        name='TarjetaPropiedad'
        component={TarjetaPropiedadScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Adjunte tarjeta de propiedad' />
          )
        }}
      />
      <Stack.Screen
        name='RevisionTecnica'
        component={RevisionTecnicaScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              headerModel='Model1'
              title='Tome una foto de la revisión técnica'
            />
          )
        }}
      />
      <Stack.Screen
        name='CertificadoAntecedentesPoliciales'
        component={CertificadoAntecedentesPolicialesScreen}
        options={{
          header: ({ navigation }) => (
            <Header
              headerModel='Model1'
              title='Adjunte su certificado de antecedentes policiales'
            />
          )
        }}
      />
     <Stack.Screen
        name='FotoPerfil'
        component={FotoPerfilScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Adjunte su Foto de Perfil' />
          )
        }}
      /> 
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
