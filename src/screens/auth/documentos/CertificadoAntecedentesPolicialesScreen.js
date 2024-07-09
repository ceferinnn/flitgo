import React, { useState, useContext } from 'react'
import { View, Text, Alert } from 'react-native'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'

const CertificadoAntecedentesPolicialesScreen = ({ navigation }) => {
	const { setRegistroData } = useContext(RegistroContext)
	const [archivo, setArchivo] = useState(null)

	const handleFileChange = file => {
		setArchivo(file)
	}

	const handleSubmit = async () => {
		if (!archivo) {
			Alert.alert(
				'Error',
				'Por favor, suba el pdf o imagen de los antecedentes policiales.'
			)
			return
		}

		try {
			setRegistroData(prevData => ({
				...prevData,
				file_police_records: archivo
			}))

			navigation.navigate('ContinuarRegistro')
		} catch (error) {
			console.error(
				'Error al guardar los datos de los antecedentes policiales:',
				error
			)
			Alert.alert('Error', 'Ocurrió un error. Por favor, inténtelo de nuevo.')
		}
	}

	return (
		<ContainerScroll>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>Suba un archivo PDF o imagen</Text>
				<MediaPicker
					onFileChange={file => handleFileChange(file)}
					mode='document'
				/>
			</View>

			<Button title='Continuar' onPress={handleSubmit} primary />
		</ContainerScroll>
	)
}

export default CertificadoAntecedentesPolicialesScreen
