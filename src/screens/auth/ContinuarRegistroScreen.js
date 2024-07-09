import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'

import Button from '../../components/Button'
import TextInputField from '../../components/forms/TextInputField'

import FotoButton from '../../components/FotoButton'
import FormikForm from '../../components/forms/FormikForm'
import * as validations from './validations/ContinuarRegistro'
import { RegistroContext } from '../../contexts/RegistroContext'
import { FechaComponent } from '../../components/FechaComponent'
import { API_URL } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ContinuarRegistroScreen = ({ navigation }) => {
	const { registroData } = useContext(RegistroContext)
	const [showDatePickerLicencia, setShowDatePickerLicencia] = useState(false)
	const [showDatePickerSoat, setShowDatePickerSoat] = useState(false)
	const [showDatePickerInspeccion, setShowDatePickerInspeccion] =
		useState(false)

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			setSubmitting(true)

			const formVehicle = new FormData()
			const formDriver = new FormData()

			//* Driver
			formDriver.append('license_number', values.license_number)
			formDriver.append(
				'license_expiration_date',
				values.license_expiration_date
			)
			formDriver.append('file_police_records', 'pdf_jpg')
			formDriver.append(
				'photo_license_frontal',
				registroData.photo_license_frontal
			)
			formDriver.append('photo_license_rear', registroData.photo_license_rear)
			formDriver.append('photo_person', registroData.photo_person)
			formDriver.append(
				'photo_document_identity_frontal',
				registroData.photo_document_identity_frontal
			)
			formDriver.append(
				'photo_document_identity_rear',
				registroData.photo_document_identity_rear
			)
			formDriver.append('file_police_records', registroData.file_police_records)

			//* Vehicle
			formVehicle.append('vehicle_type', values.vehicle_type)
			formVehicle.append('vehicle_model', values.vehicle_model)
			formVehicle.append('vehicle_brand', values.vehicle_brand)
			formVehicle.append(
				'year_manufacture_vehicle',
				values.year_manufacture_vehicle
			)
			formVehicle.append('vehicle_color', values.vehicle_color)
			formVehicle.append('vehicle_plate', values.vehicle_plate)
			formVehicle.append('long_useful_space', values.long_useful_space)
			formVehicle.append('width_useful_space', values.width_useful_space)
			formVehicle.append('height_useful_space', values.height_useful_space)
			formVehicle.append('type_file_soat', 'pdf_jpg')
			formVehicle.append('policy_soat_number', values.policy_soat_number)
			formVehicle.append('soat_expiration_date', values.soat_expiration_date)
			formVehicle.append('partida_registral', values.partida_registral)
			formVehicle.append('next_inspection_date', values.next_inspection_date)
			formVehicle.append('photo_license_rear', registroData.photo_license_rear)
			formVehicle.append(
				'photo_vehicle_frontal',
				registroData.photo_vehicle_frontal
			)
			formVehicle.append('photo_vehicle_rear', registroData.photo_vehicle_rear)
			formVehicle.append(
				'photo_vehicle_useful_space',
				registroData.photo_vehicle_useful_space
			)
			formVehicle.append('file_soat', registroData.file_soat)
			formVehicle.append(
				'photo_property_card_frontal',
				registroData.photo_property_card_frontal
			)
			formVehicle.append(
				'photo_property_card_rear',
				registroData.photo_property_card_rear
			)
			formVehicle.append(
				'photo_thecnical_review',
				registroData.photo_thecnical_review
			)

			const token = await AsyncStorage.getItem('token')

			await Promise.all([
				fetch(API_URL + '/api/user/delivery/vehicle', {
					method: 'POST',
					body: formVehicle,
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'multipart/form-data'
					}
				}),
				fetch(API_URL + '/api/user/delivery/information', {
					method: 'POST',
					body: formDriver,
					headers: {
						Authorization: `Bearer ${token}`,
						'Content-Type': 'multipart/form-data'
					}
				})
			]).then(async ([resVehicle, resDriver]) => {
				if (resVehicle.ok && resDriver.ok) {
					console.log('Registro exitoso')
				} else {
					console.log('Error al registrar')
				}
			})

			navigation.navigate('Home')
		} catch (error) {
			setSubmitting(false)
			console.log(error)
			Alert.alert('Error', 'Ocurrió un error inesperado. Inténtalo de nuevo.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<FormikForm
				initialValues={{
					vehicle_type: 'moto',
					vehicle_model: 'asus',
					vehicle_brand: 'asus',
					year_manufacture_vehicle: '2024',
					vehicle_color: 'rojo',
					vehicle_plate: '3124123123',

					license_number: '3124123',
					license_expiration_date: '',

					policy_soat_number: '12355678',
					soat_expiration_date: '',
					partida_registral: 'partida registral',
					next_inspection_date: ''
				}}
				validationSchema={validations.continuarRegistroValidationSchema}
				onSubmit={handleSubmit}
				style={styles.form}
			>
				{({ handleSubmit, isSubmitting, values, setFieldValue }) => (
					<>
						<Text style={styles.title}>
							Elija el vehículo que desea registrar
						</Text>
						<View style={styles.vehiculoButtons}>
							<Button
								title='Moto'
								onPress={() => setFieldValue('vehicle_type', 'moto')}
								primary={values.vehicle_type === 'moto'}
								iconName='motorcycle'
								iconSet='FontAwesome5'
							/>
							<Button
								title='Auto'
								onPress={() => setFieldValue('vehicle_type', 'auto')}
								primary={values.vehicle_type === 'auto'}
								iconName='car'
								iconSet='FontAwesome5'
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Modelo y placa</Text>
							<View style={styles.row}>
								<TextInputField
									name='vehicle_brand'
									label='Marca'
									style={styles.input}
								/>
								<TextInputField
									name='vehicle_model'
									label='Modelo'
									style={styles.input}
								/>
							</View>
							<View style={styles.row}>
								<TextInputField
									name='year_manufacture_vehicle'
									label='Año fab.'
									style={styles.input}
									keyboardType='numeric'
								/>
								<TextInputField
									name='vehicle_color'
									label='Color'
									style={styles.input}
								/>
							</View>

							<TextInputField
								name='vehicle_plate'
								label='Placa'
								style={styles.input}
							/>
							<FotoButton
								title='Tome una foto de vehiculo por delante y por detras que se vea la placa'
								onPress={() => navigation.navigate('ModeloPlaca')}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Licencia de conducir</Text>
							<View style={styles.row}>
								<TextInputField
									name='license_number'
									label='N° licencia conducir'
									style={styles.input}
									keyboardType='numeric'
								/>
								<FechaComponent
									showDatePicker={showDatePickerLicencia}
									setShowDatePicker={setShowDatePickerLicencia}
									name='license_expiration_date'
									label='Fecha Licencia'
								/>
							</View>
							<FotoButton
								title='Tome una foto de su licencia de conducir por ambas caras'
								onPress={() => navigation.navigate('Licencia')}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>
								DNI o Carné de extranjería
							</Text>
							<FotoButton
								title='Tome una foto de su documento de identidad o carné de extranjería'
								onPress={() => navigation.navigate('DocumentoIdentidad')}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>SOAT</Text>
							<View style={styles.row}>
								<TextInputField
									name='policy_soat_number'
									label='N° Póliza SOAT'
									style={styles.input}
								/>
								<FechaComponent
									showDatePicker={showDatePickerSoat}
									setShowDatePicker={setShowDatePickerSoat}
									name='soat_expiration_date'
									label='Fecha Soat'
								/>
							</View>
							<FotoButton
								title='Adjunte su SOAT en formato .jpg o .pdf o tome una foto clara'
								onPress={() => navigation.navigate('Soat')}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Tarjeta de propiedad</Text>
							<TextInputField
								name='partida_registral'
								label='Partida registral'
								style={styles.input}
							/>
							<FotoButton
								title='Adjunte su tarjeta de propiedad en formato .jpg o .pdf o tome una foto ambas caras'
								onPress={() => navigation.navigate('TarjetaPropiedad')}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>
								Revisión técnica del vehículo
							</Text>
							<View style={styles.row}>
								<FechaComponent
									showDatePicker={showDatePickerInspeccion}
									setShowDatePicker={setShowDatePickerInspeccion}
									name='next_inspection_date'
									label='Fecha de Inspeccion'
								/>
							</View>
							<FotoButton
								title='Tome una foto de su revisión técnica'
								onPress={() => navigation.navigate('RevisionTecnica')}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>
								Certificado de antecedentes policiales
							</Text>
							<FotoButton
								title='Adjunte su certificado de antecedentes policiales en formato .pdf o tome una foto'
								onPress={() =>
									navigation.navigate('CertificadoAntecedentesPoliciales')
								}
							/>
						</View>

						<View style={styles.section}>
							<Text style={styles.sectionTitle}>Foto de Perfil</Text>
							<FotoButton
								title='Adjunte su foto de Perfil'
								onPress={() => navigation.navigate('FotoPerfil')}
							/>
						</View>

						<Button
							title='Continuar'
							onPress={handleSubmit}
							primary
							loading={isSubmitting}
						/>
					</>
				)}
			</FormikForm>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		padding: 20,
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#222',
		textAlign: 'center'
	},
	vehiculoButtons: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 20
	},
	section: {
		backgroundColor: '#FAFAFA',
		padding: 20,
		marginBottom: 30
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#222',
		marginBottom: 10
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 10
	},
	input: {
		flex: 1,
		marginRight: 5
	}
})

export default ContinuarRegistroScreen
