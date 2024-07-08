// RegistroContext.js
import React, { createContext, useEffect, useState } from 'react'

export const RegistroContext = createContext({
  registroData: {},
  setRegistroData: () => {}
})

export const RegistroProvider = ({ children }) => {
  const [registroData, setRegistroData] = useState({})

  useEffect(() => {
    console.log(registroData)
  }, [registroData])

  return (
    <RegistroContext.Provider value={{ registroData, setRegistroData }}>
      {children}
    </RegistroContext.Provider>
  )
}
