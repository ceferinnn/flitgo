export const handleAxiosError = ({ showResponseData = true, error }) => {
  if (error.response) {
    if (showResponseData) {
      return error.response.data // Retorna el mensaje de error del servidor.
    }
  } else {
    return error.message // Retorna el mensaje de error general.
  }
}
