// Archivo: screens/informacion/DocumentoRequisitosScreen.js
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import { API_URL } from '../../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ExamenComponent } from '../../../components/examen/ExamenComponent'

const ExamenScreen = () => {
	const [preguntas, setPreguntas] = React.useState([])
	const [loading, setLoading] = useState(false)

	const getPreguntas = async () => {
		try {
			setLoading(true)

			const token = await AsyncStorage.getItem('token')

			if (!token) return

			const { data: response } = await axios.get(
				API_URL + '/api/user/delivery/evaluation',
				{ headers: { Authorization: `Bearer ${token}` } }
			)

			const { data } = response
			const { questions } = data
			setPreguntas(questions)
		} catch (error) {
			console.log(error)
			Alert.alert('Error', 'Error al traer las preguntas')
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		getPreguntas()
	}, [])

	return (
		<>
			{loading ? (
				<View style={styles.container}>
					<ActivityIndicator color='blue' size='small' />
				</View>
			) : (
				<ExamenComponent preguntas={preguntas} />
			)}
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center', // Centra verticalmente el título
		alignItems: 'center' // Centra horizontalmente el título
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold'
	}
})

export default ExamenScreen
