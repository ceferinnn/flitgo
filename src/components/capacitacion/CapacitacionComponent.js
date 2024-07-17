import { Alert, StyleSheet, Text, View } from 'react-native'
import { CapacitacionDocumento } from './CapacitacionDocumento'
import { CapaciotacionVideos } from './CapaciotacionVideos'
import Button from '../Button'
import { useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

const CapacitacionComponent = ({ videos }) => {
	const navigate = useNavigation()

	const [loading, setLoading] = useState(false)
	const documento = [...videos].find(
		video => video.file.content_type === 'file'
	)

	const fullVideos = [...videos].filter(
		video => video.file.content_type === 'video'
	)

	const onSubmit = async () => {
		const ids = [...videos].map(video => video.id)

		try {
			setLoading(true)

			const token = await AsyncStorage.getItem('token')

			if (!token) {
				Alert.alert('Error', 'No se pudo completar la capacitacion')
				return
			}

			await Promise.all(
				ids.map(async id => {
					await axios.post(
						`${API_URL}/api/user/delivery/training/${id}`,
						undefined,
						{
							headers: {
								Authorization: `Bearer ${token}`
							}
						}
					)
				})
			)

			console.log('Capacitacion completada')
			navigate.navigate('Home')
		} catch (error) {
			console.log(error)
			Alert.alert('Error', 'No se pudo completar la capacitacion')
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{videos.length === 0 ? (
				<Text>No hay Videos</Text>
			) : (
				<View style={styles.containerVides}>
					<View style={styles.containerFullVideos}>
						<Text style={styles.manualText}>Descargue el manual</Text>

						<CapacitacionDocumento documento={documento} />
					</View>

					<View style={styles.containerFullVideos}>
						<Text style={styles.textComunicado}>
							Reproduzca el video hasta el final para poder completar la
							capacitacion. Es necesario para rendir la evaluacion final:
						</Text>

						<CapaciotacionVideos videos={fullVideos} />
					</View>
				</View>
			)}
			{videos.length > 0 && (
				<>
					<View style={{ flex: 1 }}></View>
					<View style={styles.footer}>
						<Button
							onPress={onSubmit}
							loading={loading}
							primary
							title='Confirmar Capacitacion'
						/>
					</View>
				</>
			)}
		</>
	)
}

const styles = StyleSheet.create({
	containerVides: {
		display: 'flex',
		flexDirection: 'column',
		paddingHorizontal: 10,
		paddingVertical: 5,
		gap: 15
	},
	textComunicado: {
		fontSize: 15,
		fontWeight: '700'
	},
	containerFullVideos: {
		display: 'flex',
		flexDirection: 'column',
		gap: 4
	},
	manualText: {
		fontWeight: '700',
		fontSize: 16
	},
	footer: {
		padding: 10
	}
})

export default CapacitacionComponent
