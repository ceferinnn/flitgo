import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InformacionScreen from '../screens/informacion/InformacionScreen';
import RequisitosStackNavigator from './informacion/RequisitosStackNavigator';
import Header from './Header';
import ChangePasswordScreen from '../screens/informacion/ChangePasswordScreen';
import BillingInformationScreen from '../screens/informacion/BillingInformationScreen';
import ChangePhoneScreen from '../screens/informacion/ChangePhoneScreen';
import ChangePhoneConfirmationScreen from '../screens/informacion/ChangePhoneConfirmationScreen';


const Stack = createStackNavigator();

const InformationStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Informacion"
        component={InformacionScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Drawer" title="Información de la cuenta" />
          )
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Model1" title="Cambiar contraseña" />
          )
        }}
      />
      <Stack.Screen
        name="ChangePhone"
        component={ChangePhoneScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Model1" title="Número de teléfono" />
          )
        }}
      />
      <Stack.Screen
        name="ChangePhoneConfirmation"
        component={ChangePhoneConfirmationScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Model1" title="Número de teléfono" />
          )
        }}
      />
      <Stack.Screen
        name="BillingInformation"
        component={BillingInformationScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Model1" title="Información de facturción" />
          )
        }}
      />
      <Stack.Screen
        name="Requisitos"
        component={RequisitosStackNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default InformationStackNavigator;
