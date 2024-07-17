import { createContext, useEffect, useState } from 'react'

export const ContextExamen = createContext()

export const ExamenContext = ({ children }) => {
	const [results, setResults] = useState({})

	useEffect(() => {
		setResults({}) // Inicializa el estado de resultados
	}, [])

	return (
		<ContextExamen.Provider
			value={{
				results,
				setResults
			}}
		>
			{children}
		</ContextExamen.Provider>
	)
}
