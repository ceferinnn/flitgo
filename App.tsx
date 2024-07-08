import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Asumiendo que esta es tu ruta
import { AuthProvider } from './src/contexts/AuthContext';
import { RegistroProvider } from './src/contexts/RegistroContext'; // Importa tu RegistroProvider

const App = () => {
  return (
    <RegistroProvider>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </RegistroProvider>
  );
};

export default App;
