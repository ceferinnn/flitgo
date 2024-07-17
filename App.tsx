import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './src/navigation/AppNavigator' // Asumiendo que esta es tu ruta
import { AuthProvider } from './src/contexts/AuthContext'
import { RegistroProvider } from './src/contexts/RegistroContext' // Importa tu RegistroProvider
import { ExamenContext } from './src/contexts/ExamenContext'

const App = () => {
	return (
		<AuthProvider>
			<RegistroProvider>
				<ExamenContext>
					<NavigationContainer>
						<AppNavigator />
					</NavigationContainer>
				</ExamenContext>
			</RegistroProvider>
		</AuthProvider>
	)
}

export default App
