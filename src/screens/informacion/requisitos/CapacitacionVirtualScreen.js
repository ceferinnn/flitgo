// Archivo: screens/informacion/DocumentoRequisitosScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import { API_URL } from '../../../constants'
import CapacitacionComponent from '../../../components/capacitacion/CapacitacionComponent'

const CapacitacionVirtualScreen = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  const getVideos = async () => {
    try {
      setLoading(true)

      const token = await AsyncStorage.getItem('token')

      if (!token) return

      const { data: response } = await axios.get(
        API_URL + '/api/user/delivery/training',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      const { data } = response
      const { trainings } = data
      setVideos(trainings)
    } catch (error) {
      console.log(error)
      Alert.alert('Error', 'Error intentelo mas tarde')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator color='blue' size='small' />
        </View>
      ) : (
        <CapacitacionComponent videos={videos} />
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

export default CapacitacionVirtualScreen
