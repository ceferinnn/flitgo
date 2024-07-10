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
import axios from 'axios'

const ContinuarRegistroScreen = ({ navigation }) => {
  const { registroVehicle, registroDriver } = useContext(RegistroContext)
  const [showDatePickerLicencia, setShowDatePickerLicencia] = useState(false)
  const [showDatePickerSoat, setShowDatePickerSoat] = useState(false)
  const [showDatePickerInspeccion, setShowDatePickerInspeccion] =
    useState(false)

  const handleSubmit = async (values, { setSubmitting }) => {
    //* Driver
    registroDriver.append('license_number', values.license_number)
    registroDriver.append(
      'license_expiration_date',
      values.license_expiration_date
    )
    registroDriver.append('type_file_police_records', 'pdf_jpg')

    //* Vehicle
    registroVehicle.append('vehicle_type', values.vehicle_type)
    registroVehicle.append('vehicle_model', values.vehicle_model)
    registroVehicle.append('vehicle_brand', values.vehicle_brand)
    registroVehicle.append(
      'year_manufacture_vehicle',
      values.year_manufacture_vehicle
    )
    registroVehicle.append('vehicle_color', values.vehicle_color)
    registroVehicle.append('vehicle_plate', values.vehicle_plate)
    registroVehicle.append('type_file_soat', 'pdf_jpg')
    registroVehicle.append('policy_soat_number', values.policy_soat_number)
    registroVehicle.append('soat_expiration_date', values.soat_expiration_date)
    registroVehicle.append('partida_registral', values.partida_registral)
    registroVehicle.append('next_inspection_date', values.next_inspection_date)

    try {
      setSubmitting(true)

      const token = await AsyncStorage.getItem('token')

      if (!token) {
        console.log('Token no proveido')
        return
      }

      const { data, status } = await axios.post(
        API_URL + '/api/user/delivery/vehicle',
        registroDriver,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      console.log({ data, status })

      /*  await Promise.allSettled([
        axios.post(API_URL + '/api/user/delivery/vehicle', formVehicle, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }),
        axios.post(API_URL + '/api/user/delivery/information', formDriver, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        })
      ])
        .then(response =>
          response.map(res => {
            if (res.status === 'fulfilled') {
              console.log('Registro Exitoso')
              navigation.navigate('Home')
            } else {
              console.log('error', res.reason + res.status)
            }
          })
        )
        .catch(err => console.log(err)) */
    } catch (error) {
      console.log(JSON.stringify(error))
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
        style={styles.form}>
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
