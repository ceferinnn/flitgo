// Archivo: components/navigation/AlertStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import AyudaSoporteScreen from '../screens/ayudaSoporte/AyudaSoporteScreen';
import TerminosCondicionesScreen from '../screens/ayudaSoporte/TerminosCondicionesScreen';

const Stack = createStackNavigator();

const AyudaSoporteStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AyudaSoporte"
        component={AyudaSoporteScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Drawer" title="Ayuda y soporte" />
          )
        }}
      />
      <Stack.Screen
        name="TerminosCondiciones"
        component={TerminosCondicionesScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel="Model1" title="Términos y condiciones" />
          )
        }}
      />
    </Stack.Navigator>
  );
};

export default AyudaSoporteStackNavigator;
