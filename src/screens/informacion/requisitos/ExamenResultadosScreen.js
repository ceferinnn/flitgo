import { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ContextExamen } from '../../../contexts/ExamenContext'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from '../../../components/Button'
import { useNavigation } from '@react-navigation/native'

const ExamenResultadosScreen = () => {
	const navigation = useNavigation()
	const { results } = useContext(ContextExamen)

	console.log(results)

	const textResults = results.is_aproved
		? '!Felicitaciones¡ Usted ha aprobado el Examen!'
		: `Lamantablemente no ha aprobado el Examen. Le quedan ${
				3 - results.attemp
		  } intentos. Capacitate y vuelve a intentarlo.`

	return (
		<View style={styles.container}>
			<View style={styles.containerTextos}>
				<View style={styles.mensajeContainer}>
					<Text style={styles.textResult}>{textResults}</Text>

					{results.is_aproved ? (
						<Ionicons name='happy-outline' size={40} color='black' />
					) : (
						<Ionicons name='warning-outline' size={40} color='red' />
					)}
				</View>

				<View style={styles.cardResults}>
					<Text style={styles.textCardResult}>
						Preguntas Correctas: {results.questions_corrects}
					</Text>
					<Text style={styles.textCardResult}>
						Preguntas Incorrectas: {results.questions_incorrects}
					</Text>
					<Text style={styles.textCardResult}>
						Necesarias para Aprobar: {results.questions_incorrects}
					</Text>
				</View>

				{results.is_aproved && (
					<View style={{ display: 'flex', alignItems: 'center' }}>
						<Ionicons name='checkmark-circle-outline' size={40} color='green' />
					</View>
				)}
				<View style={{ marginTop: 50 }}></View>
				<Button
					onPress={() => {
						results.is_aproved
							? navigation.navigate('FelicitacionesPorRegistro')
							: navigation.navigate('Examen')
					}}
					primary
					title={results.is_aproved ? 'Terminar' : 'Volver a Intentarlo'}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerTextos: {
		display: 'flex',
		flexDirection: 'column',
		gap: 20,
		padding: 20
	},
	textResult: {
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black'
	},
	cardResults: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		borderWidth: 1,
		gap: 10,
		padding: 50,
		backgroundColor: '#36C2CE'
	},
	textCardResult: {
		textAlign: 'center',
		fontSize: 19,
		fontWeight: 'bold',
		color: 'black'
	},
	mensajeContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 20
	}
})

export default ExamenResultadosScreen
