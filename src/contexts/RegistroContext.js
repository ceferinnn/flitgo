// RegistroContext.js
import React, { createContext, useState } from 'react'

export const RegistroContext = createContext({
  registroData: {},
  setRegistroData: () => {}
})

export const RegistroProvider = ({ children }) => {
  const [registroVehicle, setRegistroVehicle] = useState(new FormData())
  const [registroDriver, setRegistroDriver] = useState(new FormData())

  return (
    <RegistroContext.Provider value={{ registroVehicle, registroDriver }}>
      {children}
    </RegistroContext.Provider>
  )
}
