// Archivo: components/navigation/AlertStackNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ReportsStackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="Alert" component={AlertScreen} />*/}
    </Stack.Navigator>
  );
};

export default ReportsStackNavigator;
