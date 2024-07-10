import React, { useState, useContext } from 'react'
import { View, Text } from 'react-native'
import FormikForm from '../../../components/forms/FormikForm'
import TextInputField from '../../../components/forms/TextInputField'
import MediaPicker from '../../../components/mediaPicker/MediaPicker'
import Button from '../../../components/Button'
import * as validations from '../validations/ModeloPlaca'
import { RegistroContext } from '../../../contexts/RegistroContext'
import ContainerScroll from '../../../components/containers/ContainerScroll'
import styles from './style'

const ModeloPlacaScreen = ({ navigation }) => {
  const [photo_vehicle_frontal, setphoto_vehicle_frontal] = useState(null)
  const [photo_vehicle_rear, setphoto_vehicle_rear] = useState(null)
  const [photo_vehicle_useful_space, setphoto_vehicle_useful_space] =
    useState(null)
  const { setRegistroData, registroVehicle } = useContext(RegistroContext)

  const handleFileChange = (file, setArchivo) => {
    setArchivo(file)
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)

    registroVehicle.append('long_useful_space', values.long_useful_space)
    registroVehicle.append('width_useful_space', values.width_useful_space)
    registroVehicle.append('height_useful_space', values.height_useful_space)

    const vehicle_frontal = {
      uri: photo_vehicle_frontal.uri,
      name: photo_vehicle_frontal.fileName,
      type: 'image/jpeg'
    }
    const vehicle_rear = {
      uri: photo_vehicle_rear.uri,
      name: photo_vehicle_rear.fileName,
      type: 'image/jpeg'
    }
    const useful = {
      uri: photo_vehicle_useful_space.uri,
      name: photo_vehicle_useful_space.fileName,
      type: 'image/jpeg'
    }

    registroVehicle.append('photo_vehicle_frontal', vehicle_frontal)
    registroVehicle.append('photo_vehicle_rear', vehicle_rear)
    registroVehicle.append('photo_vehicle_useful_space', useful)

    /*  const valuesWithFiles = {
      ...values,
      ...files
    }

    setRegistroData(prevData => ({
      ...prevData,
      ...valuesWithFiles
    })) */

    setSubmitting(false)
    navigation.navigate('ContinuarRegistro')
  }

  return (
    <ContainerScroll>
      <FormikForm
        initialValues={validations.initialValues}
        validationSchema={validations.continuarRegistroValidationSchema}
        onSubmit={handleSubmit}
        style={styles.form}>
        {({ handleSubmit, isSubmitting }) => (
          <>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                Medidas internas espacio útil
              </Text>
              <View style={styles.row}>
                <TextInputField
                  name='long_useful_space'
                  label='Largo'
                  style={styles.input}
                />
                <TextInputField
                  name='width_useful_space'
                  label='Ancho'
                  style={styles.input}
                />
                <TextInputField
                  name='height_useful_space'
                  label='Alto'
                  style={styles.input}
                />
              </View>
            </View>

            {/* Sección Cara frontal con placa */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cara frontal con placa</Text>
              <MediaPicker
                onFileChange={file =>
                  handleFileChange(file, setphoto_vehicle_frontal)
                }
                mode='image'
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cara posterior con placa</Text>
              <MediaPicker
                onFileChange={file =>
                  handleFileChange(file, setphoto_vehicle_rear)
                }
                mode='image'
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Maletera abierta</Text>
              <MediaPicker
                onFileChange={file =>
                  handleFileChange(file, setphoto_vehicle_useful_space)
                }
                mode='image'
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
    </ContainerScroll>
  )
}

export default ModeloPlacaScreen
