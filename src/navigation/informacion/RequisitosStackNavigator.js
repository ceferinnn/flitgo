import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DocumentoRequisitosScreen from '../../screens/informacion/requisitos/DocumentoRequisitosScreen';
import CapacitacionVirtualScreen from '../../screens/informacion/requisitos/CapacitacionVirtualScreen';
import ExamenScreen from '../../screens/informacion/requisitos/ExamenScreen';
import Header from '../Header';

const Stack = createStackNavigator();

const RequisitosStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Documentos y requisitos"
        component={DocumentoRequisitosScreen}
        options={{ header: (props) => <Header headerModel="Model1" title="Documentos y Requisitos" /> }}
      />
      <Stack.Screen
        name="Capacitación virtual"
        component={CapacitacionVirtualScreen}
        options={{ header: (props) => <Header headerModel="Model1" title="Capacitación Virtual" /> }}
      />
      <Stack.Screen
        name="Examen"
        component={ExamenScreen}
        options={{ header: (navigation) => <Header headerModel="Model1" title="Examen" /> }}
      />
    </Stack.Navigator>
  );
};

export default RequisitosStackNavigator;
