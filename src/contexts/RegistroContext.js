// RegistroContext.js
import React, { createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../constants'

export const RegistroContext = createContext({
  registroVehicle: new FormData(),
  registroDriver: new FormData(),
  register: async (_values, _setLoader) => {}
})

export const RegistroProvider = ({ children }) => {
  const [registroVehicle, _setRegistroVehicle] = useState(new FormData())
  const [registroDriver, _setRegistroDriver] = useState(new FormData())

  const register = async values => {
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

    const token = await AsyncStorage.getItem('token')

    if (!token) {
      console.log('Token no proveido')
      return
    }

    const response = await fetch(API_URL + '/api/user/delivery/information/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      },
      body: registroDriver
    })

    const data = await response.json()

    console.log(data)

    /*       await Promise.allSettled([
        axios.post(API_URL + '/api/user/delivery/vehicle', registroVehicle, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        }),
        axios.post(API_URL + '/api/user/delivery/information', registroDriver, {
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
  }

  return (
    <RegistroContext.Provider
      value={{ registroVehicle, registroDriver, register }}>
      {children}
    </RegistroContext.Provider>
  )
}
