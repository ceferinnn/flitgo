import {
	Alert,
	Button,
	PermissionsAndroid,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native'
import RNFetchBlob from 'rn-fetch-blob'
import { API_URL } from '../../constants'

export const CapacitacionDocumento = ({ documento }) => {
	const pdfUrl = `${API_URL}/api/uploads-flitgo/${documento.file.content_path}`
	const fileName = 'training-course.pdf'

	const checkPermission = async () => {
		if (Platform.OS === 'ios') {
			downloadFile()
		} else {
			try {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
					{
						title: 'Permiso de almacenamiento requerido',
						message:
							'Esta aplicación necesita acceder a su almacenamiento para descargar el archivo',
						buttonNeutral: 'Preguntar más tarde',
						buttonNegative: 'Cancelar',
						buttonPositive: 'OK'
					}
				)

				if (granted === PermissionsAndroid.RESULTS.GRANTED) {
					downloadFile()
				} else {
					Alert.alert('Permiso de almacenamiento denegado')
				}
			} catch (err) {
				console.warn(err)
			}
		}
	}

	const downloadFile = () => {
		const { config, fs } = RNFetchBlob
		const { DownloadDir } = fs.dirs
		const path = `${DownloadDir}/${fileName}`

		config({
			fileCache: true,
			addAndroidDownloads: {
				useDownloadManager: true,
				notification: true,
				path,
				description: 'Descargando archivo.'
			}
		})
			.fetch('GET', pdfUrl)
			.then(res => {
				Alert.alert(
					'Archivo descargado con éxito',
					`El archivo ha sido guardado en: ${res.path()}`
				)
			})
			.catch(error => {
				console.error(error)
				Alert.alert('Error al descargar el archivo', error.message)
			})
	}
	return (
		<>
			<Text onPress={checkPermission} style={styles.textDownload}>
				Manual para Repartidores.pdf
			</Text>
		</>
	)
}

const styles = StyleSheet.create({
	textDownload: {
		color: '#0090FF',
		textDecorationLine: 'underline'
	}
})
