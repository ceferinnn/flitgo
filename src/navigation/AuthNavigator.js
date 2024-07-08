import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from './Header'
import LoginScreen from '../screens/auth/LoginScreen'
import ForgotPasswordScreen from '../screens/auth/ForgotPasswordScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ headerShown: false, footer: false }}
      />
      <Stack.Screen
        name='ForgotPassword'
        component={ForgotPasswordScreen}
        options={{ headerShown: false, footer: false }}
      />
      <Stack.Screen
        name='SignUp'
        component={SignUpScreen}
        options={{
          header: ({ navigation }) => (
            <Header headerModel='Model1' title='Regístrate' />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator
