import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import Container from '../components/containers/Container'
import Confirmation from '../components/Confirmation'
import { AuthContext } from '../contexts/AuthContext'

const FelicitacionesPorRegistroScreen = ({ navigation }) => {
	const { user } = useContext(AuthContext)

	return (
		<Container>
			<Confirmation
				title={`¡Felicitaciones  ${user?.user_data?.user_name}, se ha registrado con éxito como repartidor de FlitGo!'.Recuerda que tú eres un repartidor independiente y nosotros te ayudaremos a conseguir la mayor cantidad de clientes posibles. Tu éxito es nuestro éxito.`}
				buttonText='Continuar'
				onButtonPress={() => navigation.navigate('Home')}
			/>
		</Container>
	)
}

export default FelicitacionesPorRegistroScreen
