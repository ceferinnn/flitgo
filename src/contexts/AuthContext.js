import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '../constants'
import { Alert } from 'react-native'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [errorMessage, setErrorMessage] = useState(null)
	const [loading, setLoading] = useState(false)
	const [authChecked, setAuthChecked] = useState(false) // Nuevo estado para verificar si la autenticación se ha verificado

	useEffect(() => {
		const checkLoggedInUser = async () => {
			const userData = await AsyncStorage.getItem('userData')
			if (userData) {
				setUser(JSON.parse(userData))
			}
			setAuthChecked(true) // Marca la autenticación como verificada
		}
		checkLoggedInUser()
	}, [])

	const login = async values => {
		setLoading(true)
		try {
			const body = { user: values.email, password: values.password }

			const { data: json } = await axios.post(
				API_URL + '/api/auth/login/delivery',
				body
			)

			const { data } = json

			setUser(data?.user_delivery)
			await AsyncStorage.setItem('user', JSON.stringify(data?.user_delivery))
			await AsyncStorage.setItem('token', data?.token)
		} catch (error) {
			setErrorMessage('Error: ' + error.message)
		} finally {
			setLoading(false)
		}
	}

	const refreshStatus = async () => {
		setLoading(true)
		try {
			const token = await AsyncStorage.getItem('token')

			if (!token) {
				Alert.alert('Ups', 'No hay token')
			}

			const { data: json } = await axios.get(
				API_URL + '/api/user/delivery/states-requirements/',
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			)

			const { data } = json

			setUser(data?.user_delivery)
			await AsyncStorage.setItem(
				'user',
				JSON.stringify(data?.user_delivery ?? {})
			)
		} catch (error) {
			setErrorMessage('Error: ' + error.message)
		} finally {
			setLoading(false)
		}
	}

	const logout = async () => {
		try {
			setUser(null)
			await AsyncStorage.removeItem('token')
			await AsyncStorage.removeItem('user')
			clearErrorMessage()
		} catch (error) {
			setErrorMessage('Error al cerrar sesión: ' + error.message)
		}
	}

	const clearErrorMessage = () => {
		setErrorMessage('')
	}

	const isAuthenticated = () => {
		return user !== null
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				logout,
				errorMessage,
				clearErrorMessage,
				loading,
				isAuthenticated,
				setUser,
				refreshStatus, // Para tener los estados actuales
				authChecked // Pasar el estado de autenticación verificada al contexto
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
