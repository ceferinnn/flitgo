import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'

const AppNavigator = () => {
  const { user } = useContext(AuthContext)

  return <>{user ? <MainNavigator /> : <AuthNavigator />}</>
}

export default AppNavigator
