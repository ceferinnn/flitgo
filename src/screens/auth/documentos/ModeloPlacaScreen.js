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
  const [selectedFiles, setSelectedFiles] = useState([])
  const { setRegistroData } = useContext(RegistroContext)

  const handleFileChange = (file, type) => {
    const updatedFiles = selectedFiles.filter(f => f.type !== type)
    setSelectedFiles([...updatedFiles, { ...file, type }])
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true)

    const files = selectedFiles.reduce((acc, current) => {
      acc[current.type] = {
        uri: current.uri,
        name: current.fileName,
        type: 'image/*'
      }
      return acc
    }, {})

    const valuesWithFiles = {
      ...values,
      ...files
    }

    setRegistroData(prevData => ({
      ...prevData,
      datosVehiculo: { ...prevData.datosVehiculo, ...valuesWithFiles }
    }))

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
                  handleFileChange(file, 'photo_vehicle_frontal')
                }
                mode='image'
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Cara posterior con placa</Text>
              <MediaPicker
                onFileChange={file =>
                  handleFileChange(file, 'photo_vehicle_rear')
                }
                mode='image'
              />
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Maletera abierta</Text>
              <MediaPicker
                onFileChange={file =>
                  handleFileChange(file, 'photo_vehicle_useful_space')
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
