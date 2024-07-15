import React, { useEffect, useState } from 'react'
import RadioGroup from 'react-native-radio-buttons-group'
import { Alert, StyleSheet, Text, View } from 'react-native'

import Button from '../Button'
import axios from 'axios'
import { API_URL } from '../../constants'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ExamenComponent = ({ preguntas }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [loading, setLoading] = useState(false)

  const transformRespuestas = Object.entries(selectedAnswers).map(
    ([key, value]) => ({
      question_id: Number(key),
      responses_ids: [Number(value)]
    })
  )

  const handleSelectAnswer = (questionId, answerId) => {
    setSelectedAnswers(prevState => ({
      ...prevState,
      [questionId]: answerId
    }))
  }
  const onSubmit = async () => {
    const responses = {
      responses: transformRespuestas
    }

    try {
      setLoading(true)

      const token = await AsyncStorage.getItem('token')
      if (!token) return

      const { data: response } = await axios.post(
        API_URL + '/api/user/delivery/evaluation',
        responses,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      const { data } = response

      //* Mostrar una pantalla u otra
      console.log(data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Algo sucedio intentolo de nuevo')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {preguntas.length === 0 ? (
        <Text>No hay Preguntas</Text>
      ) : (
        <View style={styles.containerQuestions}>
          {preguntas.map((pregunta, idx) => (
            <View key={pregunta.id} style={styles.containerPreguntas}>
              <Text style={styles.preguntas}>
                {idx + 1}. {pregunta.question}
              </Text>

              <RadioGroup
                onPress={value => handleSelectAnswer(pregunta.id, value)}
                selectedId={selectedAnswers[pregunta.id]}
                containerStyle={{
                  alignItems: 'flex-start'
                }}
                radioButtons={pregunta.answers.map((respuesta, idx) => ({
                  id: `${respuesta.id}`,
                  label: `${respuesta.answer}`,
                  value: respuesta.id
                }))}
              />
            </View>
          ))}
        </View>
      )}

      {preguntas.length > 0 && (
        <>
          <View style={styles.expanded}></View>
          <View style={styles.button}>
            <Button
              title='Enviar'
              onPress={onSubmit}
              disabled={transformRespuestas.length !== preguntas.length}
              primary
              loading={loading}
            />
          </View>
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  preguntas: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerPreguntas: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5
  },
  containerQuestions: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 5
  },
  expanded: {
    flex: 1
  },
  respuestasContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
    paddingHorizontal: 20
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})
